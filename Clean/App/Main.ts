import { BrowserClass } from './AdminBSB/browser'
import { CardClass } from "./AdminBSB/card";
import { DropdownMenuClass } from './AdminBSB/drop-downmenu'
import { FormsHelpers } from './form-helpers'
import { InputClass } from './AdminBSB/input';
import { LeftSideBarClass } from './AdminBSB/left-sidebar';
import { MasksClass } from './AdminBSB/masks';
import { NavbarClass } from './AdminBSB/navbar';
import { PageLoaderClass } from './AdminBSB/page-loader';
import { RightSidebarClass } from './AdminBSB/right-sidebar';
import { SelectClass } from './AdminBSB/select';

import * as $ from 'jquery'; 

export class MainLoader {
    private _Browser: BrowserClass;
    private _CardClass: CardClass;
    private _DropdownMenu: DropdownMenuClass;
    private _FormsHelpers: FormsHelpers;
    private _LeftSideBar: LeftSideBarClass;
    private _Input: InputClass;
    private _MasksClass:MasksClass;
    private _Navbar: NavbarClass;
    private _PageLoaderClass: PageLoaderClass;
    private _RightSideBar: RightSidebarClass;
    private _SelectClass: SelectClass;

    constructor() {
        this._Browser = new BrowserClass();
        this._CardClass = new CardClass();
        this._DropdownMenu = new DropdownMenuClass();;
        this._FormsHelpers = new FormsHelpers();
        this._Input = new InputClass();
        this._LeftSideBar = new LeftSideBarClass()
        this._MasksClass = new MasksClass();
        this._Navbar = new NavbarClass();
        this._PageLoaderClass = new PageLoaderClass();
        this._RightSideBar = new RightSidebarClass();
        this._SelectClass = new SelectClass();
    }

    public Activate() {
        this._Browser.Activate();
        this._CardClass.Activate();
        this._DropdownMenu.Activate();
        this._FormsHelpers.Activate();
        this._Input.Activate();
        this._LeftSideBar.Activate();
        this._MasksClass.Activate();
        this._Navbar.Activate();
        this._RightSideBar.Activate();
        this._SelectClass.Activate();
        // PAGE LOADER 
        this._PageLoaderClass.Activate();
    }
}

$(document).ready(function () {
    // testing Main class
    var instanceOfMain = new MainLoader();
    instanceOfMain.Activate();
});
