var objScrollTop = 0;
var scroll = 0;

$(window).on('load', function()
{
	parallax(document.getElementById('level1'), -1.5, -4800);
	parallax(document.getElementById('level2'), -1, -2900);
	parallax(document.getElementById('level3'), -1.3, 200);
});

$('body').on('mousewheel DOMMouseScroll MozMousePixelScroll wheel', function(e)
{

	if ( e.originalEvent.wheelDelta !== undefined )
	{
		parallax(document.getElementById('level1'), -1.5, e.originalEvent.wheelDelta);
		parallax(document.getElementById('level2'), -1, e.originalEvent.wheelDelta);
		parallax(document.getElementById('level3'), -1.3, e.originalEvent.wheelDelta);

	}else if ( e.originalEvent.deltaY !== undefined )
	{
		parallax(document.getElementById('level1'), -1.5, (e.originalEvent.deltaY * (-30)));
		parallax(document.getElementById('level2'), -1, (e.originalEvent.deltaY * (-30)));
		parallax(document.getElementById('level3'), -1.3, (e.originalEvent.deltaY * (-30)));
	}
});

function parallax(target, layer, scrollinit) 
{
    var layer_coeff = 10 / layer;
    scroll = scroll + ( parseInt(scrollinit) );
	
    // var y = ($(window).height() - target.offsetHeight) / 2 - (scroll - ($(window).height() / 2)) / layer_coeff;
    var y 		= ( $(window).height() / 2 ) - (scroll - ($(window).height() / 2)) / layer_coeff;
    var scarto 	= target.offsetHeight - $(window).height();

    // Aggiunge sotto la gallery quando si avvicina alla fine della colonna
    if ( ( y < 0 ) && ( Math.abs(y) >= scarto ) )	append_gallery(target);

    if ( ( parseInt(scrollinit) >= 0 ) && ( Math.abs(scroll) < 6000 ) )
    {
    	scroll = scroll - 150;
    	return;
    }	

    $(target).css('marginTop', y);
}

function append_gallery(column)
{
	var container 	= $(column).find('.gallery'),
		items 		= container.children();

	items.clone().appendTo(container);
}

// let images = [
//     {
//         url: 'https://www.dropbox.com/s/bhkkcfai7alrfw4/1.jpg?raw=1',
//         caption: '404 wallpaper',
//         info: 'Sample info'
//     },
//     {
//         url: 'https://www.dropbox.com/s/l6x9llzzqq6z19b/2.jpg?raw=1',
//         caption: '404 second wallpaper',
//         info: 'Sample info'
//     },
//     {
//         url: 'https://www.dropbox.com/s/l6x9llzzqq6z19b/2.jpg?raw=1',
//         caption: '404 third wallpaper',
//         info: 'Sample info'
//     },
//     {
//         url: 'https://www.dropbox.com/s/mg3atxxr2e2wki7/4.jpg?raw=1',
//         caption: '404 fourth wallpaper',
//         info: 'Sample info'
//     },
//     {
//         url: 'https://www.dropbox.com/s/t7vexrobgpmvizz/5.jpg?raw=1',
//         caption: '404 fifth wallpaper',
//         info: 'Sample info'
//     },
//     {
//         url: 'https://www.dropbox.com/s/mak24286ksmhhph/6.jpg?raw=1',
//         caption: '404 sixth wallpaper',
//         info: 'Sample info'
//     },
//     {
//         url: 'https://www.dropbox.com/s/x9kzf8on4t3arv5/7.jpg?raw=1',
//         caption: '404 seventh wallpaper',
//         info: 'Sample info'
//     },
//     {
//         url: 'https://www.dropbox.com/s/vxmuidb45kjcpsc/8.jpg?raw=1',
//         caption: '404 eighth wallpaper',
//         info: 'Sample info'
//     },
// ];
// const mainView = document.getElementById('main-view');
// const caption = document.getElementById('caption');
// const info = document.getElementById('info');

// const thumbnails = document.getElementById('thumbnails');

// for(let i= 0; i< images.length; i++) {
//     let image = images[i];
//     let img = document.createElement('img');
//     img.src = images[i].url;
//     img.setAttribute('width', 170);
//     img.setAttribute('data-index', i);
//     img.addEventListener('click', changeImage);
//     thumbnails.appendChild(img);
// }

// function initGallery() {
//     loadImage(0);
// };

// function slideImage() {
//     let currentIndex = parseInt(mainView.getAttribute('data-index'));
//     currentIndex = currentIndex + 1 == images.length ? 1 : currentIndex + 1;
//     loadImage(currentIndex);
//     setTimeout(slideImage, 3000);

// }

// function changeImage(event) {
//     let target = event.currentTarget;
//     let index = target.getAttribute('data-index');
//     loadImage(index);
// }

// function loadImage(index) {
//     let image = images[index];
//     mainView.src = image.url;
//     mainView.setAttribute('data-index', index);
//     mainView.setAttribute('id', 'image-' + index);
//     mainView.style.opacity = 1;
//     caption.textContent = image.caption;
//     info.textContent = image.info;

// }

// function fullScreenImage() {
//     toggleFullscreen(mainView);
// }

// function toggleFullscreen(el) {
//     if(document.fullscreenElement || document.mozFullScreenElement 
//         || document.webkitFullscreenElement || document.msFullscreenElement) {
//             if(document.exitFullscreen) {
//                 document.exitFullscreen();
//             }
//             else if(document.mozCancelFullScreen) {
//                 document.mozCancelFullScreen();
//             }
//             else if(document.webkitExitFullscreen) {
//                 document.webkitExitFullscreen();
//             }
//             else if(document.msExitFullscreen) {
//                 document.msExitFullscreen();
//             }
//         }
//         else {
//             if(document.documentElement.requestFullscreen) {
//                 el.requestFullscreen();
//             }
//             else if(document.documentElement.mozRequestFullScreen) {
//                 el.mozRequestFullScreen();
//             }
//             else if(document.documentElement.webkitRequestFullscreen) {
//                 el.webkitRequestFullscreen();
//             }
//             else if(document.documentElement.msRequestFullscreen) {
//                 el.msRequestFullscreen();
//             }
//         }
// }

// initGallery();
// setTimeout(slideImage, 3000);