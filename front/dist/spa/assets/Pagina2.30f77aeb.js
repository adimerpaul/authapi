import{Q as r}from"./QPage.f1f7181e.js";import{_ as s,J as n,K as c,L as i,S as e,Q as o}from"./index.ae4009b8.js";import"./render.b870233c.js";const l={name:"PaginaPage2",data(){return{token:localStorage.getItem("token"),cars:[]}},mounted(){this.carsGet()},methods:{carsGet(){this.$axios.get("http://192.168.1.7:82/api/cars",{headers:{Authorization:`Bearer ${this.token}`}}).then(t=>{console.log(t.data),this.cars=t.data})}}};function p(t,h,u,d,a,m){return n(),c(r,null,{default:i(()=>[e("h6",null,o(a.token),1),e("pre",null,o(a.cars),1)]),_:1})}var k=s(l,[["render",p]]);export{k as default};