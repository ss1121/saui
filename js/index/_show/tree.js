import Tree from "components/tree";

import _message from "components/items/message";
const message = _message()

const treeData = [
  {title: '标题1', id: 'aaa'},
  {title: '标题2', parentId: 'aaa', id: 'level21'},
  {title: '标题8', parentId: 'level21', id: 'aaa1-1-1', checked: true, disabled: true},
  {title: '标题3', parentId: 'aaa', id: 'level2'},
  {title: '标题4', parentId: 'level2', id: 'aaa1-2-1', checked: true},
  {title: '标题5', parentId: 'level2', id: 'aaa1-2-2'},
  {title: '标题6', parentId: 'level2', id: 'aaa1-2-3'},
  {title: '标题6-1', parentId: 'aaa1-2-3', id: 'aaa1-3-1'},
  {title: '标题7', id: 'bbb'},
]
//checked: true 不代表全选，仅表示有值
const treeData2 = [
  {
    title: '菜单一',
    id: 'aaa',
    // checked: true,
    children: [
      {
        title: '标题2',
        parentId: 'aaa',
        id: 'level21',
        // checked: true,
        children: [
          {
            title: '标题8',
            parentId: 'level21',
            id: 'aaa1-1-1',
            checked: true,
          }
        ]
      },
      {
        title: '标题3',
        parentId: 'aaa',
        id: 'level2',
        // checked: true,
        children: [
          {
            title: '标题3-1',
            parentId: 'level2',
            id: 'level2-a',
            checked: true,
            disabled: true,
          },
          {
            title: '标题4',
            parentId: 'level2',
            id: 'level2-b'
          },
          {
            title: '标题5',
            parentId: 'level2',
            id: 'level2-1',
            // checked: true,
            children: [
              {
                title: '标题6',
                parentId: 'level2-1',
                id: 'level2-4',
                // checked: true,
              },
              {
                title: '标题7',
                parentId: 'level2-1',
                id: 'level2-4-2',
              },
            ]
          },
        ]
      }
    ]
  },
  {
    title: '菜单二',
    id: 'ss',
    children: [
      {
        title: '标题2',
        parentId: 'ss',
        id: 'ss-1',
      }
    ]
  }
]

const adapter = (data, output = []) => {
  let ix = 0
  let checkedStatus = 2
  data.map(item => {
    item.children && item.children.map(itemx => {
      if (itemx.checked) {
        ix ++
      }
    })
    if ((item.children && item.children.length > 0) && ix === item.children.length) {
      checkedStatus = 0
    }
    else if ((item.children && item.children.length > 0) && ix < item.children.length){
      checkedStatus = 1
    }
    else {
      checkedStatus = 2
    }
    output.push({
      title: item.title,
      idf: item.id,
      parent: item.parentId ? item.parentId : '',
      attr: {hasVals: item.children && item.children.length > 0 ? true : false, checkStatus: checkedStatus, disabled: item.disabled}
    })
    item.children && item.children.length > 0 ? adapter(item.children, output) : ''
  })
  return output
}

const treeInst = Tree({
  data: treeData2,
  header: {
    title: [
      {
        title: '获取选中数据',
        itemClass: 'ss-button btn-default',
        aim: 'getTreeData'
      },
      {
        title: '清空',
        itemClass: 'ss-button btn-grey mlr-default',
        aim: 'clearTreeData'
      },
      {
        title: '重置',
        itemClass: 'ss-button btn-minor',
        aim: 'resetData'
      },
      {
        title: '展开/收起',
        itemClass: 'ss-button btn-minor mlr-default',
        aim: 'onChangeShowAll'
      },
      {
        title: '显示/隐藏 Check',
        itemClass: 'ss-button btn-minor',
        aim: 'onChangeCheck'
      },
      {
        title: '更换点击图标',
        itemClass: 'ss-button btn-minor mlr-default',
        aim: 'onChangeToggle'
      },
    ],
    tilteClass: 'flex-row',
    itemClass: 'mb-default'
  },
  methods: {
    getTreeData() {
      const getData = treeInst.getChecked()
      message.notice({
        title: '选中的值为：',
        body: getData,
        showClose: true,
        timer: 3000,
      })
    },
    clearTreeData() {
      treeInst.clearChecked()
    },
    resetData() {
      treeInst.resetControl()
    },
    onChangeShowAll() {
      const aa = treeInst.getData().allShow
      aa ? treeInst.updateStyle({allShow: false}) : treeInst.updateStyle({allShow: true})
    },
    onChangeCheck() {
      const aa = treeInst.getData().showCheck
      aa ? treeInst.updateStyle({showCheck: false}, true) : treeInst.updateStyle({showCheck: true},true)
    },
    onChangeToggle(e, p  ,i) {
      const aa = treeInst.getData().icon
      if (aa.indexOf('icon-select') > -1) {
        treeInst.updateStyle({icon: 'icon-add', showCheck: false, allShow: false, listClass: 'ss-tree add'}, true)
      }
      else {
        treeInst.updateStyle({icon: 'icon-select', showCheck: false, allShow: false, listClass: 'ss-tree show'}, true)
      }
    }
  }
})

function template(state, props) {
  //方式二
  return (
    <>
      <View className="pages-title-lg">Tree 树形控件</View>
      <View className='demo-grid'>
        <treeInst.UI/>
      </View>
    </>
  )
}

export default function(Pager) {
  return Pager({
    template,
    data: {
      tipsList: []
    },
    
  })
}