
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/vehicles"
  },
  {
    "renderMode": 2,
    "route": "/booking"
  },
  {
    "renderMode": 2,
    "route": "/payment"
  },
  {
    "renderMode": 2,
    "route": "/confirmation"
  },
  {
    "renderMode": 2,
    "route": "/my-bookings"
  },
  {
    "renderMode": 2,
    "route": "/sign-in"
  },
  {
    "renderMode": 2,
    "route": "/sign-up"
  },
  {
    "renderMode": 2,
    "route": "/my-account"
  },
  {
    "renderMode": 2,
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "route": "/our-services"
  },
  {
    "renderMode": 2,
    "route": "/tourism"
  },
  {
    "renderMode": 2,
    "route": "/book-tour"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5991, hash: 'c1ea080734ab9d68a07860e162d4f0725e2712d3d02e59d208c994454c62961a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: 'b9f7b2c93094d6e67f246b3428b525f62ced87530a5f660d41176d7b1de45a94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27129, hash: '01838f23d3a81bd7bde6376c178eca80e95780a7afaecb60e57c6bb4a6e32393', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'vehicles/index.html': {size: 27210, hash: '25041fba0047d7e678d0dee82b883366b815246cbb55ce51db21633b4f7e1e2e', text: () => import('./assets-chunks/vehicles_index_html.mjs').then(m => m.default)},
    'payment/index.html': {size: 27440, hash: '397d1fc39e082aa33459611f1f8962b9fc855131b6a38b116b5092150963a117', text: () => import('./assets-chunks/payment_index_html.mjs').then(m => m.default)},
    'confirmation/index.html': {size: 24922, hash: '46b4a93412fd11bc71a9a68158299b473b1d6c2fddb246b585e45077500617a6', text: () => import('./assets-chunks/confirmation_index_html.mjs').then(m => m.default)},
    'my-bookings/index.html': {size: 25368, hash: '411030d6f3442e81e1fb5ad76b7e971a1591146659418f23a9125bd44b979e2e', text: () => import('./assets-chunks/my-bookings_index_html.mjs').then(m => m.default)},
    'sign-in/index.html': {size: 24030, hash: '00d24e97c8ccde5e5cb24737ca7573226b98113183227c36695633c54af6b635', text: () => import('./assets-chunks/sign-in_index_html.mjs').then(m => m.default)},
    'sign-up/index.html': {size: 24386, hash: '2092ba09919b3670e2fc7bc826d615b03673f00d165d224b0c6ca842e7d5e2fb', text: () => import('./assets-chunks/sign-up_index_html.mjs').then(m => m.default)},
    'my-account/index.html': {size: 24388, hash: '561155196eab8043acc57ce5977d84a771ee64e67b747b62959517078299c63a', text: () => import('./assets-chunks/my-account_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 23789, hash: 'c9ae1051551013678e4723f0069c819bcd160967f9fca5eaa1740785499c7a6f', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'booking/index.html': {size: 27634, hash: '0c1e82241ead77ad3081b5a426523876807b16d21269d1200b9f84f1722a66bf', text: () => import('./assets-chunks/booking_index_html.mjs').then(m => m.default)},
    'tourism/index.html': {size: 23932, hash: '3c4b9885d2b151531f11cec258e240397ab010dff1bbe555db00b10f50161abf', text: () => import('./assets-chunks/tourism_index_html.mjs').then(m => m.default)},
    'our-services/index.html': {size: 23859, hash: 'e28083efc0ea1ae7f9054ca6cdb057c6b4885b9e5998a5acea7d07fbcd384933', text: () => import('./assets-chunks/our-services_index_html.mjs').then(m => m.default)},
    'book-tour/index.html': {size: 24754, hash: 'c30ad474b3fd8b434df1a4a16f07ba27d19eca9fa8937ef11eeead2313b1d9a4', text: () => import('./assets-chunks/book-tour_index_html.mjs').then(m => m.default)},
    'styles-BESRQDTG.css': {size: 306765, hash: '7mmx7/hH670', text: () => import('./assets-chunks/styles-BESRQDTG_css.mjs').then(m => m.default)}
  },
};
