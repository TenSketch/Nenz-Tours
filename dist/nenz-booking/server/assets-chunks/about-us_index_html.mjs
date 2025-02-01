export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>NenzBooking</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, .75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, .5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:rgba(13, 110, 253, .25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}h1,h2,h5{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color)}h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){h2{font-size:2rem}}h5{font-size:1.25rem}p{margin-top:0;margin-bottom:1rem}ul{padding-left:2rem}ul{margin-top:0;margin-bottom:1rem}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{text-transform:none}[type=button],button{-webkit-appearance:button}[type=button]:not(:disabled),button:not(:disabled){cursor:pointer}.container,.container-fluid{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;background:0 0;border:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.nav-link:disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), .65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), .8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), .3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:.5rem;--bs-navbar-toggler-padding-y:.25rem;--bs-navbar-toggler-padding-x:.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), .15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:.25rem;--bs-navbar-toggler-transition:box-shadow .15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container-fluid{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-dark{--bs-navbar-color:rgba(255, 255, 255, .55);--bs-navbar-hover-color:rgba(255, 255, 255, .75);--bs-navbar-disabled-color:rgba(255, 255, 255, .25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:rgba(255, 255, 255, .1);--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.btn-close{--bs-btn-close-color:#000;--bs-btn-close-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");--bs-btn-close-opacity:.5;--bs-btn-close-hover-opacity:.75;--bs-btn-close-focus-shadow:0 0 0 .25rem rgba(13, 110, 253, .25);--bs-btn-close-focus-opacity:1;--bs-btn-close-disabled-opacity:.25;--bs-btn-close-white-filter:invert(1) grayscale(100%) brightness(200%);box-sizing:content-box;width:1em;height:1em;padding:.25em;color:var(--bs-btn-close-color);background:transparent var(--bs-btn-close-bg) center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:var(--bs-btn-close-opacity)}.btn-close:hover{color:var(--bs-btn-close-color);text-decoration:none;opacity:var(--bs-btn-close-hover-opacity)}.btn-close:focus{outline:0;box-shadow:var(--bs-btn-close-focus-shadow);opacity:var(--bs-btn-close-focus-opacity)}.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--bs-btn-close-disabled-opacity)}.btn-close-white{filter:var(--bs-btn-close-white-filter)}.offcanvas{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:var(--bs-box-shadow-sm);--bs-offcanvas-transition:transform .3s ease-in-out;--bs-offcanvas-title-line-height:1.5}.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}.offcanvas-header{display:flex;align-items:center;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);margin:calc(-.5 * var(--bs-offcanvas-padding-y)) calc(-.5 * var(--bs-offcanvas-padding-x)) calc(-.5 * var(--bs-offcanvas-padding-y)) auto}.offcanvas-title{margin-bottom:0;line-height:var(--bs-offcanvas-title-line-height)}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.text-bg-dark{color:#fff!important;background-color:RGBA(var(--bs-dark-rgb),var(--bs-bg-opacity,1))!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.d-flex{display:flex!important}.shadow-sm{box-shadow:var(--bs-box-shadow-sm)!important}.flex-column{flex-direction:column!important}.justify-content-around{justify-content:space-around!important}.align-items-center{align-items:center!important}.mt-5{margin-top:3rem!important}.me-2{margin-right:.5rem!important}.mb-2{margin-bottom:.5rem!important}.ms-auto{margin-left:auto!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.pe-3{padding-right:1rem!important}.text-center{text-align:center!important}.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.fa-solid{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-solid:before{content:var(--fa)}.fa-solid{font-family:"Font Awesome 6 Free"}.fa-sign-in{--fa:"\\f090"}.fa-map-marked-alt{--fa:"\\f5a0"}.fa-phone{--fa:"\\f095"}.fa-envelope{--fa:"\\f0e0"}.fa-info-circle{--fa:"\\f05a"}.fa-home{--fa:"\\f015"}.fa-car{--fa:"\\f1b9"}.fa-cogs{--fa:"\\f085"}.fa-calendar{--fa:"\\f133"}:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-brands-400-Q3XCMWHQ.woff2") format("woff2"),url("./media/fa-brands-400-R2XQZCET.ttf") format("truetype")}:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-regular-400-QSNYFYRT.woff2") format("woff2"),url("./media/fa-regular-400-XUOPSR7E.ttf") format("truetype")}:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url("./media/fa-solid-900-5ZUYHGA7.woff2") format("woff2"),url("./media/fa-solid-900-PJNKLK6W.ttf") format("truetype")}.fa-solid{font-weight:900}body{font-family:Poppins,sans-serif;background-color:#f7f9fc;color:#333;margin:0;padding:0}.py-custom{padding-block:5rem}.navbar{height:60px}.navbar .nav-link{display:flex}#bottom-nav{min-height:8vh}#bottom-nav .nav-link{color:#f7f9fc}.nav-link i{font-size:20px;display:block}h2{margin-bottom:1.5rem;color:#333}button{width:100%;padding:.75rem;background:#007bff;color:#fff;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:.3s ease-in-out}button:hover{background:#0056b3}
</style><link rel="stylesheet" href="styles-BESRQDTG.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-BESRQDTG.css"></noscript><style ng-app-id="ng">.loader-overlay[_ngcontent-ng-c2088054635]{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:9999}.spinner[_ngcontent-ng-c2088054635]{width:50px;height:50px;border:5px solid white;border-top-color:transparent;border-radius:50%;animation:_ngcontent-ng-c2088054635_spin 1s linear infinite}@keyframes _ngcontent-ng-c2088054635_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}</style><style ng-app-id="ng">.navbar-toggler[_ngcontent-ng-c2196748681]{width:auto}</style><style ng-app-id="ng">.about-us[_ngcontent-ng-c2955679199]{padding:50px 0;text-align:center}.about-us[_ngcontent-ng-c2955679199]   .container[_ngcontent-ng-c2955679199]{max-width:900px;margin:auto}.about-us[_ngcontent-ng-c2955679199]   h1[_ngcontent-ng-c2955679199]{font-size:2rem;color:#007bff}.about-us[_ngcontent-ng-c2955679199]   .features[_ngcontent-ng-c2955679199]{display:flex;justify-content:space-around;margin-top:20px}.about-us[_ngcontent-ng-c2955679199]   .features[_ngcontent-ng-c2955679199]   .feature[_ngcontent-ng-c2955679199]{max-width:300px}.about-us[_ngcontent-ng-c2955679199]   .features[_ngcontent-ng-c2955679199]   h2[_ngcontent-ng-c2955679199]{font-size:1.5rem;color:#333}.about-us[_ngcontent-ng-c2955679199]   .features[_ngcontent-ng-c2955679199]   p[_ngcontent-ng-c2955679199]{font-size:1rem;color:#666}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.1.4" _nghost-ng-c2088054635 ngh="3" ng-server-context="ssg"><app-navbar _ngcontent-ng-c2088054635 _nghost-ng-c2196748681 ngh="0"><nav _ngcontent-ng-c2196748681 class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top"><div _ngcontent-ng-c2196748681 class="container-fluid"><a _ngcontent-ng-c2196748681 href="#" class="navbar-brand d-flex align-items-center"><span _ngcontent-ng-c2196748681>NENZ Tours</span></a><button _ngcontent-ng-c2196748681 type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" class="navbar-toggler"><span _ngcontent-ng-c2196748681 class="navbar-toggler-icon"></span></button><div _ngcontent-ng-c2196748681 id="offcanvasNavbar" class="offcanvas offcanvas-end text-bg-dark"><div _ngcontent-ng-c2196748681 class="offcanvas-header"><h5 _ngcontent-ng-c2196748681 class="offcanvas-title">Menu</h5><button _ngcontent-ng-c2196748681 type="button" data-bs-dismiss="offcanvas" class="btn-close btn-close-white"></button></div><div _ngcontent-ng-c2196748681 class="offcanvas-body"><ul _ngcontent-ng-c2196748681 class="navbar-nav ms-auto pe-3"><li _ngcontent-ng-c2196748681 class="nav-item"><a _ngcontent-ng-c2196748681 class="nav-link" href="/home" jsaction="click:;"><i _ngcontent-ng-c2196748681 class="me-2 fa-solid fa-home"></i> Home </a></li><li _ngcontent-ng-c2196748681 class="nav-item"><a _ngcontent-ng-c2196748681 class="nav-link" href="/about-us" jsaction="click:;"><i _ngcontent-ng-c2196748681 class="me-2 fa-solid fa-info-circle"></i> About Us </a></li><li _ngcontent-ng-c2196748681 class="nav-item"><a _ngcontent-ng-c2196748681 class="nav-link" href="/our-services" jsaction="click:;"><i _ngcontent-ng-c2196748681 class="me-2 fa-solid fa-cogs"></i> Our Services </a></li><li _ngcontent-ng-c2196748681 class="nav-item"><a _ngcontent-ng-c2196748681 class="nav-link" href="/tourism" jsaction="click:;"><i _ngcontent-ng-c2196748681 class="me-2 fa-solid fa-map-marked-alt"></i> Tourism </a></li><li _ngcontent-ng-c2196748681 class="nav-item"><a _ngcontent-ng-c2196748681 class="nav-link" href="/vehicles" jsaction="click:;"><i _ngcontent-ng-c2196748681 class="me-2 fa-solid fa-car"></i> Vehicles </a></li><li _ngcontent-ng-c2196748681 class="nav-item"><a _ngcontent-ng-c2196748681 class="nav-link" href="/tel:%2B919876543210" jsaction="click:;"><i _ngcontent-ng-c2196748681 class="me-2 fa-solid fa-phone"></i> Phone </a></li><li _ngcontent-ng-c2196748681 class="nav-item"><a _ngcontent-ng-c2196748681 class="nav-link" href="/mailto:info@cabs.com" jsaction="click:;"><i _ngcontent-ng-c2196748681 class="me-2 fa-solid fa-envelope"></i> Email </a></li><!----></ul></div></div></div></nav></app-navbar><div _ngcontent-ng-c2088054635 class="app-layout"><main _ngcontent-ng-c2088054635 id="main-content" class="container mt-5 py-custom"><router-outlet _ngcontent-ng-c2088054635></router-outlet><app-about-us _nghost-ng-c2955679199 ngh="1"><section _ngcontent-ng-c2955679199 class="about-us"><div _ngcontent-ng-c2955679199 class="container"><h1 _ngcontent-ng-c2955679199>About NENZ</h1><p _ngcontent-ng-c2955679199>NENZ is your trusted partner for seamless vehicle booking, offering reliable services for personal, corporate, and logistics travel.</p><div _ngcontent-ng-c2955679199 class="features"><div _ngcontent-ng-c2955679199 class="feature"><h2 _ngcontent-ng-c2955679199>Mission</h2><p _ngcontent-ng-c2955679199>To provide hassle-free, customer-centric travel solutions with transparency and reliability.</p></div><div _ngcontent-ng-c2955679199 class="feature"><h2 _ngcontent-ng-c2955679199>Vision</h2><p _ngcontent-ng-c2955679199>Redefining convenience in the vehicle rental industry with cutting-edge technology and excellent customer service.</p></div></div></div></section></app-about-us><!----></main></div><app-footer _ngcontent-ng-c2088054635 ngh="2"><footer id="bottom-nav" class="d-flex justify-content-around py-3 shadow-sm fixed-bottom bg-primary"><a href="/" class="nav-link flex-column align-items-center text-center"><i class="mb-2 fa-solid fa-home"></i> Home</a><a href="/vehicles" class="nav-link flex-column align-items-center text-center"><i class="mb-2 fa-solid fa-car"></i>Book Vehicle</a><a href="/book-tour" class="nav-link flex-column align-items-center text-center"><i class="mb-2 fa-solid fa-calendar"></i> Book Tour</a><a href="/sign-in" class="nav-link flex-column align-items-center text-center"><i class="mb-2 fa-solid fa-sign-in"></i> Sign In</a><!----><!----></footer></app-footer></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="scripts-ROJE35DX.js" defer></script><script src="main-X35QMFXA.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"14":"t0"},"c":{"14":[{"i":"t0","r":1,"x":7}]}},{},{"t":{"10":"t1","11":"t2"},"c":{"10":[{"i":"t2","r":1}],"11":[]}},{"c":{"3":[{"i":"c2955679199","r":1}]}}]}</script></body></html>`;