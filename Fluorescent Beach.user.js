// ==UserScript==
// @name         Fluorescent Beach
// @namespace    https://github.com/emphasisy
// @version      0.3
// @description  try to take over the world!
// @author       Suave ✨
// @match        https://jbzd.com.pl/*
// @icon         https://i.pinimg.com/564x/9d/d1/ae/9dd1ae5055628d05ee8050af992de041.jpg
// @run-at document-start
// @grant        none
// ==/UserScript==

const injectCss = (id, css) => {
  const style = document.createElement('style');
  style.id = id;
  style.innerText = css;
  document.head.appendChild(style);
  return style;
}


injectCss("fluorescent Beach",`







/* Main background theme */

:root {
	--buttons: #4a98d4;
	--addons: #b44ad4;
	--title: #75c0e0;
	--border: #14a1ff;

}
/* Scrollbar */
::-webkit-scrollbar {
    width: 3px !important;
}
::-webkit-scrollbar-thumb {
    background-image: linear-gradient(45deg, var(--border), var(--border));
    border-radius: 2px;
}


/* Site Background Image */
body {
  background-image: url("https://i.imgur.com/Ytxosju.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
}

/* toolbar */
.nav {
	background: #90e6e71a;
		border-bottom: solid var(--border) 1px;
}


.nav-link.active {
	border-bottom: #59a5e3;
}




/* profile things */
.sidebar .profile-header {
	border-radius: 25px;
	border: solid var(--border) 1px;
		background: #90e6e71a;
}
.sidebar .profile-nav-link {
		border-radius: 25px;
	border: solid var(--border) 1px;
		background: #90e6e71a;
		color: #5ce9ff;
			text-shadow: 0 0 10px #5c98ff;


}
.sidebar .profile-nav {
		background: #90e6e71a;
		border-radius: 50px;
}

	/* profile settings */
	.tabs-component .tabs-component-panels {
			border-radius: 25px;
	border: solid var(--border) 1px;
		background: #90e6e71a;
}

.user-form-delete p a {
	color: #2780cf;
	font-weight: bold;
}


.user-form .form-buttons button {
	background: var(--buttons);
	border-radius: 25px;
}


.user-form .form-group input, .user-form .form-group select {
	background: #5599b621;
	color: #2780cf;
}

.tabs-component .tabs-component-tab-a {
	border-radius: 25px;
		background: #5599b621;
}
.tabs-component .tabs-component-tab {
	border-radius: 50px;
	background: transparent;
}
.tabs-component .tabs-component-tab.is-active {
	background:  #6475f5;
}



/* category box */
.nav-categories {
	background: #464fb0d6;
	border-radius: 25px;
	box-shadow: none;
}

.nav-sublink {
	color: #47a4f5;
	border: none;
}
.nav-break {
	display: none;
}





/* Article */
.article-details {
	display: none;
}

.article-title {
	border-radius: 25px;
	border: solid var(--border) 1px;
	background: #90e6e71a;
}
.article-image {
	border-radius: 25px;
}
		/* Marked Comment */
		.article-comments-marked .comments {
				background: #90e6e71a;
					border-radius: 25px;
						border: solid var(--border) 1px;
		}













/* Comment Section */
.comments {
		background: #90e6e71a;
					border-radius: 25px;
						border: solid var(--border) 1px;
}
		.comments-header {
			background: #90e6e71a;
					border-radius: 25px;
						border: solid var(--border) 1px;
		}
			.comment-form {
				background: #90e6e71a;
					border-radius: 25px;
						border: solid var(--border) 1px;
			}

			.add-comment {
				background: transparent;
				color: #53cff5;
						text-shadow: 0 0 5px #187adb;
				border: solid var(--border) 1px;
						border-radius: 25px;
			}

			.btn-cancel, .btn-comment {
				border-radius: 25px;
				background: var(--buttons);
			}











/* Buttons */

.article-actions-action.plus-type {
	background: var(--buttons);
}
	.article-actions-action.plus-type.active {
				background: #7645c4;
			}
			.article-actions-action, .article-actions-info {
				background: var(--buttons);

			}
			.content-badges-action-options.active[data-v-444de868] {
				background: var(--buttons);
			}

.content-badges-action-selector[data-v-c0428340] {
	background: var(--buttons);
}
.article-actions-action.msg-type {
	background: var(--buttons);
}

.article-actions-action {
	background: var(--buttons);
}














/* Get rid of such useless things */
.main {
	background: transparent;
	border: none;
	padding-left: 50px;
}

.sidebar {
	background: transparent;

}

.sidebar .recommendations {
	display: none;
}

.sidebar .recommended-title {
	display: none;
}

	.sidebar-premium-baner		{
		display: none;
	}

			.main-footer
		 {
		 	display: none;
		 }













}`)