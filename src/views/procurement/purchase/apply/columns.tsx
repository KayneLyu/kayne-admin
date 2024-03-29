
export function useColumns() {
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
    {
      label: "申请人",
      prop: "person",
      cellRenderer: ({ row }) => (
        <el-select v-model={row.person} clearable placeholder="请选择申请人">
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
    {
      label: "操作",
      fixed: "right",
      width: 90,
      slot: "operation"
    }
  ];

  return {
    columns,
  };
}
