<template>
    <div>
        <el-table :data="tableData | pagination(pageNo, pageSize)">
            <el-table-column label="ID">
                <template slot-scope="scope">
                    {{scope.row.id}}
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
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
        handleSizeChange (val) {
            this.pageSize = val
        },
        handleCurrentChange (val) {
            this.pageNo = val
        }
    },
    filters: {
        pagination (array, pageNo, pageSize) {
            let offset = (pageNo - 1) * pageSize
            let data = (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize)
            return data
        }
    }
}
</script>

<style scoped>

</style>
