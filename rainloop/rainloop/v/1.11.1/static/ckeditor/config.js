/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.font_names = '宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;方正小标宋/方正小标宋;'+ config.font_names ;
	config.contentsCss = 'fonts.css';
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config
	config.extraPlugins = 'wordcount,notification';

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' }
	];

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';

	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';
};

config.wordcount = {

	// Whether or not you want to show the Paragraphs Count
	showParagraphs: true,

	// Whether or not you want to show the Word Count
	showWordCount: true,

	// Whether or not you want to show the Char Count
	showCharCount: false,

	// Whether or not you want to count Spaces as Chars
	countSpacesAsChars: false,

	// Whether or not to include Html chars in the Char Count
	countHTML: false,

	// Whether or not to include Line Breaks in the Char Count
	countLineBreaks: false,

	// Maximum allowed Word Count, -1 is default for unlimited
	maxWordCount: -1,

	// Maximum allowed Char Count, -1 is default for unlimited
	maxCharCount: 10000,

	// Maximum allowed Paragraphs Count, -1 is default for unlimited
	maxParagraphs: -1,

	// How long to show the 'paste' warning, 0 is default for not auto-closing the notification
	pasteWarningDuration: 0,


	// Add filter to add or remove element before counting (see CKEDITOR.htmlParser.filter), Default value : null (no filter)
	filter: new CKEDITOR.htmlParser.filter({
		elements: {
			div: function( element ) {
				if(element.attributes.class == 'mediaembed') {
					return false;
				}
			}
		}
	})
};
