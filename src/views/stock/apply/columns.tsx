import { ref, createVNode, onMounted } from "vue";
// import { clone, delObjectProperty } from "@pureadmin/utils";
import { message } from "@/utils/message";
import { addDialog } from "@/components/ReDialog";

export function useColumns() {
  const options = [
    {
      label: "自动风环（风量）",
      value: 0
    },
    {
      label: "自动风环（风温）",
      value: 1
    },
    {
      label: "米克重（六组份）",
      value: 2
    },
    {
      label: "米克重（七组份）",
      value: 3
    },
    {
      label: "米克重（八组份）",
      value: 4
    }
  ];

  const types = [
    {
      label: "五金",
      value: 0
    },
    {
      label: "钣金",
      value: 1
    },
    {
      label: "电器",
      value: 2
    },
    {
      label: "气动",
      value: 3
    },
    {
      label: "管材",
      value: 4
    },
    {
      label: "机加工",
      value: 5
    },
    {
      label: "电机",
      value: 6
    },
    {
      label: "螺丝",
      value: 7
    }
  ];
  const dataList = ref([]);
  onMounted(() => {});

  const columns: TableColumnList = [
    {
      label: "名称",
      prop: "name",
      cellRenderer: ({ row }) => <el-input v-model={row.name} />
    },
    {
      label: "规格/型号",
      prop: "size",
      cellRenderer: ({ row }) => <el-input v-model={row.size} />
    },
    {
      label: "类型",
      prop: "type",
      cellRenderer: ({ row }) => (
        <el-select v-model={row.type} clearable placeholder="请选择适用机型">
          {types.map(item => {
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
      label: "适用机型",
      prop: "use",
      cellRenderer: ({ row }) => (
        <el-checkbox-group v-model={row.use}>
          {options.map(item => {
            return (
              <el-checkbox
                style={{ marginRight: 0 }}
                border
                key={item.value}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </el-checkbox-group>
      )
    },
    // {
    //   label: "编码",
    //   prop: "code",
    //   cellRenderer: ({ row }) => <el-input v-model={row.size} />
    // },
    {
      label: "单位",
      prop: "unit",
      width: "100",
      cellRenderer: ({ row }) => <el-input v-model={row.unit} />
    },
    {
      label: "数量",
      prop: "numbers",
      width: "100",
      cellRenderer: ({ row }) => <el-input v-model={row.numbers} />
    },
    {
      label: "操作",
      width: "100",
      fixed: "right",
      slot: "operation"
    }
  ];

  function onAdd() {
    dataList.value.push({
      // code: "DQFHDLQ2P20A",
      name: "断路器",
      type: 0,
      size: "2P20A",
      use: [1],
      unit: "个",
      numbers: 1
      // update: "2024/7/16"
    });
  }

  function onDel(row) {
    const index = dataList.value.indexOf(row);
    if (index !== -1) dataList.value.splice(index, 1);
  }

  function onClear() {
    dataList.value = [];
  }

  return {
    columns,
    dataList,
    onDel,
    onAdd,
    onClear
  };
}
