#!/usr/bin/env sh
set -eu

if [ -z "${HOME:-}" ] || [ "${HOME}" = "/" ]; then
  echo "Invalid HOME directory: '${HOME:-}'" >&2
  exit 1
fi

TARGET_DIR="${HOME}/.gemini/config/plugins/agy-lens"
DATA_DIR="${HOME}/.gemini/antigravity/plugin_data/agy-lens"
KEEP_SETTINGS=0

for arg in "$@"; do
  if [ "$arg" = "--keep-settings" ]; then
    KEEP_SETTINGS=1
  fi
done

if [ -d "${TARGET_DIR}" ]; then
  if [ -f "${TARGET_DIR}/plugin.json" ] && ! grep -Eq '"name"[[:space:]]*:[[:space:]]*"agy-lens"' "${TARGET_DIR}/plugin.json"; then
    echo "Refusing to remove unrelated plugin at ${TARGET_DIR}" >&2
    exit 1
  fi
  rm -rf "${TARGET_DIR}"
  echo "Removed plugin: ${TARGET_DIR}"
else
  echo "Plugin not installed at ${TARGET_DIR}"
fi

if [ "${KEEP_SETTINGS}" -eq 0 ] && [ -d "${DATA_DIR}" ]; then
  rm -rf "${DATA_DIR}"
  echo "Removed plugin data: ${DATA_DIR}"
fi
