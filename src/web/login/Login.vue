<template>
    <div class="center">
        <div class="center_text">
            <Form ref="formInline" :model="formInline" :rules="ruleInline" >
                <FormItem prop="user">
                    <Input type="text" size="large" v-model="formInline.user" placeholder="Username">
                        <Icon type="person" size="22" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" size="large" v-model="formInline.password" placeholder="Password">
                        <Icon type="locked" size="22" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" size="large" @click="handleSubmit('formInline')">Signin</Button>
                </FormItem>
            </Form>
        </div>
        <!-- <div>
            <Button type="info" @click="testSso()">TestSSO</Button>
        </div> -->
    </div>
</template>

<script>
export default {
    created () {
        console.log(window.name);
        console.log(document.cookie);
        console.log(document.location);
        // let url = document.location.toString();
        // var param = url.substr(url.indexOf("?") + 1);
        // console.log(param);
    },
    data () {
        return {
            formInline: {
                user: 'a',
                password: 'b'
            },
            ruleInline: {
                user: [
                    { 
                        required: true, 
                        message: 'Please fill in the user name', 
                        trigger: 'blur' 
                    }
                ],
                password: [
                    { 
                        required: true, 
                        message: 'Please fill in the password.', 
                        trigger: 'blur' 
                    },
                    { 
                        type: 'string', 
                        min: 1, 
                        message: 'The password lengthcannot be less than 6 bits', 
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            // console.log('## ' + name); // formInline
            var _router = this.$router;
            var _notice = this.$Notice;

            this.$refs[name].validate((valid) => {
                // console.log('## ' + valid); // true
                
                // console.log("## localStorage.token " + localStorage.token);
                // console.log("## localStorage.ssoToken " + localStorage.ssoToken);
                
                if (valid) {
                    // this.$Message.success('Success!')
                    let url = document.location.toString();
                    let param = url.substr(url.indexOf("?") + 1);
                    // console.log(param);
                    let arrParam = param.split("=");
                    let qa = arrParam[0];
                    let value = arrParam[1];
                    let backUrl = decodeURIComponent(value);
                    console.log(qa + ", " + value + ", " + backUrl);

                    this.$http.ajax({
                        url: '/logine?' + param,
                        method: 'post',
                        data: {
                            username: 'a',
                            passwd: 'b',
                            qa: value
                        }
                    }).then(function (response) {
                        if (response) {
                            console.log('## sso response 获取全局标识 ' + response.data.ssoToken);
                            console.log(response.data.st);
                            // console.log("## old token " + localStorage.token);
                            // localStorage.ssoToken = response.data.ssoToken;
                            // console.log("## new token " + localStorage.token);
                            if (response.data.ssoToken && response.data.st) {
                                document.cookie = 'gssoc=' + response.data.ssoToken + ';domain=sevenzero.org';

                                backUrl = backUrl + '?st=' + response.data.st;
                                console.log(backUrl); 

                                window.location.href = backUrl;
                            }
                                
                            // _notice.info({
                            //     title: '登录成功',
                            //     duration: 2
                            // });
                            // _router.push({name: 'Main'});
                        }
                    }).catch(function (error) {
                        console.log('## error ' + error);
                        // _router.push({name: 'Main'});
                    }) 
                }
                else {
                    // this.$Message.error('Fail!')
                }
            })
        }
        // testSso () {
        //     console.log("sso");
        //     this.$http.ajax({
        //         url: '/index',
        //         method: 'get'
        //     }).then(response => {
        //         if (response) {
        //             console.log(JSON.stringify(response.data));
        //         }
        //     }).catch(error => {
        //         console.log(error);
        //     });
        // }
    }
}
</script>

<style>
.center {
    text-align: center;
}
.center_text {
      display: inline-block;
      width: 400px;
      /* border:2px solid; */
      /* border-radius:10px; */
    }
</style>
