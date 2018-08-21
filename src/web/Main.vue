<template>
    <div>
        <div>
            Main
        </div>
        <!-- <div>
            <Button type="info" @click="refreshToken()">RefreshToken</Button>
        </div> -->
    </div>
</template>

<script>

// 代码全部写在 export default 内部，写在外部就是普通的 javascript 方式；
export default {
    created () {
        console.log("## Main ");
        // this.$http.ajax({
        //     url: '/index',
        //     method: 'get'
        // }).then(function (response) {
        //     if (response) {
        //         console.log('## Main response ' + response.data);
        //         console.log("## Main response " + JSON.stringify(response.data));
        //     }
        // }).catch(function (error) {
        //     console.log('## Main error ' + error);
        // });
    },
    methods: {
        refreshToken () {
            console.log("刷新");
            this.$http.ajax({
                url: 'refreshToken',
                method: 'get'
            }).then(response => {
                if (response) {
                    console.log("## 刷新 response " + JSON.stringify(response.data));
                    localStorage.token = response.data.token;
                }
            }).catch(error => {
                console.log("刷新 " + error);
            });
        }
    }
}
</script>
