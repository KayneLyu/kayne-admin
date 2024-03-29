import { ref } from "vue";
import { clone, delObjectProperty } from "@pureadmin/utils";
import { message } from "@/utils/message";

export function useColumns() {
  const editMap = ref({});

  const tableData = [
    {
      name: "尚城不锈钢",
      product: "激光切割",
      price: "5.5",
      concat: "13566666666",
      address: "东莞市万江区",
      duration: "5"
    },
    {
      name: "尚城不锈钢2",
      product: "激光切割",
      price: "5.5",
      concat: "13566666666",
      address: "东莞市万江区",
      duration: "2"
    }
  ];

  const dataList = ref(clone(tableData, true));

  const columns: TableColumnList = [
    {
      label: "供应商",
      prop: "name",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.name} />
          ) : (
            <p>{row.name}</p>
          )}
        </>
      )
    },
    {
      label: "产品类型",
      prop: "product",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.product} />
          ) : (
            <p>{row.product}</p>
          )}
        </>
      )
    },
    {
      label: "产品单价（元/件）",
      prop: "price",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.price} />
          ) : (
            <p>{row.price}</p>
          )}
        </>
      )
    },
    {
      label: "交货周期（天）",
      prop: "duration",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.duration} />
          ) : (
            <p>{row.duration}</p>
          )}
        </>
      )
    },
    {
      label: "联系方式",
      prop: "concat",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.concat} />
          ) : (
            <p>{row.concat}</p>
          )}
        </>
      )
    },
    {
      label: "联系地址",
      prop: "address",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.address} />
          ) : (
            <p>{row.address}</p>
          )}
        </>
      )
    },
    {
      label: "操作",
      width: "180",
      fixed: "right",
      slot: "operation"
    }
  ];

  // const columns: TableColumnList = [
  //   {
  //     label: "姓名",
  //     prop: "name",
  //     cellRenderer: ({ row, index }) => (
  //       <>
  //         {editMap.value[index]?.editable ? (
  //           <el-input v-model={row.name} />
  //         ) : (
  //           <p>{row.name}</p>
  //         )}
  //       </>
  //     )
  //   },
  //   {
  //     label: "性别",
  //     prop: "sex",
  //     cellRenderer: ({ row, index }) => (
  //       <>
  //         {editMap.value[index]?.editable ? (
  //           <el-switch
  //             v-model={row.sex}
  //             inline-prompt
  //             active-value={0}
  //             inactive-value={1}
  //             active-text="男"
  //             inactive-text="女"
  //           />
  //         ) : (
  //           <p>{row.sex === 0 ? "男" : "女"}</p>
  //         )}
  //       </>
  //     )
  //   },
  //   {
  //     label: "爱好",
  //     prop: "hobby",
  //     cellRenderer: ({ row, index }) => (
  //       <>
  //         {editMap.value[index]?.editable ? (
  //           <el-select v-model={row.hobby} clearable placeholder="请选择爱好">
  //             {options.map(item => {
  //               return (
  //                 <el-option
  //                   key={item.value}
  //                   label={item.label}
  //                   value={item.value}
  //                 />
  //               );
  //             })}
  //           </el-select>
  //         ) : (
  //           <el-tag type="primary">
  //             {options.filter(opt => opt.value == row.hobby)[0]?.label}
  //           </el-tag>
  //         )}
  //       </>
  //     )
  //   },
  //   {
  //     label: "日期",
  //     prop: "date",
  //     cellRenderer: ({ row, index }) => (
  //       <>
  //         {editMap.value[index]?.editable ? (
  //           <el-date-picker
  //             v-model={row.date}
  //             type="date"
  //             format="YYYY/MM/DD"
  //             value-format="YYYY-MM-DD"
  //             placeholder="请选择日期"
  //           />
  //         ) : (
  //           <p>{row.date}</p>
  //         )}
  //       </>
  //     ),
  //     minWidth: 110
  //   },
  //   {
  //     label: "操作",
  //     fixed: "right",
  //     slot: "operation"
  //   }
  // ];

  function onEdit(row, index) {
    editMap.value[index] = Object.assign({ ...row, editable: true });
  }

  async function onSave(index) {
    editMap.value[index].editable = false;
    message("保存成功", { type: "success" });
  }

  function onCancel(index) {
    editMap.value[index].editable = false;
    dataList.value[index] = delObjectProperty(editMap.value[index], "editable");
  }
  function onDel(row) {
    const index = dataList.value.indexOf(row);
    console.log(index, row);
    if (index !== -1) dataList.value.splice(index, 1);
  }

  return {
    editMap,
    columns,
    dataList,
    onEdit,
    onSave,
    onCancel,
    onDel
  };
}
