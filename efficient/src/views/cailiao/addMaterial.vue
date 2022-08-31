<!-- eslint-disable prettier/prettier -->
<template>
	<el-dialog title="新增材料" :visible.sync="dialogVisible" width="30%">
		<p class="metaName">材料名称<el-input v-model="input" class="add"></el-input></p>
		<p class="metaAddress">
			材料地址
			<el-upload
				class="upload-demo"
				action="https://jsonplaceholder.typicode.com/posts/"
				:on-preview="handlePreview"
				:on-remove="handleRemove"
				:before-remove="beforeRemove"
				multiple
				:limit="3"
				:on-exceed="handleExceed"
				:file-list="fileList"
			>
				<el-button size="small">点击上传</el-button>
			</el-upload>
		</p>
	</el-dialog>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
	data() {
		return {
			fileList: [],
			input: '',
			dialogVisible:false,
			handleRemove(file, fileList) {
			console.log(file, fileList)
		},
		handlePreview(file) {
			console.log(file)
		},
		handleExceed(files, fileList) {
			this.$message.warning(
				`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
			)
		},
		beforeRemove(file, fileList) {
			return this.$confirm(`确定移除 ${file.name}？`)
		},
		}
	},
	methods:{
		init(){
			this.dialogVisible=true
		}
	}
}
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" sco></style>
