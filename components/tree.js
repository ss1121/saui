const createComponent = ao2
const {lib} = ao2

function Tree(state, props) {
  const treeInst = ui_tree({
    data: state.data,
    listClass: state.listClass + (state.allShow ? ' show' : ''),
    header: state.header|| '',
    footer: state.footer|| '',
    methods: state.methods ? state.methods : ''
  })
  return <treeInst.UI />
}

const cpConfig = {
  attached() {
    this.icon = this.data.icon
    this.showCheck = this.data.showCheck
    const adapterData = this.adapter(this.data.data)
    this.setData({
      oldData: this.data.data,
      _data: this.data.data,
      data: this.data.data.length > 0 ? this._adapterCheck(adapterData)  : []
    })
  },
  ready() {},
  _adapterCheck(data, output=[]) {
    data.map((item, ii) => {
      output.push(
        {
          title: [
            item.attr.hasVals ? {
              itemClass: this.icon,
              aim: this['onShowHide']
            } : '',
            this.showCheck ? {
              itemClass: item.attr.checkStatus === 0 ? 'icon-check icon-checked' : item.attr.checkStatus === 1 ? 'icon-check icon-check-line' : 'icon-check',
              aim: !item.attr.disabled ? this['onCheck'] : '',
              attr: {id: item.idf}
            } : '',
            {
              title: item.title
            }
          ],
          titleClass: 'item-title row' + (item.attr.disabled ? ' disabled' : ''),
          idf: item.idf,
          attr: {title: item.title},
          parent: item.parent ? item.parent : '',
        }
      )
    })
    return output
  },
  onShowHide(e, p , i) {
    i.parentInst.toggleClass('block')
  },
  adapter(data, id, status, output = []) {
    let checkedStatus = 2
    let pid = null
    let xx = true
    data.map(item => {
      let ix = 0
      if (item.children && item.children.length > 0) {
        item.children.forEach(itemx => {
          if (itemx.id === pid) {
            itemx.checked = status
          }
          if (itemx.children && itemx.children.length > 0) {
            if (itemx.children.findIndex(itemy => !itemy.checked) > -1) {
              itemx.checked = false
            }
            else {
              itemx.checked = true
            }
          }
          if (itemx.checked || itemx.hasV) {
            ix ++
          }
        })
        
        if (ix > 0) {
          if (ix < item.children.length) {
            item.hasV = 1
            checkedStatus = 1
          }
          else{
            checkedStatus = 0
          }
          
        }
        else {
          checkedStatus = 2
        }
      }
      else {
        checkedStatus = item.checked ? 0 : 2
      }
      output.push({
        title: item.title,
        idf: item.id,
        parent: item.parentId ? item.parentId : '',
        attr: {hasVals: item.children && item.children.length > 0 ? true : false, checkStatus: checkedStatus, disabled: item.disabled}
      })
      item.children && item.children.length > 0 ? this.adapter(item.children, id, status, output) : ''
    })
    return output
  },
  regroupData(data, id, status, kk) {
    return data.map(item => {
      if (kk) {
        if (item.parentId === id) {
          !item.disabled ? item.checked = status : ''
          if (item.children && item.children.length) {
            this.regroupData(item.children, item.id, status, true)
          }
        }
      }
      else {
        if (item.id === id) {
          !item.disabled ? item.checked = status : ''
          if (item.children && item.children.length) {
            this.regroupData(item.children, item.id, status, true)
          }
        }
        if (item.children && item.children.length) {
          this.regroupData(item.children, id, status)
        }
      }
      return item
    })
  },
  onCheck(e, params , inst) {
    const id = inst.attr('id')
    let status = inst.hasClass('icon-checked') ? false : true
    const data = this.data._data
    const xx = this.regroupData(data, id, status)     //先更新基础数据，再去适配
    const _newData = this.adapter(xx, id, status)     //适配成组件需要的
    const akkk = this._adapterCheck(_newData)         //最终生成tree的数据结构
    this.setData({
      data: akkk,
      _data: this.data._data
    })
  },
  getChecked() {
    let hasCheckedData = []
    this.data.data.forEach(item => {
      if (item.checked === 0) {
        hasCheckedData.push({
          id: item.idf,
          title: item.attr['title']
        })
      }
    })
    return hasCheckedData
  },
  clearForEachData(data) {
    return data.map(item => {
      item.checked ? item.checked = false : ''
      item.disabled ? item.disabled = false : ''
      item.children && item.children.length > 0 ? this.clearForEachData(item.children) : ''
      return item
    })
  },
  clearChecked() {
    let hasCheckedData = []
    const data = this.data.oldData
    const clear = this.clearForEachData(data)
    this.setData({
      data: this._adapterCheck(clear)
    })
  },
  resetControl() {
    this.icon = 'icon-select'
    this.showCheck = true
    let param = {data: this._adapterCheck(this.data.oldData), listClass: 'ss-tree', allShow: true, showCheck: true, showIcon: true, icon: 'icon-select'}
    this.reset(param)
  },
  updateStyle(params, type) {
    if (type) {
      this.icon = params.icon || this.data.icon
      this.showCheck = params.showCheck
      this.setData({
        ...params,
        data: this._adapterCheck(this.data.oldData)
      })
    }
    else {
      this.setData(params)
    }
    
  }
}



export default function (params) {
  let dft = {
    id: lib.uniqueId('ss-tree'),
    data: [],
    _data: [],    //没有经过适配的数据
    listClass: 'ss-tree',
    allShow: true,
    showCheck: true,
    showIcon: true,
    icon: 'icon-select'
  }
  let opts = Object.assign({}, dft, params)
  opts.listClass = opts.listClass.indexOf('ss-tree') > -1 ?  opts.listClass : 'ss-tree ' + opts.listClass
  
  cpConfig.data = opts
  const cp = createComponent(cpConfig, Tree);
  return cp
}




//点击时，去操作数据，而不是直接更新全部数据
// onCheck(e, params , inst) {
  // if (inst.hasClass('icon-checked')) {
  //   inst.removeClass('icon-checked')
  //   this._check(inst.parent(), true)
  // }
  // else {
  //   inst.addClass('icon-checked')
  //   this._check(inst.parent())
  // }
// },
// _parentCheck(data, status) {
//   let length = 0              //当前选中项的同级数量
//   let _activeNum = 0          //选中了几项
//   let _activeLineNum = 0      //选中当没有全选
//   data.children.forEach(item => {
//     if (item.children.length > 0) {
//       length ++
//       item.children.forEach(itemx => {
//         if (itemx.hasClass('icon-checked') > 0) {
//           _activeNum ++
//         }
//         if (itemx.hasClass('icon-check-line') > 0) {
//           _activeLineNum ++
//         }
//       })
//     }
//   })
//   if (_activeNum === length) {
//     data.children.forEach(item => {
//       if (item.hasClass('icon-check')) {
//         if (status) {
//           item.addClass('icon-check-line')
//           item.removeClass('icon-checked')
//         }
//         else {
//           item.removeClass('icon-check-line')
//           item.addClass('icon-checked')
//         }
//       }
//     })
//   }
//   else {
//     data.children.forEach(item => {
//       if (item.hasClass('icon-check')) {
//         item.removeClass('icon-checked')
        
//         if (_activeNum === 0 && _activeLineNum === 0) {
//           item.removeClass('icon-check-line')
//         }
//         else {
//           item.addClass('icon-check-line')
//         }

//       }
//     })
//   }
//   !data.parent().hasClass(this.data.listClass) ? this._parentCheck(data.parent(), status) : ''

// },
// _childrenCheck(data, status) {
//   data.forEach(item => {
//     if (item.children.length > 0) {
//       item.children.forEach(itemx => {
//         if (itemx.hasClass('icon-check')) {
//           if (status) {
//             itemx.removeClass('icon-checked')
//           }
//           else {
//             itemx.addClass('icon-checked')
//           }
//         }
//         itemx.children.forEach(itemy => {
//           if (itemy.hasClass('icon-check')) {
//             if (status) {
//               itemy.removeClass('icon-checked')
//             }
//             else {
//               itemy.addClass('icon-checked')
//             }
//           }
//         })
//       })
//     }
//   })
// },
// _check(data, status) {
//   const val = data.children.findIndex(item => item.children.length > 0)
//   if (val >= 0) {
//     this._childrenCheck(data.children, status)
//   }

//   if (!data.parent().hasClass(this.data.listClass) && data.siblings().length > 0) {
//     this._parentCheck(data.parent(), status)
//   } 
// },
