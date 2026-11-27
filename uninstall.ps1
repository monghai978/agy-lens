param(
  [switch]$KeepSettings
)
$ErrorActionPreference = 'Stop'

$targetDir = Join-Path $HOME '.gemini\config\plugins\agy-lens'
$dataDir = Join-Path $HOME '.gemini\antigravity\plugin_data\agy-lens'

if (Test-Path -LiteralPath $targetDir) {
  $metaPath = Join-Path $targetDir 'plugin.json'
  if (Test-Path -LiteralPath $metaPath) {
    $meta = Get-Content -LiteralPath $metaPath -Raw | ConvertFrom-Json
    if ($meta.name -ne 'agy-lens') {
      throw "Refusing to remove unrelated plugin at $targetDir"
    }
  }
  Remove-Item -LiteralPath $targetDir -Recurse -Force
  Write-Host "Removed plugin: $targetDir"
} else {
  Write-Host "Plugin directory not found: $targetDir"
}

if (-not $KeepSettings -and (Test-Path -LiteralPath $dataDir)) {
  Remove-Item -LiteralPath $dataDir -Recurse -Force
  Write-Host "Removed plugin data: $dataDir"
}

Write-Host "Antigravity conversations and transcripts were untouched."
