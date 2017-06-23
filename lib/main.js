'use babel';

import { CompositeDisposable } from 'atom';
import related from './related';
import styleProvider from './styleProvider';
import viewProvider from './viewProvider';
import clickProvider from './clickProvider';
import controllerProvider from './controllerProvider';
import tiappxmlProvider from './tiappxmlProvider';

module.exports = Titanium = {
  activate() {
    related.activate();
    
    return require('atom-package-deps').install('hyperclick');
  },
    
  deactivate() {
    return related.deactive();
  },
  // serialize: ->
  getProvider() { return [styleProvider,viewProvider,controllerProvider,tiappxmlProvider]; },
  getClickProvider() { return clickProvider.getProvider(); },
  config: {
    numberOfSplitPane: {
      order : 0,
      title: 'Number of pane column',
      description: 'Layout of "Open All related files"',
      type: 'integer',
      default: 2,
      enum: [2,3]
    },
    defaultI18nLanguage: {
      order : 1,
      title: 'Default language of i18n',
      description: 'Use this setting when generating i18n strings with hyperclick and autocomplete',
      type: 'string',
      default: 'en',
      enum: ['af', 'sq', 'ar', 'eu', 'bg', 'be', 'ca', 'hr', 'cs', 'da', 'nl',
        'en', 'eo', 'et', 'fo', 'fi', 'fr', 'gl', 'de', 'el', 'iw', 'hu', 'is',
        'ga', 'it', 'ja', 'ko', 'lv', 'lt', 'mk', 'mt', 'no', 'pl', 'pt', 'ro',
        'ru', 'gd', 'sr', 'sr', 'sk', 'sl', 'es', 'sv', 'tr', 'uk']
    }, // https://www.w3.org/International/O-charset-lang.html
        
    generationTemplate: {
      order : 100,
      type : 'object',
      properties : {
        classOnTss : {
          title: 'Style class(.) template',
          description : 'When hyperclick class name on XML, which not defined, strings based on this template will be inserted.',
          type: 'string',
          default: '\\n".${text}": {\\n}\\n'
        },
        idOnTss : {
          title: 'Style id(#) template',
          type: 'string',
          default: '\\n"#${text}": {\\n}\\n'
        },
        tagOnTss : {
          title: 'Style tag template',
          type: 'string',
          default: '\\n"${text}": {\\n}\\n'
        },
        functionOnJs : {
          title: 'Function template',
          type: 'string',
          default: '\\nfunction ${text}(e){\\n}\\n'
        }
      }
    },
    isAlloy1_8later: {
      title: 'Is Alloy CLI 1.8.x or later?',
      description : 'Alloy 1.8 relocates i18n and platform directories',
      type : 'boolean',
      default : true
    }
  }
};
