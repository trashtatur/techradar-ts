## 1.0.1
- Add `d3`dependency

## 1.0.2
- Fix `d3`import hopefully this time

## 2.0.0
- Add `link` and `active` parameter to entry schema
- Add `date` and `zoomed_in_quadrant` to radar config schema
- Adjust `entryService` to take additional parameters

## 2.0.1
- Make zoomed in quadrant optional, even though it technically isn't because IF you set it to undefined, it breaks the radar (because of course it does)

## 2.0.2
- Downgrade d3 from most recent version (7.9) to older version, because most recent version broke some features of the radar. Now using `d3v4` instead.

## 2.0.3
- Remove `@types/d3`as it broke the d3 import for the older version

## 2.0.4
- Fix the `d3`import because apparently, even though the documentation states it, you cannot import `d3`you have to import `d3v4`

## 2.1.0
- Add class attributes to text elements in svg to easier target them individually
- Add some stuff to `README.md`

## 2.2.0
- Specify exact length for `quadrants` and `rings` parameters of radar config, because anything besides a length of 4 breaks the radar
- Fix filepath in `README.md`

## 2.2.1
- Add length to rings too because VSCode didnt save it the first time...

## 2.3.0
- Change build config, add typecheck and export types properly

## 2.3.1
- Fix all type imports

## 3.0.0
- Change structure and fix the remaining stuff... hopefully

### 3.0.1
- Publish dist folder

### 3.0.3
- Remove wrong index.d.ts

### 3.0.4
- Fix commonjs resolve