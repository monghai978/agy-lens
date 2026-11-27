$ErrorActionPreference = 'Stop'

$sourceRoot = $PSScriptRoot
$pluginsDir = Join-Path $HOME '.gemini\config\plugins'
$targetDir = Join-Path $pluginsDir 'agy-lens'

if (-not (Test-Path -LiteralPath (Join-Path $sourceRoot 'plugin.json'))) {
  throw "Invalid package directory: missing plugin.json in $sourceRoot"
}

New-Item -ItemType Directory -Path $pluginsDir -Force | Out-Null

if (Test-Path -LiteralPath $targetDir) {
  $existingPlugin = Join-Path $targetDir 'plugin.json'
  if (Test-Path -LiteralPath $existingPlugin) {
    $meta = Get-Content -LiteralPath $existingPlugin -Raw | ConvertFrom-Json
    if ($meta.name -ne 'agy-lens') {
      throw "Refusing to overwrite unrelated plugin at $targetDir ($($meta.name))"
    }
  }
}

New-Item -ItemType Directory -Path $targetDir -Force | Out-Null

# Clean up any stale unbundled files from older installs without deleting locked directories.
foreach ($stale in @('lib', 'ui\icons.js', 'ui\charts.js')) {
  $p = Join-Path $targetDir $stale
  if (Test-Path -LiteralPath $p) {
    Remove-Item -LiteralPath $p -Recurse -Force -ErrorAction SilentlyContinue
  }
}

$copyItems = @('plugin.json', 'package.json', 'assets', 'sidecars', 'ui')
foreach ($item in $copyItems) {
  $src = Join-Path $sourceRoot $item
  if (-not (Test-Path -LiteralPath $src)) { continue }
  if (Test-Path -LiteralPath $src -PathType Container) {
    $files = Get-ChildItem -LiteralPath $src -Recurse -File
    foreach ($file in $files) {
      $rel = $file.FullName.Substring($sourceRoot.Length).TrimStart('\', '/')
      $dest = Join-Path $targetDir $rel
      $destParent = Split-Path -Parent $dest
      New-Item -ItemType Directory -Path $destParent -Force | Out-Null
      Copy-Item -LiteralPath $file.FullName -Destination $dest -Force
    }
  } else {
    Copy-Item -LiteralPath $src -Destination (Join-Path $targetDir $item) -Force
  }
}

$installedMeta = Get-Content -LiteralPath (Join-Path $targetDir 'plugin.json') -Raw | ConvertFrom-Json
Write-Host "Installed Agy Lens v$($installedMeta.version) -> $targetDir"
Write-Host "No Antigravity binaries, shortcuts, or config.json files were modified."
Write-Host "Enable Agy Lens in Antigravity Customizations and open the Aux Pane."
