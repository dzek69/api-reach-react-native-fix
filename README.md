# api-reach-react-native-fix

This is a ready-to-use fix to make [api-reach][1] work with React Native.

`api-reach` is built on web standards. React Native however isn't fully compatible with web standards.

## URL incompatibility

One big difference is that `URL` class is available in global scope, but it differs in implementation from web `URL`.
See [bug report][2]. Fix is required to make it work.

## AbortController incompatibility

Another thing - while `fetch` was available in React Native since beginning - aborting the request (using
AbortController) is pretty new thing in React Native. Fix is required for older versions (< 0.60.0) of React Native.

## Usage

How to use this fix? Put one line on the top of your main js file of your React Native application.

```javascript
import "api-reach-react-native-fix";
```

Use this is above fails (for even older versions or React Native):

```javascript
import "api-reach-react-native-fix/dist";
```

## What does it do?

The fix:

- feeds `api-reach` with custom `URL` implementation. It does not change global `URL` for full compatibility with
React Native!
- polyfills `AbortController` if needed and stores it in global. This won't do any harm for compatibility.

## License

MIT

[1]: https://github.com/dzek69/api-reach
[2]: https://github.com/facebook/react-native/issues/16434
