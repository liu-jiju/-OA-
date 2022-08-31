// /**OA审批-->待办事项--通过驳回的对话框*/
<template>
<div>
      <!--通过驳回 对话框 开始-->
    <el-dialog
      :before-close='before'
      :title="iptTiltle ? '✔ 通过该申请' : '确认驳回该申请'"
      :visible.sync="flag"
      width="30%"
    >
      <div class="titleBox titleBoxCen" v-if="iptFlag" @click="iptFlag = !iptFlag">
        {{ iptTiltle ? '通过理由' : '驳回理由' }}
      </div>
      <input
        type="text"
        v-if="!iptFlag"
        @blur="blurInp"
        v-model="reason"
        v-focus
        :placeholder="iptTiltle ? '通过理由' : '驳回理由'"
        class="titleBox ipt1"
      />
      <span slot="footer" class="dialog-footer">
        <el-button @click="qu">取 消</el-button>
        <el-button type="primary" @click="determine">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog>
    </el-dialog>
    <!--通过驳回 对话框 结束-->
</div>
</template>

<script>
export default {
  name: 'adoptDialog',
  props: ['dialogTableVisible','iptTiltle'],
  components: {},
  data () {
    return {
      /**存储通过理由/驳回理由 */
       reason:'',
      /**控制对话框 */
      flag:false,
      /**通过驳回对话框*/
      //  iptTiltle: true,
       /**通过驳回的inp状态盒子/input*/
        iptFlag: false,
    }
  },
  created () { },
  mounted () { },
  methods: {
     /**inp失去焦点inp状态是盒子 */
    blurInp() {
      this.iptFlag = true;
    },
     /**点击确定*/
    determine() {
      if (this.iptTiltle) {
        /** 通过的接口*/
        alert('通过')
        //点击子组件的确定时候让父组件弹框重新赋状态避免弹框直接修改父组件传递的值
        this.$emit('dialogFlag')
      }else{
        // 驳回的接口
        alert('驳回')
        this.$emit('dialogFlag')
      }
      /**input置为空 */
      this.reason = '';
      /**取消弹框 */
      this.flag = false;
    },
    /**关闭前的回调*/
    before(){
      this.$emit('dialogFlag')
    },
    /**点击取消事件调用子传父 */
    qu(){
     this.$emit('dialogFlag')
    }
  },
  watch: {
    dialogTableVisible:function(newVal){
       this.flag=newVal
    }
  },
}
</script>
<style scoped lang='scss'>
.titleBoxCen {
  text-align: center;
}
.titleBox {
  width: 250px;
  border: 1px solid #dcdfe6;
  padding: 10px 0;
  padding-left: 13px;
  margin-left: 50px;
}
/**获取焦点*/
.ipt1:focus {
  outline: 1px solid #5b9eff; //边框不用border，用outline
  background: rgba(3, 16, 28, 0); //背景色
}
</style>
// /**OA审批-->待办事项--通过驳回的对话框 结束*/
