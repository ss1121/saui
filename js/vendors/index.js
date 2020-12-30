/*
 * Aotoo-hub
 * 多项目大前端脚手架
 * 作者：天天修改
 * home-url: http://www.agzgz.com
 * github: https: //github.com/webkixi
 */

import path from 'path'
import aotoo, {$$, lib, render, extTemplate} from "./ao2"
import './ajax'  // context.Fetcher
import _inject from 'aotoo-inject'
import Pager from "./page";
let context = lib.curContext()
let inject = _inject()


let ao2 = aotoo
ao2.lib = lib
ao2.render = render
ao2.$$ = $$
ao2.inject = inject

context.Pager = Pager
context.$$ = $$
context.ao2 = ao2

export {}