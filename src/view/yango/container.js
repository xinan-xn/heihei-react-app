import React from 'react'
import '../../css/yo-detail.css'
function Container(props) {
    return (
        <div className="main_box">
{/* 学员作品 */}
<div className="works">
    <h3>妙味“JS全栈-201607届”学员中级阶段课程作品展示</h3>
    {/* 主要内容 */}
    <div className="works_box">
        {/* 12张图片 */}
        <div className="works_img"></div>
        {/* 前言 */}
        <div className="works_text">
            <span>前言:</span>
            <br />     
            在过去的很长一段时间，我们发现许多技术学得非常扎实的学员，到了面试环节，由于缺乏表达能力，
            本该顺利入职获取高薪，却由于词不达意、表达障碍，硬生生经历了更多曲折的面试考验，
            有的学员甚至还因为这个原因，期盼的薪资被调低了2k~3k，实在令人惋惜。 
            <br />
            <br />                       
            因此我们就在每个新班开展了各种课间活动，请学员上台，分享自己的学习方法、解题思路、
            有创意的小练习（还有即兴的表演，K歌、街舞、方言相声都出来了……）如此一来，
            大大激发了学员们的表达欲望，也锻炼了自己的口才能力、建立了自信。
            我们期待他们在面试时除了有精湛的技术外，还有精彩的口才发挥，让人刮目相看！
        </div>
        {/* 画廊幻灯片 */}
        <div className="works_slide">
            <span>画廊幻灯片</span>
        </div>
        {/* 三张图片 */}
        <div className="works_imgone"></div>
        <div className="works_imgtwo"></div>
        <div className="works_imgthree"></div>
        {/* 说明一号 */}
        <div className="works_show">说明:</div>
        <div className="works_showa">在“平铺排列”状态下：</div>
        <div className="works_showb">
            打开页面是一些随机摆放的图片，可以拖拽并能抛出，遇到屏幕边缘会反弹。
            <br />
            改变窗口大小，这些图片还会随机重新排序。
            <br />
            双击图片，则会组合拼接成一张大图。
            <br />
            点击左右按钮，图片会以不同的动画展示方式呈现下一张图片。
            <br />
            双击大图片，则大图片被打散、并随机散落在屏幕上。
        </div>
        <div className="works_showc">在“view3D”状态下：</div>
        <div className="works_showd">
            打开页面是一些随机摆放的立方体小块，可以拖拽并能抛出，遇到屏幕边缘会反弹。
            <br />
            改变窗口大小，这些立方体小块还会随机重新排序。
            <br />
            双击立方体小块，它们会先旋转调整立方面位置，然后再旋转组合拼接成一张大图。
            <br />
            点击左右按钮，图片开裂分解成立方体小块，随机摆放，重新旋转拼接成一张大图，以此显示下一张图片。
            <br />
            双击大图片，则大图片开裂分解成立方体小块，随机摆放。
        </div>
        <div className="works_showe">
            在线地址：http://cool.miaov.com/js201607/1/index.html
        </div>
        {/* 烟花效果 */}
        <div className="works_fire">烟花效果</div>
        <div className="works_fireone"></div>
        <div className="works_firetwo"></div>
        {/* 说明二号 */}
        <div className="works_explain">说明：</div>
        <div className="works_explaina">
            “beautiful fireworks beautiful you（烟花正好，如若你在）”——这个由学员们自己起的名字，充满了浪漫气息。
            <br />
            这个实例一共提供了3种点燃烟花的方式，默认状态下，是“定点上升”，即鼠标点击页面任何一处，
            从中间位置升腾出一束烟花，到达鼠标位置处爆炸。
            <br />
            “可控升起”状态，则是鼠标点击以后，由鼠标下方位置升腾出一束烟花，到达指定位置后爆炸。
            <br />
            “三发齐鸣”状态，则是以“定点上升”模式，连续发射出三束烟花，到达指定位置后爆炸。
            <br />
            此外，还可以设置烟花爆炸的数量，默认状态下是100粒烟花。
        </div>
        <div className="works_showe">
            在线地址：http://cool.miaov.com/js201607/2/index.html
        </div>
        {/* 时空唱片机 */}
        <div className="works_time">时空唱片机</div>
        <div className="works_timeone"></div>
        <div className="works_timetwo"></div>
        {/* 说明三号 */}
        <div className="works_showone">说明：</div>
        <div className="works_showtwo">   
            时空唱片机是一个仿网易云音乐手机客户端播放界面设计，具有主流播放器的常用功能的网页模拟音乐播放器。
            <br />                                
            进入主页后，是一组唱片排列成一束“风车”形状自动旋转，360度后再自动沿反方向旋转365度，以此循环。
            <br />
            “可控升起”状态，则是鼠标点击以后，由鼠标下方位置升腾出一束烟花，到达指定位置后爆炸。
            <br />                               
            鼠标移入“风车”唱片时，唱片逐渐散开，排列成一个圆环状（鼠标移开则自动恢复到原状），
            鼠标在圆环上单击其他唱片时，当前唱片转到屏幕正中心位置。
            <br />
            鼠标双击正中间唱片后，当前唱片收缩到唱片盒内，动画切换至播放页面，唱片开始旋转播放音乐。
            <br />                              
            暂停、播放、上一首、下一首、单曲循环、顺序播放、拖拽播放进度条等功能一应俱全。
            <br />                                
            单击唱片，弹出歌词界面，与歌曲同步高亮显示歌词。
            <br />                               
            鼠标可拖拽歌词上下移动，可改变播放进度。
            <br />                                
            点击歌曲列表按钮，出现歌曲库，当前音乐在列表中高亮显示。
            <br />                                
            单击其他歌曲，音乐自动切换至指定音乐，并滑入到列表中合适的位置。
            <br />                                
            在“顺序播放”模式下，播放至最后一曲，可自动跳到第一首，开始循环播放。
        </div>
        <div className="works_showe">
            在线地址：http://cool.miaov.com/js201607/3/index.html
        </div>
        {/* 小游戏集合 */}
        <div className="works_games">小游戏集合</div>
        <div className="works_gamesimg"></div>
        {/* 说明四号 */}
        <div className="works_gamesone">说明：</div>
        <div className="works_gamestwo">   
            “1024、贪吃蛇、扫雷、翻牌找对”这四款经典游戏的玩法相信大家并不陌生，
            在此不必赘述。同学们通过目前所学知识，尽最大努力去实现这些游戏的主体功能，
            用以检验JS课程学到中级阶段的成果。
        </div>
        <div className="works_gamesthree">
            “1024小游戏”在线地址：http://cool.miaov.com/js201607/4/1024demo.html
            <br />                              
            “贪吃蛇”在线地址：http://cool.miaov.com/js201607/4/snakeGame/index.html
            <br />
            “扫雷”在线地址：http://cool.miaov.com/js201607/4/bombdemo4.html
            <br />
            “翻牌找对”在线地址：http://cool.miaov.com/js201607/4/cardgame/index.html
        </div>
        {/* 后记: */}
        <div className="works_before">后记</div>
        <div className="works_beforeone">
            以上作品由于涉及到的技术比较基础（有些功能应该运用后面学到的知识做性能会更好），
            难免会有许多问题。此外，作品的创意、交互、技术实施全部由学员们独立完成，
            讲师仅仅只是在某些细节的技术实施上给予指导，而在作品完整性上并没干涉学员的自由发挥，
            这就导致上面的作品在产品设计上存在许多问题，由此带来众多体验上的不便和各类技术bug，也无可避免。
            <br />
            <br />
            但我们感觉学员们可以带着这些问题继续后面课程的学习，边学边改进，如此一来，在学期结束之前，
            才有可能做出完成度更佳的作品，我们期待着这一天的到来。
        </div>
    </div>
</div>
{/* 点赞，留言 */}
</div>
    );
}


export default Container




