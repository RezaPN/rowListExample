# 2 Row List Example

![Example GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGNjMDlmN2YwYzI3MWEzMDAxOGE0NjVlNzA1OTVlMTM2Zjg2ZWQyOSZjdD1n/mgO0t1p3K4iFYKxFkN/giphy.gif)

This project is an example of how to create a 2 row list like Tokopedia and Shopee using the `FlatList` component in React Native. The project also demonstrates optimization techniques such as using `PureComponent`, `useMemo()`, and `useCallback()`.

## Getting Started

To get started, clone the repository and run `npm install`

git clone https://github.com/RezaPN/rowListExample.git

cd your-repository

npm install


## Usage

To run the application, use the following command:

npm start


This will start the Metro Bundler. You can then use the Expo app on your iOS or Android device to scan the QR code and run the app.

## Optimization Techniques

The project demonstrates the use of the following optimization techniques:

- **`PureComponent`**: This is used in the `Section` component to prevent unnecessary re-renders when the props have not changed.

- **`useMemo()`**: This is used to memoize the `allCapitalInWord()` function in the `Section` component to prevent unnecessary re-computation.

- **`useCallback()`**: This is used to memoize the `handleEndReached()` function in the `Home` component to prevent unnecessary re-creation of the function on each render.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
