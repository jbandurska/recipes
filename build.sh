#! /bin/bash

ng build --output-path docs --base-href /recipes/
mv docs/browser/* docs/
rmdir docs/browser/
cp docs/index.html docs/404.html
