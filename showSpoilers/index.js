(()=>{return (()=>{var s=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var f=(e,n)=>{for(var r in n)s(e,r,{get:n[r],enumerable:!0})},y=(e,n,r,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of m(n))!u.call(e,t)&&t!==r&&s(e,t,{get:()=>n[t],enumerable:!(a=c(n,t))||a.enumerable});return e};var h=e=>y(s({},"__esModule",{value:!0}),e);var x={};f(x,{default:()=>_});var d=vendetta.metro,l=vendetta.patcher,i=vendetta.ui.assets,p=vendetta.ui.toasts;var g=e=>e;var P=(0,d.findByName)("MessagesWrapperConnected"),_=g({onLoad(){try{(0,l.after)("apply",P,(e,n)=>{n.props.messages._array.forEach(({content:r})=>{r&&(r=r.replace(/\|\|(.*?)\|\|/g,(a,t)=>`\`${t.replace(/`/g,"\\`")}\``))})})}catch(e){(0,p.showToast)("There was an error!! omo Please check console",(0,i.getAssetByName)("ic_warning_24x").id),console.error(e)}},onUnload(){(0,p.showToast)("To revert changes you need to restart the app! -w-",(0,i.getAssetByName)("ic_information_filled_24x").id)}});return h(x);})()})()