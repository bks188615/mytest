<style lang="stylus" scoped>
    #chart{
        width :500px;
        height :300px;
    }
</style>
<template>
    <div id="chart">
        {{message}}
        {{msg}}
        <button @click="getData()">huoqo</button>
    </div>
</template>
<script>
export default{
    data(){
        return {
            message:"4324324"
        }
    },
    props:{
        msg:String
    },
    methods:{
        drawMyChart(){
            
        },
        getData(){
            console.log(this.message)
            console.log(this.msg)
        }
    }
}
</script>