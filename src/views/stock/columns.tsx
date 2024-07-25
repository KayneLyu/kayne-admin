import { ref, createVNode, onMounted } from "vue";
import { clone, delObjectProperty } from "@pureadmin/utils";
import { message } from "@/utils/message";
import { addDialog } from "@/components/ReDialog";

export function useColumns() {
  const editMap = ref({});
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
  const tableData = [
    {
      id: 1,
      code: "DQFHDLQ2P20A",
      name: "断路器",
      type: 2,
      size: "2P20A",
      use: [1],
      unit: "个",
      numbers: 1,
      process: "外购",
      update: "2024/7/16"
    },
    {
      id: 2,
      code: "DQFHDLQ2P20A",
      name: "断路器",
      size: "2P20A",
      type: 2,
      use: [3],
      unit: "个",
      numbers: 1,
      process: "外购",
      update: "2024/7/16"
    }
  ];
  onMounted(() => {});

  const dataList = ref(clone(tableData, true));

  const columns: TableColumnList = [
    {
      label: "ID",
      prop: "name",
      width: "100",
      cellRenderer: ({ row, index }) => <p>{row.id}</p>
    },
    {
      label: "名称",
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
      label: "规格/型号",
      prop: "size",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.size} />
          ) : (
            <p>{row.size}</p>
          )}
        </>
      )
    },
    {
      label: "类型",
      prop: "type",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-select
              v-model={row.type}
              clearable
              placeholder="请选择适用机型"
            >
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
          ) : (
            <el-tag type="success" size="large">
              <p>{types.filter(opt => opt.value == row.type)[0]?.label}</p>
            </el-tag>
          )}
        </>
      )
    },
    {
      label: "适用机型",
      prop: "use",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
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
          ) : (
            <>
              {options
                .filter(opt => row.use.includes(opt.value))
                .map(item => {
                  return (
                    <el-tag type="primary" class="m-1">
                      {item.label}
                    </el-tag>
                  );
                })}
            </>
          )}
        </>
      )
    },
    {
      label: "编码",
      prop: "code",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.code} />
          ) : (
            <p>{row.code}</p>
          )}
        </>
      )
    },
    {
      label: "单位",
      prop: "unit",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.unit} />
          ) : (
            <p>{row.unit}</p>
          )}
        </>
      )
    },
    {
      label: "数量",
      prop: "numbers",
      cellRenderer: ({ row, index }) => (
        <>
          {editMap.value[index]?.editable ? (
            <el-input v-model={row.numbers} />
          ) : (
            <p>{row.numbers}</p>
          )}
        </>
      )
    },
    {
      label: "工序",
      prop: "process",
      cellRenderer: ({ row, index }) => <p>{row.process}</p>
    },
    {
      label: "更新时间",
      prop: "update",
      cellRenderer: ({ row, index }) => <p>{row.update}</p>
    },
    {
      label: "操作",
      width: "150",
      fixed: "right",
      slot: "operation"
    }
  ];

  function onEdit(row, index) {
    editMap.value[index] = Object.assign({ ...row, editable: true });
  }

  async function onSave(index) {
    editMap.value[index].editable = false;
    console.log(dataList.value[index]);
    message("保存成功", { type: "success" });
  }

  function onCancel(index) {
    editMap.value[index].editable = false;
    dataList.value[index] = delObjectProperty(editMap.value[index], "editable");
  }

  function onDel(row) {
    addDialog({
      title: "新增供应商",
      closeOnClickModal: false,
      contentRenderer: () => createVNode("P", null, "是否删除该供应商？"),
      closeCallBack({ args }) {
        if (args.command !== "sure") {
          return;
        }
        const index = dataList.value.indexOf(row);
        if (index !== -1) dataList.value.splice(index, 1);
      }
    });
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
