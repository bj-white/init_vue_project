<template>
  <div>
    <el-form
      v-model="formInline"
      :inline="true"
      class="demo-form-inline"
      label-width="100px"
    >
      <el-form-item label="审批人">
        <el-input
          v-model="formInline.user"
          placeholder="审批人"
        />
      </el-form-item>
      <el-form-item label="审批人">
        <el-input
          v-model="formInline.user"
          placeholder="审批人"
        />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select
          v-model="formInline.region"
          placeholder="活动区域"
        />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select
          v-model="formInline.region"
          placeholder="活动区域"
        />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-date-picker
          v-model="formInline.date"
          type="date"
          placeholder="选择日期"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          查询
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        region: '',
        date: '',
      }
    };
  },
  computed: {},
  created () {},
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  }
};
</script>
