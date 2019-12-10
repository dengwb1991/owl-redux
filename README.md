# owl redux

 A simple version of redux

## Introduction

In order to further understand `redux`, imitate the principle of `redux` implementation and implement a simple `redux`.

## Install

```bash
$ yarn add -D owl-redux
```

## Example

Try to use [example](https://github.com/dengwb1991/owl-redux/tree/master/examples)

```bash
$ git clone git@github.com:dengwb1991/owl-redux.git

$ cd owl-redux

$ yarn

$ yarn start
```

## API

| api | instructions |
| -- | -- |
| createStore | Created `Store` Object, Includes `getState`, `dispatch`, `subscribe`, `replaceReducer` functions |
| reducer | `Reducer` is a planning function that takes the old `state` and `action` and generates the new state |
| action | `Action` is an object and must contain a `type` field |
| dispatch | Dispatch (action) triggers an `action` to generate a new `state` |
| subscribe | Implement the subscription function. Each time the `dispatch` is triggered, the subscription function will be executed |
| combineReducers | Combine multiple reducers into one `reducer` |
| replaceReducer | Replace `reducer` function |
| middleware | Extending the `dispatch` function |
