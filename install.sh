#!/usr/bin/env sh
set -eu

SOURCE_ROOT="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
PLUGINS_DIR="${HOME}/.gemini/config/plugins"
TARGET_DIR="${PLUGINS_DIR}/agy-lens"

if [ ! -f "${SOURCE_ROOT}/plugin.json" ]; then
  echo "Invalid package directory: missing plugin.json in ${SOURCE_ROOT}" >&2
  exit 1
fi

mkdir -p "${TARGET_DIR}"
rm -rf "${TARGET_DIR}/lib" "${TARGET_DIR}/ui/icons.js" "${TARGET_DIR}/ui/charts.js" 2>/dev/null || true

for item in plugin.json package.json assets sidecars ui; do
  if [ -e "${SOURCE_ROOT}/${item}" ]; then
    cp -R "${SOURCE_ROOT}/${item}" "${TARGET_DIR}/"
  fi
done

echo "Installed Agy Lens -> ${TARGET_DIR}"
echo "No Antigravity binaries, shortcuts, or config.json files were modified."
echo "Enable Agy Lens in Antigravity Customizations and open the Aux Pane."
