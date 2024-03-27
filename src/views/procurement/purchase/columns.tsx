import { ref } from "vue";

export function useColumns() {
  const dataList = ref([]);

  const options = [
    {
      value: 0,
      label: "邓琳"
    },
    {
      value: 1,
      label: "邓丹"
    },
    {
      value: 2,
      label: "吕敬"
    },
    {
      value: 3,
      label: "阿敏"
    }
  ];

  const columns: TableColumnList = [
    {
      label: "项目名称",
      prop: "name",
      cellRenderer: ({ row }) => <el-input v-model={row.name} />
    },
    {
      label: "型号规格",
      prop: "type",
      cellRenderer: ({ row }) => <el-input v-model={row.type} />
    },
    {
      label: "采购数量",
      prop: "number",
      width: 100,
      cellRenderer: ({ row }) => <el-input v-model={row.number} />
    },
    {
      label: "用途",
      prop: "useful",
      cellRenderer: ({ row }) => <el-input v-model={row.useful} />
    },
    // {
    //   label: "申请人",
    //   prop: "person",
    //   cellRenderer: ({ row }) => <el-input v-model={row.person} />
    // },
    // {
    //   label: "采购数量",
    //   prop: "sex",
    //   cellRenderer: ({ row }) => (
    //     <el-switch
    //       v-model={row.sex}
    //       inline-prompt
    //       active-value={0}
    //       inactive-value={1}
    //       active-text="男"
    //       inactive-text="女"
    //     />
    //   )
    // },
    {
      label: "申请人",
      prop: "hobby",
      cellRenderer: ({ row }) => (
        <el-select v-model={row.hobby} clearable placeholder="请选择申请人">
          {options.map(item => {
            return (
              <el-option
                key={item.value}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </el-select>
      )
    },
    // {
    //   label: "日期",
    //   prop: "date",
    //   cellRenderer: ({ row }) => (
    //     <el-date-picker
    //       v-model={row.date}
    //       type="date"
    //       format="YYYY/MM/DD"
    //       value-format="YYYY-MM-DD"
    //       placeholder="请选择日期"
    //     />
    //   ),
    //   minWidth: 110
    // },
    {
      label: "操作",
      fixed: "right",
      width: 90,
      slot: "operation"
    }
  ];

  function onAdd() {
    dataList.value.push({
      id: dataList.value.length + 1,
      name: "",
      sex: 0,
      hobby: "",
      date: ""
    });
  }

  function onDel(row) {
    const index = dataList.value.indexOf(row);
    if (index !== -1) dataList.value.splice(index, 1);
  }

  return {
    columns,
    dataList,
    onAdd,
    onDel
  };
}