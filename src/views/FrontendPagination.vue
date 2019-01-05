<template>
    <div>
        <el-table :data="tableData | paginationFilter(pageNo, pageSize)">
            <el-table-column label="ID">
                <template slot-scope="scope">
                    {{scope.row.id}}
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pageNo"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="tableData.length">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4}
            ],
            pageNo: 1,
            pageSize: 1
        }
    },
    mounted () {
    },
    methods: {
        handleCurrentChange (val) {
            this.pageNo = val
        }
    },
    filters: {
        paginationFilter (array, pageNo, pageSize) {
            let offset = (pageNo - 1) * pageSize
            let data = (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize)
            return data
        }
    }
}
</script>

<style scoped>

</style>
