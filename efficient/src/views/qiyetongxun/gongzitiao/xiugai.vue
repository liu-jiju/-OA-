v
<template>
	<div>
		<!-- 修改模态框 -->
		<el-dialog
			title="修改"
			:visible.sync="flag1"
			width="30%"
			@closed="$emit('close1')"
			>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
				<el-form-item label="姓名" prop="name" :label-width="'100px'">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="出勤" prop="name" :label-width="'100px'">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="旷工" prop="name" :label-width="'100px'">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="请假" prop="name" :label-width="'100px'">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="基本工资" prop="name" :label-width="'100px'">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="岗位工资" prop="name" :label-width="'100px'">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="flag1 = false">取 消</el-button>
				<el-button type="primary" @click="flag1 = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props:[
		'dialogFormVisible1'
	],
	data() {
		return {
			flag1: false,
			// formLabelWidth: '10px',
			ruleForm:{
				name:''
			},
			rules:{
				name: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
				],
			},
		};
	},
	watch: {
		dialogFormVisible1: function (newVal) {
			this.flag1 = newVal
			console.log(newVal);
		}
	},

	mounted() {

	},

	methods: {
		init(row){
     console.log(row);
		}

	},
};
</script>

<style lang="scss" scoped>

</style>
