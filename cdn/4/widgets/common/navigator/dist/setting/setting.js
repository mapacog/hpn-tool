System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui","jimu-layouts/layout-runtime","jimu-theme","jimu-ui/basic/color-picker","jimu-ui/advanced/resource-selector","jimu-ui/advanced/style-setting-components"],(function(e,t){var o={},a={},l={},i={},n={},r={},s={},u={},c={};return{setters:[function(e){o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.LayoutType=e.LayoutType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.polished=e.polished,o.useIntl=e.useIntl},function(e){a.getAppConfigAction=e.getAppConfigAction},function(e){l.DirectionSelector=e.DirectionSelector,l.SettingRow=e.SettingRow,l.SettingSection=e.SettingSection},function(e){i.Button=e.Button,i.Label=e.Label,i.MultiSelect=e.MultiSelect,i.NumericInput=e.NumericInput,i.Radio=e.Radio,i.Select=e.Select,i.Switch=e.Switch,i.Tab=e.Tab,i.Tabs=e.Tabs,i.TextInput=e.TextInput,i.Tooltip=e.Tooltip,i.defaultMessages=e.defaultMessages},function(e){n.searchUtils=e.searchUtils},function(e){r.getNavigationVariables=e.getNavigationVariables,r.useTheme2=e.useTheme2},function(e){s.ThemeColorPicker=e.ThemeColorPicker},function(e){u.IconPicker=e.IconPicker},function(e){c.InputUnit=e.InputUnit,c.NavIconPicker=e.NavIconPicker,c.NavStyleSettingByState=e.NavStyleSettingByState,c.TextAlignment=e.TextAlignment}],execute:function(){e((()=>{var e={17160:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8.829 2.535a.909.909 0 0 0-1.657 0L2.291 13.356a.456.456 0 0 0 .831.377L4.818 10h6.365l1.696 3.733a.456.456 0 0 0 .831-.377zM5.272 9 8 3l2.729 6z" clip-rule="evenodd"></path></svg>'},88866:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},48891:e=>{"use strict";e.exports=o},23137:e=>{"use strict";e.exports=a},74758:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=i},20663:e=>{"use strict";e.exports=u},77756:e=>{"use strict";e.exports=l},55505:e=>{"use strict";e.exports=c},41362:e=>{"use strict";e.exports=s}},t={};function d(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,d),l.exports}d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var o in t)d.o(t,o)&&!d.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var p={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(p),d.d(p,{__set_webpack_public_path__:()=>O,default:()=>N});var e,t=d(48891),o=d(23137),a=d(77756);!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(e||(e={}));var l=d(30726),i=d(74758),n=d(34796);const{useMemo:r,useCallback:s}=t.React,u=()=>(0,t.getAppStore)().getState().appStateInBuilder.appConfig,c=(e,o,a)=>{var l;const i=(0,n.getNavigationVariables)();let r=null===(l=null==i?void 0:i[e])||void 0===l?void 0:l[o];const s=a?"16px":"8px",u={item:{default:{icon:{size:s},size:"14px"},active:{icon:{color:"pills"===o?"var(--white)":"var(--primary)",size:s},size:"14px"},hover:{icon:{color:"var(--primary)",size:s},size:"14px"}}};return"pills"===o&&Object.keys(u.item).forEach((e=>{u.item[e].borderRadius="6.25rem"})),r=(0,t.Immutable)(r).merge(u,{deep:!0}),r};var v=d(41362);const m="default",g=t.css`
  .tab-title-item{
    width: 33%;
  }
`,b=e=>{var o,i,r,s;const u=(0,n.useTheme2)(),{hideThumb:c,variant:d,onChange:p}=e,b=t.hooks.useTranslation(l.defaultMessages),w=null===(o=null==d?void 0:d.track)||void 0===o?void 0:o.bg,h=null===(i=null==d?void 0:d.progress)||void 0===i?void 0:i[m],x=null===(r=null==d?void 0:d.thumb)||void 0===r?void 0:r[m];return(0,t.jsx)(a.SettingRow,null,(0,t.jsx)(l.Tabs,{type:"pills",className:"flex-grow-1 w-100 h-100",fill:!0,css:g,defaultValue:"active"},(0,t.jsx)(l.Tab,{id:"active",title:b("active"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:b("color"),"aria-label":b("color"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:u,value:h.bg,onChange:e=>{p(["display","variant","progress",m,"bg"],e)}}))),!c&&(0,t.jsx)(l.Tab,{id:"thumb",title:b("thumb"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:b("fill"),"aria-label":b("fill"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:u,value:null==x?void 0:x.bg,onChange:e=>{p(["display","variant","thumb",m,"bg"],e)}})),(0,t.jsx)(a.SettingRow,{label:b("border"),"aria-label":b("border"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:u,value:null===(s=null==x?void 0:x.border)||void 0===s?void 0:s.color,onChange:e=>{p(["display","variant","thumb",m,"border","color"],e)}}))),(0,t.jsx)(l.Tab,{id:"inactive",title:b("inactive"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:b("color"),"aria-label":b("color"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:u,value:w,onChange:e=>{p(["display","variant","track","bg"],e)}})))))};var w=d(20663),h=d(55505);const x={_widgetLabel:"Views Navigation",tabStyle:"Tab style",navBtnStyle:"Navigation button style",stepTips:"Works only when a transition animation is set for the corresponding Section widget.",paginationStyle:"Pagination style"};var f=d(88866),y=d.n(f);const S=e=>{const o=window.SVG,{className:a}=e,l=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o}(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",a);return o?t.React.createElement(o,Object.assign({className:i,src:y()},l)):t.React.createElement("svg",Object.assign({className:i},l))};var j,T,R;!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(j||(j={})),function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(T||(T={})),function(e){e.Auto="AUTO",e.Stretch="STRETCH",e.Custom="CUSTOM"}(R||(R={}));var C=d(17160),I=d.n(C);const k=e=>{const o=window.SVG,{className:a}=e,l=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o}(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",a);return o?t.React.createElement(o,Object.assign({className:i,src:I()},l)):t.React.createElement("svg",Object.assign({className:i},l))},N=d=>{var p,m,g,f,y,j,T;const C=(0,n.useTheme2)(),I=t.hooks.useTranslation(l.defaultMessages,x),{config:N,id:O,onSettingChange:B,theme:A}=d,M=null!==(p=null==N?void 0:N.data)&&void 0!==p?p:(0,t.Immutable)({}),P=null!==(m=null==N?void 0:N.display)&&void 0!==m?m:(0,t.Immutable)({}),{section:L,type:z,views:U}=M,{vertical:V,type:D,navStyle:F,variant:_,advanced:E,standard:$,paginationFontColor:H}=P,{showIcon:G,showText:W,showTitle:q,previousText:J,nextText:K,hideThumb:Q,step:X=1,textAlign:Y,gap:Z,showPageNumber:ee}=$||{},te=((e,t,o,a,l)=>r((()=>o?a:c(e,t,null==l?void 0:l.showText)),[o,a,e,t,null==l?void 0:l.showText]))(D,F,E,_,$),oe=null===(g=null==te?void 0:te.root)||void 0===g?void 0:g.bg,ae=(e=>{const o=t.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.layouts})),a=t.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.sections})),l=t.ReactRedux.useSelector((e=>{var t;return null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),n=t.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.mainSizeMode}));return t.React.useMemo((()=>{const o=(0,t.getAppStore)().getState().appStateInBuilder.appConfig,a=i.searchUtils.getContentsInTheSameContainer(o,e,t.LayoutItemType.Widget,t.LayoutItemType.Section,l);return a&&a.length>0?a:i.searchUtils.getContentsInTheSameContainer(o,e,t.LayoutItemType.Widget,t.LayoutItemType.Section,n)||[]}),[e,l,a,o])})(O),le=(e=>t.ReactRedux.useSelector((t=>{var o,a,l,i;return null===(i=null===(l=null===(a=null===(o=null==t?void 0:t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===a?void 0:a.sections)||void 0===l?void 0:l[e])||void 0===i?void 0:i.views})))(L),ie=(e=>{var o;const a=null===(o=null==e?void 0:e.colors)||void 0===o?void 0:o.palette.dark[600];return t.React.useMemo((()=>t.css`
        .jimu-multi-select {
          width: 100%;
          > .jimu-dropdown {
            width: 100%;
          }
          > .jimu-menu-item {
            width: 100%;
            height: ${t.polished.rem(26)};
          }
        }
        .radio-container {
          display: flex;
          width: 100%;
          margin-top: 0.5rem;
          > span.jimu-radio {
            flex-shrink: 0;
            margin-top: 0.1rem;
          }
          > label {
            margin-bottom: 0;
          }
        }
        .list-guide-tip-button {
          svg {
            margin-top: ${t.polished.rem(-2)};
          }
        }
        .title-1 {
          > label {
            font-size: ${t.polished.rem(14)} !important;
            color: ${a} !important;
          }
        }
        .nav-button-icon-picker {
          width: ${t.polished.rem(100)};
          .jimu-dropdown-button:not(.icon-btn) {
            width: ${t.polished.rem(100)};
          }
        }
        .pagination-style-setting-row.jimu-widget-setting--row> label {
          margin-bottom: 0.75rem;
        }
        .color-drak-600> label {
          color: var(--dark-600) !important;
        }
        .color-drak-500> label {
          color: var(--dark-500) !important;
        }
      `),[a])})(A),[ne,re]=t.React.useState(J),[se,ue]=t.React.useState(K),ce=t.React.useMemo((()=>"nav"===D&&W),[W,D]),de=t.React.useMemo((()=>"nav"===D&&!W),[W,D]),pe=t.React.useMemo((()=>"nav"===D),[D]),[ve,me,ge,be]=(e=>{const{alternateIcon:o,activedIcon:a,previousIcon:i,nextIcon:n}=e||{},u=(0,t.useIntl)(),c=s((e=>{var t,o,a,i;if(!e)return null;const n=(r=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.filename,new Map([["dot","drawToolDot"],["dot-6","drawToolDot"],["dot-10","drawToolDot"],["pill","pill"],["cube","rhombus"],["circle","hollowCircle"],["double-circle","filledDoubleCircle"],["left-arrow-12","arrowLeft12"],["right-arrow-12","arrowRight12"]]).get(r)||(null===(o=null==e?void 0:e.properties)||void 0===o?void 0:o.filename));var r;return Object.assign(Object.assign({},e),{properties:Object.assign(Object.assign({},null==e?void 0:e.properties),{filename:n?u.formatMessage({id:n,defaultMessage:l.defaultMessages[n]||(null===(a=null==e?void 0:e.properties)||void 0===a?void 0:a.filename)}):null===(i=null==e?void 0:e.properties)||void 0===i?void 0:i.filename})})}),[u]);return[r((()=>c(o)),[o,c]),r((()=>c(a)),[a,c]),r((()=>c(i)),[i,c]),r((()=>c(n)),[n,c])]})($);t.React.useEffect((()=>{ne!==J&&re(J),se!==K&&ue(K)}),[J,K]);const we=(e,t)=>{B({id:O,config:Array.isArray(e)?N.setIn(e,t):N.set(e,t)})},he=(e,t,o)=>{we(["display","variant","item",e,t],o)},xe=t.React.useMemo((()=>(e=>{const o=(e=>{var t;const o=u();return null!==(t=null==e?void 0:e.map((e=>{var t,a;return{label:null===(a=null===(t=o.views)||void 0===t?void 0:t[e])||void 0===a?void 0:a.label,value:e}})))&&void 0!==t?t:[]})(e);return(0,t.Immutable)(o)})(le)),[le]),fe=t.React.useMemo((()=>xe.asMutable().map((e=>e.label))),[xe]),ye=t.React.useMemo((()=>ce||"navButtonGroup"===D?a.SettingRow:t.React.Fragment),[ce,D]),Se=t.React.useMemo((()=>ce||"navButtonGroup"===D?{flow:"wrap",label:I(ce?"tabStyle":"navBtnStyle"),"aria-label":I(ce?"tabStyle":"navBtnStyle"),role:"group",className:"color-drak-600"}:{}),[ce,I,D]);return(0,t.jsx)("div",{className:"widget-setting-navigator jimu-widget-setting",css:ie},(0,t.jsx)(a.SettingSection,null,(0,t.jsx)(a.SettingRow,{flow:"wrap",label:I("linkTo"),role:"group","aria-label":I("linkTo")},(0,t.jsx)(l.Select,{size:"sm",value:L,onChange:e=>{we(["data","section"],e.target.value)}},ae.map(((e,o)=>(0,t.jsx)("option",{key:o,value:e},(e=>{var t,o,a;const l=u();return null!==(a=null===(o=null===(t=null==l?void 0:l.sections)||void 0===t?void 0:t[e])||void 0===o?void 0:o.label)&&void 0!==a?a:""})(e)))))),L&&(0,t.jsx)(t.React.Fragment,null,pe&&(0,t.jsx)(a.SettingRow,{label:I("views"),role:"group","aria-label":I("views"),flow:"wrap"},(0,t.jsx)("div",{className:"radio-container"},(0,t.jsx)(l.Radio,{id:"view-type-auto",style:{cursor:"pointer"},"aria-label":I("auto"),name:"view-type",onChange:t=>{we(["data","type"],e.Auto)},checked:z===e.Auto}),(0,t.jsx)(l.Label,{style:{cursor:"pointer"},for:"view-type-auto",className:"ml-2"},I("auto"))),(0,t.jsx)("div",{className:"radio-container"},(0,t.jsx)(l.Radio,{id:"view-type-custom",style:{cursor:"pointer"},"aria-label":I("custom"),name:"view-type",onChange:t=>{we(["data","type"],e.Custom)},checked:z===e.Custom}),(0,t.jsx)(l.Label,{style:{cursor:"pointer"},for:"view-type-custom",className:"ml-2"},I("custom")))),z===e.Custom&&(0,t.jsx)(a.SettingRow,{flow:"wrap"},(0,t.jsx)(l.MultiSelect,{"aria-label":fe,values:U,items:xe,onClickItem:(e,t,o)=>{o.sort(((e,t)=>(null==le?void 0:le.indexOf(e))-(null==le?void 0:le.indexOf(t)))),we(["data","views"],o)},displayByValues:e=>{const t=e?e.length:0;return I("viewsSelected",{viewNumber:t})}})),"slider"!==D&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:I("direction"),"aria-label":I("direction"),role:"group"},(0,t.jsx)(a.DirectionSelector,{vertical:V,onChange:e=>{we(["display","vertical"],e),((e,o)=>{var a,l,i;if(!o)return;let n;const r=(0,t.getAppStore)().getState();n=window.jimuConfig.isBuilder?null==r?void 0:r.appStateInBuilder:r;const s=null===(a=null==n?void 0:n.appRuntimeInfo)||void 0===a?void 0:a.selection,u=null===(l=n.appConfig.layouts)||void 0===l?void 0:l[null==s?void 0:s.layoutId];if(u&&(null==u?void 0:u.type)===t.LayoutType.FixedLayout){const t="nav"===(null==e?void 0:e.type)&&(null===(i=null==e?void 0:e.standard)||void 0===i?void 0:i.showText),a=null==e?void 0:e.vertical;o().editLayoutItemSize(s,a?60:380,a?380:60).exec(),o().editLayoutItemProperty(s,"setting.autoProps",{width:t||a?R.Auto:R.Custom,height:t||!a?R.Auto:R.Custom}).exec()}})((0,t.Immutable)(P).merge({vertical:e}),o.getAppConfigAction)}})),pe&&(0,t.jsx)(a.SettingRow,{label:I("space"),"aria-label":I("space"),flow:"no-wrap"},(0,t.jsx)(h.InputUnit,{size:"sm",className:"w-50",value:Z,onChange:e=>{we(["display","standard","gap"],`${e.distance}${e.unit}`)}})),pe&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:I("alignment"),"aria-label":I("alignment"),role:"group"},(0,t.jsx)(h.TextAlignment,{textAlign:Y,onChange:e=>{we(["display","standard","textAlign"],e)}})),ce&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:I("showIcon")},(0,t.jsx)(l.Switch,{"aria-label":I("showIcon"),checked:G,onChange:(e,t)=>{we(["display","standard","showIcon"],t)}})),de&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:I("tooltip"),"aria-label":I("tooltip")},(0,t.jsx)(l.Switch,{checked:q,onChange:()=>{we(["display","standard","showTitle"],!q)}})),de&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:I("symbol"),"aria-label":I("symbol"),className:"title-1"}),(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:I("currentView"),"aria-label":I("currentView")},(0,t.jsx)(h.NavIconPicker,{configurableOption:"none",hideRemove:!0,size:8,icon:me,customLabel:null===(f=null==me?void 0:me.properties)||void 0===f?void 0:f.filename,onChange:e=>{we(["display","standard","activedIcon"],e)}})),(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:I("others"),"aria-label":I("others")},(0,t.jsx)(h.NavIconPicker,{configurableOption:"none",hideRemove:!0,size:8,icon:ve,customLabel:null===(y=null==ve?void 0:ve.properties)||void 0===y?void 0:y.filename,onChange:e=>{we(["display","standard","alternateIcon"],e)}}))),"navButtonGroup"===D&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",role:"group","aria-label":I("step"),label:(0,t.jsx)("div",null,I("step"),(0,t.jsx)(l.Tooltip,{title:I("stepTips"),showArrow:!1,placement:"bottom"},(0,t.jsx)(l.Button,{className:"list-guide-tip-button",type:"tertiary","aria-label":I("stepTips")},(0,t.jsx)(S,{size:"s"}))))},(0,t.jsx)(l.NumericInput,{size:"sm","aria-label":`${X}`,value:X,style:{width:"27%"},showHandlers:!1,min:.1,max:1,onAcceptValue:e=>{we(["display","standard","step"],+e)}})),"navButtonGroup"===D&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{flow:"wrap",label:I("previous"),role:"group","aria-label":I("previous"),className:"justify-content-between color-drak-600"},(0,t.jsx)(l.TextInput,{size:"sm",style:{width:t.polished.rem(120)},"aria-label":ne,value:ne,onChange:e=>{const t=e.target.value;re(t)},onAcceptValue:e=>{we(["display","standard","previousText"],e)}}),(0,t.jsx)(w.IconPicker,{className:"nav-button-icon-picker",configurableOption:"none",icon:ge,customLabel:null===(j=null==ge?void 0:ge.properties)||void 0===j?void 0:j.filename,onChange:e=>{we(["display","standard","previousIcon"],e)},setButtonUseColor:!1})),(0,t.jsx)(a.SettingRow,{flow:"wrap",label:I("next"),role:"group","aria-label":I("next"),className:"justify-content-between color-drak-600"},(0,t.jsx)(l.TextInput,{size:"sm",style:{width:t.polished.rem(120)},"aria-label":se,value:se,onChange:e=>{const t=e.target.value;ue(t)},onAcceptValue:e=>{we(["display","standard","nextText"],e)}}),(0,t.jsx)(w.IconPicker,{className:"nav-button-icon-picker",configurableOption:"none",icon:be,customLabel:null===(T=null==be?void 0:be.properties)||void 0===T?void 0:T.filename,onChange:e=>{we(["display","standard","nextIcon"],e)},setButtonUseColor:!1}))),"slider"===D&&(0,t.jsx)(a.SettingRow,{label:I("thumbHandle"),"aria-label":I("thumbHandle"),flow:"no-wrap"},(0,t.jsx)(l.Switch,{"aria-label":I("thumbHandle"),checked:!Q,onChange:()=>{we(["display","standard","hideThumb"],!Q)}})))),L&&(0,t.jsx)(a.SettingSection,null,(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:I("advance"),"aria-label":I("advance"),role:"group",className:"color-drak-600"},(0,t.jsx)(l.Switch,{"aria-label":I("advance"),checked:E,onChange:()=>{const e=!(null==N?void 0:N.display.advanced);let t=N.display.set("advanced",e);if(e){const e=c(D,F,W);t=t.set("variant",e)}else t=t.set("variant",void 0);we("display",t)}})),E&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{label:I("background"),"aria-label":I("background"),flow:"no-wrap",role:"group"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:C,value:oe,onChange:e=>{we(["display","variant","root","bg"],e)}})),ee&&(0,t.jsx)(a.SettingRow,{label:I("paginationStyle"),"aria-label":I("paginationStyle"),flow:"wrap",role:"group",className:"pagination-style-setting-row color-drak-600"},(0,t.jsx)(a.SettingRow,{label:I("fontColor"),role:"group","aria-label":I("fontColor"),flow:"no-wrap",css:t.css`flex: 1;`,className:"color-drak-500"},(0,t.jsx)(v.ThemeColorPicker,{"aria-label":I("fontColor"),icon:(0,t.jsx)(k,null),type:"with-icon",specificTheme:C,value:H,onChange:e=>{we(["display","paginationFontColor"],e)}}))),(0,t.jsx)(ye,Object.assign({},Se),pe&&(0,t.jsx)(h.NavStyleSettingByState,{variant:te,onlyBorderColor:"underline"===F,text:W,icon:G&&!ce,iconInText:G&&ce,onChange:he}),"slider"===D&&(0,t.jsx)(b,{hideThumb:Q,variant:te,onChange:we}),"navButtonGroup"===D&&(0,t.jsx)(h.NavStyleSettingByState,{variant:te,states:["default","hover","disabled"],onlyBorderColor:!1,text:!0,icon:!1,iconInText:!0,onChange:he})))))};function O(e){d.p=e}})(),p})())}}}));