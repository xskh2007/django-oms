webpackJsonp([66],{DQwc:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=t("Zk8K"),a=t("nSkA"),o=t("vMJZ"),n={data:function(){return{ruleForm:{platform:"",merchant:"",type:"",rate:"",keyinfo:"",m_forwardurl:"",m_submiturl:"",create_user:localStorage.getItem("username"),action_user:"itsupport"},rules:{platform:[{required:!0,message:"请输入正确的内容",trigger:"change"}],merchant:[{required:!0,message:"请输入正确的内容",trigger:"change"}],type:[{required:!0,message:"请输入正确的内容",trigger:"change"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},platforms:[],merchants:[],paychannelnames:[],users:[],showtip:!1,showtiptext:""}},created:function(){this.getPlatforms(),this.getPayChannelNames(),this.getTicketUsers()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(t){if(!t)return console.log("error submit!!"),!1;Object(l.n)(r.ruleForm).then(function(t){var l={action_user:r.ruleForm.action_user,title:"【添加新支付通道】",message:"提交人: "+r.ruleForm.create_user+"\n处理人: "+r.ruleForm.action_user+"\n平台: "+r.ruleForm.platform+"     商户: "+r.ruleForm.merchant+"     通道: "+r.ruleForm.type};Object(a.h)(l),r.$emit("formdata",t.data),r.$refs[e].resetFields()}).catch(function(e){r.$message.error("检查此平台此商户下面通道是否已经存在"),console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()},getPlatforms:function(){var e=this;Object(l.i)().then(function(r){e.platforms=r.data})},getMerchants:function(){var e=this,r={platform__name:this.ruleForm.platform};Object(l.f)(r).then(function(r){e.merchants=r.data})},getPayChannelNames:function(){var e=this;Object(l.h)().then(function(r){e.paychannelnames=r.data})},getTicketUsers:function(){var e=this;Object(o.f)().then(function(r){e.users=r.data})},getPayChannelComplete:function(){var e=this,r={platform__name:this.ruleForm.platform,type__name:this.ruleForm.type};Object(l.j)(r).then(function(r){if(r.data.length>0){e.showtip=!0;var t=r.data[0].status;e.showtiptext=0===t?"Tip：该通道类型已添加，但未开始对接":2===t?"Tip：该通道类型已添加，并已对接完成":"Tip：该通道类型已添加，正在对接中"}else e.showtip=!1})}}},s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"平台",prop:"platform"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择平台"},on:{change:e.getMerchants},model:{value:e.ruleForm.platform,callback:function(r){e.$set(e.ruleForm,"platform",r)},expression:"ruleForm.platform"}},e._l(e.platforms,function(e){return t("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"商户",prop:"merchant"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择商户"},model:{value:e.ruleForm.merchant,callback:function(r){e.$set(e.ruleForm,"merchant",r)},expression:"ruleForm.merchant"}},e._l(e.merchants,function(e){return t("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"类型",prop:"type"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择通道类型"},on:{change:e.getPayChannelComplete},model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},e._l(e.paychannelnames,function(e){return t("el-option",{key:e.id,attrs:{value:e.name}})})),e._v(" "),e.showtip?t("a",{staticStyle:{color:"#ff2e61"}},[e._v(e._s(e.showtiptext))]):e._e()],1),e._v(" "),t("el-form-item",{attrs:{label:"费率",prop:"rate"}},[t("el-input",{model:{value:e.ruleForm.rate,callback:function(r){e.$set(e.ruleForm,"rate",r)},expression:"ruleForm.rate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"key信息",prop:"keyinfo"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.keyinfo,callback:function(r){e.$set(e.ruleForm,"keyinfo",r)},expression:"ruleForm.keyinfo"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"转发域名",prop:"m_forwardurl"}},[t("el-input",{model:{value:e.ruleForm.m_forwardurl,callback:function(r){e.$set(e.ruleForm,"m_forwardurl",r)},expression:"ruleForm.m_forwardurl"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"提交域名",prop:"m_submiturl"}},[t("el-input",{model:{value:e.ruleForm.m_submiturl,callback:function(r){e.$set(e.ruleForm,"m_submiturl",r)},expression:"ruleForm.m_submiturl"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择通知人"},model:{value:e.ruleForm.action_user,callback:function(r){e.$set(e.ruleForm,"action_user",r)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return t("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",disabled:e.showtip},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},u=[],i={render:s,staticRenderFns:u},m=i,c=t("VU/8"),f=c(n,m,!1,null,null,null);r.default=f.exports}});