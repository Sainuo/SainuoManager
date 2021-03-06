/**
 * author : 反转的分针
 * date   : 201809061722
 */
export default (selector) => {
    let element = document.querySelector("body");
    if (typeof selector === "string") {
        element = document.querySelector(selector);
        if (!element) throw new Error(`not find element by selector:${selector}`);
    }
    else if (selector instanceof Node) {
        element = selector;
    }

    let iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.addEventListener("load", (evt) => {
        let f = evt.target;
        let printWindow = f.contentWindow;
        let printDoc = f.contentDocument;

        //不显示打印url
        let style = document.createElement("style");
        style.media = "print";
        style.innerHTML = "@page{size:auto;margin:0mm;}";
        printDoc.head.appendChild(style);

        //将主页面的样式引入到此处
        let styles = document.querySelectorAll("style");
        for (let i = 0, s; s = styles[i]; i++) {
            printDoc.head.appendChild(document.importNode(s, true));
        }

        //处理图片
        let images = element.querySelectorAll("img");
        let canvas = document.createElement("canvas");
        let ctx2d = canvas.getContext("2d");

        for (let i = 0, img; img = images[i]; i++) {
            if(img.src.startsWith("data"))continue;            
            canvas.width = img.clientWidth;
            canvas.height = img.clientWidth;
            ctx2d.drawImage(img, 0, 0,img.clientWidth,img.clientHeight);
            img.src = canvas.toDataURL();
        }

        //https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode
        printDoc.body.appendChild(document.importNode(element, true));//将要打印的区域插入窗口中
        printWindow.focus();

        printWindow.addEventListener("afterprint", (afterprintEvent) => {
            document.body.removeChild(iframe);
        });
        
        setTimeout(()=>{
            printWindow.print();
        },0);//fix chrome not display image
        
    });
    document.body.appendChild(iframe);
}