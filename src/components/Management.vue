<template>
    <div class="container">                
        <div class="main-container">           
            <div class="pc-main-frame" v-bind:style="{width: mainWinWidth}">
                <div class="management-header">
                </div>

                <div class="management-body">
                    <el-container>
                        <el-aside class="menu-aside" width="200px" style="background-color: rgb(238, 241, 246)">
                            <div class="router-menu">
                            <el-menu default-active="defaultActive" style="min-height: 100%" theme="dark" router>
                            <el-menu-item style="text-align:left;" index="management"> <i class="el-icon-document"></i>首页</el-menu-item>
                            <el-menu-item style="text-align:left;" index="companyManagement"> <i class="el-icon-document"></i>公司管理</el-menu-item>
                            <el-menu-item style="text-align:left;" index="employeeManagement"> <i class="el-icon-document"></i>员工管理</el-menu-item>
                            <el-menu-item style="text-align:left;" index="siteManagement"> <i class="el-icon-document"></i>网点管理</el-menu-item>
                            <el-menu-item style="text-align:left;" index="careWorkerManagement"> <i class="el-icon-document"></i>护工管理</el-menu-item>
                            <el-menu-item style="text-align:left;" index="financeManagement"> <i class="el-icon-document"></i>财务数据</el-menu-item>
                            <el-menu-item style="text-align:left;" index="orderManagement"> <i class="el-icon-document"></i>订单管理</el-menu-item>
                            <el-menu-item style="text-align:left;" index="NurseVerificationManageMent"> <i class="el-icon-document"></i>护士管理</el-menu-item>
                            </el-menu>
                        </div>
                        </el-aside>
                        <el-container style="display:flex;flex-direction:column;">
                            <router-view></router-view>                          
                        </el-container>
                    </el-container>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>


  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },

      naviMove(e) {
        let naviDiv = document.getElementById("draggable-navigationbar");//获取目标元素
        let mainContainer = document.getElementsByClassName("main-container")[0];//获取目标元素
        
       
        //算出鼠标相对元素的位置
        let disX = e.clientX - naviDiv.offsetLeft;
        let disY = e.clientY - naviDiv.offsetTop;
        document.onmousemove = (e)=>{    //鼠标按下并移动的事件
            this.isNaviMoving = true;


            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;  
            let top = e.clientY - disY;
            let right = left + naviDiv.offsetWidth;
            let bottom = top + naviDiv.offsetHeight;
            // window.offsetHeight
            // window.offsetWidth
            
            //绑定元素位置到positionX和positionY上面
            this.positionX = top;
            this.positionY = left;
            
            console.log('left:' + left + ', top:' + top + ", right: " + right + ", bottom: " + bottom)
            console.log('document.documentElement.clientWidth:' + document.documentElement.clientWidth + ', document.body.clientHeight:' + document.body.clientHeight)

            //移动当前元素
            if(left > 0 && right < document.documentElement.clientWidth) {
                naviDiv.style.left = left + 'px';
            }
            if(top > 0 && bottom < document.documentElement.clientHeight) {
                naviDiv.style.top = top + 'px';
            }
        };
        document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
            this.isNaviMoving = false;
        };
      },
      onSelectStart() {
          console.log('AAAAAAAAAAAAAA')
      },

      _goLastStep() {
        //   initTree()
        alert('name:' + boy.name + ', height:' + boy.height);

      },

    },
    computed: {
    },
    beforeMount:function() {

    },
    data() {
      return {
          mainWinWidth: 'calc(98vw - 230px)',
          positionX:0,
          positionY:0,
          isNaviMoving:false,
      }
    }
  }
</script>

<style>
  
    .container{
        display: flex;
        height: 99vh;
        width: 98vw;
        
    }
    .main-container{
        display: flex;
        flex-direction: row;
        flex: 1; 
        /* background: #D6D6D6; */
    }
    .pc-panel-frame{
        display: flex;
        flex-direction: column;
        flex: 0 0 230px;
        background: #FF6633;
        color: rgb(167, 165, 165);
        margin-right: 10px;
        justify-content: space-between;
        /* background: rgb(175, 83, 187); */
        height: 100%;
        width: 100%;
    }
    .pc-main-frame{
        display: flex;
        flex-direction: column;
        flex: 1;    
        /* background: rgb(165, 170, 245); */
    }


    .panel-scrollbar{
        height: 70vh;
        overflow: auto;
    }

    .panel-header{
        height: 50px;
        line-height: 50px;
        position: relative;
        background: rgb(27, 27, 27);
    }
    .panel-header-title{
        text-align:left; 
        font-size:13px;
        padding-left:8px;
    }
    .panel-header-comments{
        text-align:left;
    }
    .panel-header-comments :hover{
        cursor: pointer;
    }
    .panel-header-close{
        text-align:left;
        font-size:13px;
        padding-left:8px;
    }
    .panel-header-close :hover{
        cursor: pointer;
    }
    .panel-header-content{
        vertical-align: middle;
    }

    .panel-body{
        display: flex;
        flex-direction: column;
        flex: 1;        
        background: rgb(33, 34, 33);
        height: 100%;
        width: 100%;
        
    }

    .panel-options{
        flex: 0 0 200px;
        /* background: rgb(134, 64, 134); */
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    .panel-options-link{
        flex:0 0 40px;
        line-height: 40px;
        font-size:13px;
    }
    .panel-divider{
        border-bottom: 1px solid rgb(121, 117, 117);
    }
    .panel-options-slider{
        flex:0 0 40px;
        line-height: 40px;
        font-size:13px;
    }

    input[type=range] {
        -webkit-appearance: none;
        border-radius: 2px;
        height: 2px;;
        outline: 2px;
        margin:0 auto;
    }
    
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance:radio;
        height: 20px;
        border: solid 0.125em rgba(205, 224, 230, 0.5); 
    }

    .panel-options-list{
        text-align: left;
        font-size:13px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .panel-body-content{
        flex: 1;
        background: rgb(168, 130, 168);
        overflow: auto;
        margin-top: 20px;

    }

    .panel-footer{
        height: 50px;
        position: relative;
        align-content: center;
        background: rgb(238, 158, 185);
    }

    .panel-name{
        padding: 0 0 0 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        text-align: center;
        display: inline;
        float: left;
        max-width: 70%;
    }

    .app-name {
        padding: 6px 0;
        margin:5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        text-align: center;
        display: inline;
        float: left;
        max-width: 70%;
    }

    .management-header{
        flex: 0 0 80px;
        background: rgb(92, 183, 243);
    }

    .management-body{
        display: flex;
        flex: 1;
        /* background: rgb(180, 187, 120); */
    }

    .body-scrollbar{
        height: 91vh;
        overflow: auto;
    }

    .menu-aside{
        background-color: rgb(238, 241, 246);
    }

    .el-menu{
        border: 1px solid rgb(203, 205, 207);
    }

    .router-menu{
        flex: 0 0 150px;
        overflow: auto;        
        /* background: rgb(143, 58, 58); */
        padding: 10px;
    }

    .router-content-wrap{
        flex: 1;
        background: rgb(204, 109, 109);
        margin: 10px;
    }

    .menu-scrollbar{
        flex: 1;
        overflow: auto;
    }
	.router-content{
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		
	}
	.router-content-header{
		flex: 0 0 50px;
	}

	.router-content-body{
		flex: 1;
		/* background: rgb(253, 253, 253); */
        overflow:auto;
    }
    
    #draggable-navigationbar{
        border: 1px solid black;
        position: absolute;
        right: 20px;
        top: 50px;
        width: 270px;
        height: 52px;
        display:flex;
        flex-direction: column;
        z-index: 20;

    }

    #navigationbar-header{
        flex:0 0 16px;
        position: relative;
        
        /* background: green; */
    }
    .navi-header-content{
        line-height:16px;
        background: rgb(29, 29, 25);
        display: flex;
        flex-direction: row-reverse;

    }
    #navigationbar-body{
        display:flex;
        flex:1;
        padding:5px;
        position: relative;
        background:rgba(69, 71, 69, 0.7);
    }
    .navi-body-content{
        position: relative;
        display:flex;
        flex:1;
        line-height: 26px;
        /* background: orange; */
    }
    .left-part{
        flex:0 0 30px;
        display: flex;
        justify-content: center;
        /* background: rgb(92, 84, 165); */
    }
    .remaining-part{
        flex:1;
        display:flex;
        /* background: rgb(151, 150, 158); */
    }
    .remaining-part-left{
        flex:1;
        display: flex;
        justify-content: space-around;
    }
    .remaining-part-right{
        flex:0 0 30px;
        /* background: rgb(77, 116, 84); */
        display: flex;
        justify-content: center;
    }


    .navi-img-container{
        position:relative;
        height: 26px;
        line-height: 26px;
        width: 26px;
        text-align: center;        
    }
    .navi-img-container span{
        display:none;
        text-decoration:none
    }
    .navi-img-container:hover span{
        display:block;
        position:relative;
        color:rgb(19, 17, 16);  
        bottom:-10px;
        border: 1px solid rgb(82, 71, 71);
        padding: 5px;
        font-size: 12px;
        z-index:10;  
        line-height:16px;
        background:rgb(243, 126, 72);
        pointer-events: none        
    }
    .navi-img-container:hover{
        background: lightblue;
        cursor:pointer
    }
    .navi-img-divider{
        border-right:1px solid rgb(30, 33, 223);

    }
    .navi-header-img-container{
        height: 16px;
        line-height: 16px;
        width: 16px;
        text-align: center;
    }
    .navi-header-img-container:hover{
        background: lightblue;
        cursor:pointer
    }

</style>


