# babel-preset
Babel preset for js project

## Install

```
yarn add -D @pohodnik/babel-preset
```
or

```
npm install --save-dev @pohodnik/babel-preset
```

## Usage

in *.babelrc* file

```
{
	"presets": ["@pohodnik/babel-preset"]
}
```

### Adding Typescript (Optional)
```
yarn add -D @babel/preset-typescript
```

in *.babelrc*
```
{
	"presets": [
		"@pohodnik/babel-preset",
		"@babel/preset-typescript"
	]
}
```
