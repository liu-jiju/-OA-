// 企业通讯-->企业通信
<template>
	<div>
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="发件箱" name="first">
				<div class="dizhi">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="发件地址" prop="address">
							<el-input v-model="ruleForm.address"></el-input>
							<el-button style="background: white;color: black;">抄送人</el-button>
						</el-form-item>
						<el-form-item label="抄送人" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="发件标题" prop="title">
							<el-input v-model="ruleForm.title"></el-input>
						</el-form-item>
						<el-form-item label="发件内容" prop="content">
							<textarea name="" id="" cols="70" rows="20">

							</textarea>
							<el-upload
								class="upload-demo"
								action="https://jsonplaceholder.typicode.com/posts/"
								:on-preview="handlePreview"
								:on-remove="handleRemove"
								:before-remove="beforeRemove"
								multiple
								:limit="3"
								:on-exceed="handleExceed"
								:file-list="fileList">
								<el-button size="small" type="primary">点击上传</el-button>
								<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
							</el-upload>
						</el-form-item>
						<el-form-item style="margin-left: 400px;">
							<el-button type="primary">发送</el-button>
							<el-button type="primary" style="background: #6fa4f6;">取消</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-tab-pane>
			<el-tab-pane label="收件箱" name="second">
				<table border="1" cellspacing="0" style="width: 800px;height: 400px;">
					<thead>
						<tr>
							<th>xxxx邮件</th>
							<th>标题：请假申请</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>111</td>
							<td rowspan="8">111</td>
						</tr>
						<tr>
							<td>111</td>
						</tr>
						<tr>
							<td>111</td>
						</tr>
						<tr>
							<td>111</td>
						</tr>
						<tr>
							<td>111</td>
						</tr>
						<tr>
							<td>111</td>
						</tr>
						<tr>
							<td>111</td>
						</tr>
						<tr>
							<td>111</td>
						</tr>
					</tbody>
				</table>
				<div style="text-align: center;margin-top: 50px;">
					<el-button type="primary" style="background: #6fa4f6;">取消</el-button>
				</div>

			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName: 'first',
			ruleForm:{
				address:'',
				name:'',
				title:'',
			},
			rules:{
				address:[
					{ required: true, message: '请输入地址', trigger: 'blur' },
				],
				name:[
					{ required: true, message: '请输入抄送人', trigger: 'blur' },
				],
				title:[
					{ required: true, message: '请输入标题', trigger: 'blur' },
				],
			},
			fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

		};
	},

	mounted() {

	},

	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		},
		beforeRemove(file, fileList) {
			return this.$confirm(`确定移除 ${ file.name }？`);
		}
	},
};
</script>

<style lang="scss" scoped>
.el-input{
	width: 500px;
}
textarea{
	border: none;
	outline: none;
}
.table{
	border: 1;
	width: 200px;
}
</style>
