# Material UI Portfolio

## Purpose

A portfolio single page application using React and Material UI

## Site available here [Portfolio](https://portfolio.majorziploc.com/)

### To install dependency

```
npm install
```

### To start the server

```
npm run start
```

### For Production Build

```
npm run build
```

Server will be available at http://127.0.0.1:3000 in your browser

### Development Tools

- node v18.14.2
- npm v9.5.0
- nvim v0.9.2

### Things to improve

#### Fix embedded game

As of now, the fallback iframe thumbnail shows. May need some extra iframe setting or server setting to get it working
./_header and ./netlify.toml are related to server settings
  should only require one or the other
  https://docs.netlify.com/routing/headers/#syntax-for-the-headers-file

#### Frontend MUI Theme

add styles to createTheme() so that every component doesnt have to fight the default styles of mui. styles will be managed globally if this is done

#### Home Page Mobile Issue

After switching from svg to pixel art. The page starts slightly lower than before until you click on anything on the page. Then it snaps into place.
If you reload the page or nav to any sub page and back, then the placement is right. It is only an issue on first load
NOTE: only happens on mobile when you going straight to this site from the blank google chrome page - the page that is waiting for the user to type in a url to go to
if you go to this site from any other site, then its fine on load
