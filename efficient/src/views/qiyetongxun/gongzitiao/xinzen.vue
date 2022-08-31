<template>
	<div>
		<!-- 模态框 -->
		<el-dialog
				title="新增工资条"
				:visible.sync="flag"
				width="30%"
				@closed="$emit('close')"
				>
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="姓名">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
							<el-option label="区域二" value="beijing1"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div>其他信息</div>
				<span slot="footer" class="dialog-footer">
					<el-button type="primary" @click="flag = false">新增</el-button>
					<el-button @click="flag = false">取 消</el-button>
				</span>
			</el-dialog>
	</div>
</template>

<script>
export default {
	props:[
		'dialogFormVisible'
	],
	data() {
		return {
			flag: false,
			form:{
				region:'',
			},
		};
	},
	watch:{
		dialogFormVisible: function (newVal) {
			this.flag = newVal
			console.log(newVal);
		}
	},

	mounted() {

	},

	methods: {

	},
};
</script>

<style lang="scss" scoped>

</style>
