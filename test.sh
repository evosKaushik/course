#!/usr/bin/env bash

invalid_files=()

find . \
  \( \
    -name ".git" -o \
    -name "node_modules" -o \
    -name ".next" -o \
    -name ".turbo" -o \
    -name ".cache" -o \
    -name "dist" -o \
    -name "build" -o \
    -name "out" -o \
    -name "coverage" -o \
    -name ".vscode" -o \
    -name ".idea" -o \
    -name ".vercel" -o \
    -name ".pnpm-store" -o \
    -name ".yarn" -o \
    -name ".parcel-cache" -o \
    -name ".svelte-kit" -o \
    -name ".nuxt" -o \
    -name ".angular" \
  \) -prune -o -print0 |
while IFS= read -r -d '' path; do
    name=$(basename "$path")

    shopt -s nocasematch

    if [[ "$name" =~ ^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\..*)?$ ]] ||
       [[ "$name" =~ [\<\>\:\"\/\\\|\?\*] ]] ||
       [[ "$name" =~ [[:space:]]$ ]] ||
       [[ "$name" =~ \.$ ]] ||
       printf '%s' "$name" | grep -q $'\n' ||
       printf '%s' "$name" | grep -q $'\r'
    then
        invalid_files+=("$path")
    fi

    shopt -u nocasematch
done

echo
echo "=============================="
echo " Windows Compatibility Report "
echo "=============================="

if [ ${#invalid_files[@]} -eq 0 ]; then
    echo "✅ No invalid filenames found."
else
    echo "❌ Found ${#invalid_files[@]} invalid filename(s):"
    echo
    printf '%s\n' "${invalid_files[@]}"
fi
