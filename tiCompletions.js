module.exports = {
    "properties": {
        "BIG_ENDIAN": {
            "description": "",
            "type": "String"
        },
        "CHARSET_ASCII": {
            "description": "",
            "type": "String"
        },
        "CHARSET_ISO_LATIN_1": {
            "description": "",
            "type": "String"
        },
        "CHARSET_UTF16": {
            "description": "",
            "type": "String"
        },
        "CHARSET_UTF16BE": {
            "description": "",
            "type": "String"
        },
        "CHARSET_UTF16LE": {
            "description": "",
            "type": "String"
        },
        "CHARSET_UTF8": {
            "description": "",
            "type": "String"
        },
        "LITTLE_ENDIAN": {
            "description": "",
            "type": "String"
        },
        "TYPE_BYTE": {
            "description": "",
            "type": "String"
        },
        "TYPE_DOUBLE": {
            "description": "",
            "type": "String"
        },
        "TYPE_FLOAT": {
            "description": "",
            "type": "String"
        },
        "TYPE_INT": {
            "description": "",
            "type": "String"
        },
        "TYPE_LONG": {
            "description": "",
            "type": "String"
        },
        "TYPE_SHORT": {
            "description": "",
            "type": "String"
        },
        "a": {
            "description": "The entry at position [1,1] in the matrix.",
            "type": "Number"
        },
        "absoluteDate": {
            "description": "The absolute date for the alarm.",
            "type": "Date"
        },
        "accepted": {
            "description": "Callback to be fired when a listener accepts a connection.",
            "type": "Function"
        },
        "accessToken": {
            "description": "",
            "type": "String"
        },
        "accessibilityHidden": {
            "description": "Whether the view should be \"hidden\" from (i.e., ignored by) the accessibility service.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "accessibilityHint": {
            "description": "Briefly describes what performing an action (such as a click) on the view will do.",
            "type": "String"
        },
        "accessibilityLabel": {
            "description": "",
            "type": "String"
        },
        "accessibilityValue": {
            "description": "A string describing the value (if any) of the view for the device's accessibility service.",
            "type": "String"
        },
        "accessoryType": {
            "description": "Sets an accessory on the right side of an item.",
            "type": "Number",
            "values": [
                "Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK",
                "Ti.UI.LIST_ACCESSORY_TYPE_DETAIL",
                "Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE",
                "Ti.UI.LIST_ACCESSORY_TYPE_NONE"
            ]
        },
        "accuracy": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.Geolocation.ACCURACY_BEST",
                "Ti.Geolocation.ACCURACY_BEST_FOR_NAVIGATION",
                "Ti.Geolocation.ACCURACY_HUNDRED_METERS",
                "Ti.Geolocation.ACCURACY_KILOMETER",
                "Ti.Geolocation.ACCURACY_NEAREST_TEN_METERS",
                "Ti.Geolocation.ACCURACY_THREE_KILOMETERS",
                "Ti.Geolocation.ACCURACY_HIGH",
                "Ti.Geolocation.ACCURACY_LOW"
            ]
        },
        "acls": {
            "description": "Set of ACL objects, if any exist.",
            "type": "Array"
        },
        "action": {
            "description": "The action associated with this intent.",
            "type": "String"
        },
        "actionView": {
            "description": "Custom view that replaces the default menu item button.",
            "type": "Titanium.UI.View"
        },
        "actions": {
            "description": "",
            "type": "Array"
        },
        "actionsForDefaultContext": {
            "description": "Array of notification actions to associate with the group.",
            "type": "Array"
        },
        "actionsForMinimalContext": {
            "description": "Array of notification actions to display for non-dialog-style notification.",
            "type": "Array"
        },
        "activationMode": {
            "description": "Selects how to activate the application.",
            "type": "Number",
            "values": [
                "Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND",
                "Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND"
            ]
        },
        "active": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "activeIcon": {
            "description": "Icon URL for this tab when active.",
            "type": "String"
        },
        "activeIconIsMask": {
            "description": "Defines if the active icon property of the tab must be used as a mask. This property is applicable on iOS 7 and greater.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "activeTab": {
            "description": "Active tab.",
            "type": "Titanium.UI.Tab"
        },
        "activeTabBackgroundColor": {
            "description": "Default background color for the active tab, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "activeTabBackgroundDisabledColor": {
            "description": "Default background disabled color for the active tab, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "activeTabBackgroundDisabledImage": {
            "description": "Default background disabled image for the active tab.",
            "type": "String"
        },
        "activeTabBackgroundFocusedColor": {
            "description": "Default background focused color for the active tab, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "activeTabBackgroundFocusedImage": {
            "description": "Default background focused image for the active tab.",
            "type": "String"
        },
        "activeTabBackgroundImage": {
            "description": "Default background image for the active tab.",
            "type": "String"
        },
        "activeTabBackgroundSelectedColor": {
            "description": "Default background selected color for the active tab, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "activeTabBackgroundSelectedImage": {
            "description": "Default background selected image for the active tab.",
            "type": "String"
        },
        "activeTabIconTint": {
            "description": "Color applied to active tabs icons, as a color name or hex triplet, where the tab's activeIcon was not defined.",
            "type": "String"
        },
        "activeTitleColor": {
            "description": "Defines the color of the title of tab when it's active.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "activityEnterAnimation": {
            "description": "",
            "type": "Number"
        },
        "activityExitAnimation": {
            "description": "",
            "type": "Number"
        },
        "activityType": {
            "description": "",
            "type": "String",
            "values": [
                "Ti.Geolocation.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION",
                "Ti.Geolocation.ACTIVITYTYPE_FITNESS",
                "Ti.Geolocation.ACTIVITYTYPE_OTHER",
                "Ti.Geolocation.ACTIVITYTYPE_OTHER_NAVIGATION"
            ]
        },
        "adSize": {
            "description": "Size of the advertisement when minimized.",
            "type": "String",
            "values": [
                "Ti.UI.iOS.AD_SIZE_PORTRAIT",
                "Ti.UI.iOS.AD_SIZE_LANDSCAPE"
            ]
        },
        "addedDate": {
            "description": "The date that the item was moved into the current location.",
            "type": "String"
        },
        "address": {
            "description": "",
            "type": "Object"
        },
        "album": {
            "description": "The title for a collection of media.",
            "type": "String"
        },
        "albumArtist": {
            "description": "The album artist to filter on. Value should be a String.",
            "type": "MediaQueryInfoType"
        },
        "albumTitle": {
            "description": "The album title to filter on. Value should be a String.",
            "type": "MediaQueryInfoType"
        },
        "alertAction": {
            "description": "Alert button text ('Open', by default) or slider text ('slide to unlock...', by default)\nto display.",
            "type": "String"
        },
        "alertBody": {
            "description": "Alert message to display.",
            "type": "String"
        },
        "alertLaunchImage": {
            "description": "Image to display instead of <code>Default.png</code> when launching the application.",
            "type": "String"
        },
        "alerts": {
            "description": "Alarms associated with the calendar item, as an array of <a href=\"Titanium.Calendar.Alert\">Alert</a> objects.",
            "type": "Array"
        },
        "allDay": {
            "description": "Indicates whether this event is all day.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowBackground": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowEditing": {
            "description": "Specifies if the media should be editable after capture/selection.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowMultipleSelections": {
            "description": "Set to <code>true</code> to allow the user to select multiple items from the library.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowUserCustomization": {
            "description": "Allow the user to reorder tabs in the tab group using the <strong>Edit</strong> button on the <strong>More</strong> \ntab.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowsAirPlay": {
            "description": "Whether or not the current movie can be played on a remote device.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowsBackgroundLocationUpdates": {
            "description": "Determines if the app can do background location updates.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowsRotation": {
            "description": "Specifies if this item can rotate.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowsSelection": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "allowsSelectionDuringEditing": {
            "description": "Determines whether this table's rows can be selected while editing the table.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "alternateBirthday": {
            "description": "Alternate birthday of the person. Single Dictionary.",
            "type": "Object"
        },
        "alternateNames": {
            "description": "An array of localized strings of alternate display names for this item.",
            "type": "Array"
        },
        "altitude": {
            "description": "Altitude of the location update, in meters.",
            "type": "Number"
        },
        "altitudeAccuracy": {
            "description": "Vertical accuracy of the location update, in meters.",
            "type": "Number"
        },
        "anchor": {
            "description": "Anchor point for the attachment behavior relative to the animator's coordinate system.",
            "type": "Point"
        },
        "anchorItem": {
            "description": "Item to use as the anchor in this behavior.",
            "type": "Titanium.UI.View"
        },
        "anchorOffset": {
            "description": "Offset from the center point of the anchor item for the attachment.",
            "type": "Point"
        },
        "anchorPoint": {
            "description": "",
            "type": "Point"
        },
        "androidView": {
            "description": "View to load inside the message area, to create a custom layout.",
            "type": "Titanium.UI.View"
        },
        "angle": {
            "description": "",
            "type": "Number"
        },
        "angularResistance": {
            "description": "Specifies the angular resistance of this item.",
            "type": "Number"
        },
        "animate": {
            "description": "Set to <code>true</code> to animate the move to the new location.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "animated": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "animationStyle": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.RowAnimationStyle.BOTTOM",
                "Ti.UI.iPhone.RowAnimationStyle.FADE",
                "Ti.UI.iPhone.RowAnimationStyle.LEFT",
                "Ti.UI.iPhone.RowAnimationStyle.NONE",
                "Ti.UI.iPhone.RowAnimationStyle.RIGHT",
                "Ti.UI.iPhone.RowAnimationStyle.TOP",
                "Ti.UI.iPhone.RowAnimationStyle.BOTTOM",
                "Ti.UI.iPhone.RowAnimationStyle.FADE",
                "Ti.UI.iPhone.RowAnimationStyle.LEFT",
                "Ti.UI.iPhone.RowAnimationStyle.NONE",
                "Ti.UI.iPhone.RowAnimationStyle.RIGHT",
                "Ti.UI.iPhone.RowAnimationStyle.TOP"
            ]
        },
        "appBadge": {
            "description": "Value of the badge for the application's springboard icon.",
            "type": "Number"
        },
        "appSupportsShakeToEdit": {
            "description": "Determines whether the shake to edit system-wide capability is enabled.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "appearance": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.KEYBOARD_APPEARANCE_ALERT",
                "Ti.UI.KEYBOARD_APPEARANCE_DEFAULT",
                "Ti.UI.KEYBOARD_APPEARANCE_ALERT",
                "Ti.UI.KEYBOARD_APPEARANCE_DEFAULT"
            ]
        },
        "arrowDirection": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_ANY",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_DOWN",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UNKNOWN",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UP",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_ANY",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_DOWN",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT",
                "Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UP"
            ]
        },
        "artist": {
            "description": "",
            "type": "String"
        },
        "attributeSet": {
            "description": "Set of metadata properties to display for the item.",
            "type": "Titanium.App.iOS.SearchableItemAttributeSet"
        },
        "attributedHintText": {
            "description": "Hint text attributed string.",
            "type": "Titanium.UI.AttributedString"
        },
        "attributedString": {
            "description": "",
            "type": "Titanium.UI.AttributedString"
        },
        "attributes": {
            "description": "An array of attributes to add.",
            "type": "Array"
        },
        "audiences": {
            "description": "A class of entity for whom the resource is intended or useful.",
            "type": "Array"
        },
        "audioBitRate": {
            "description": "The audio bit rate.",
            "type": "Number"
        },
        "audioChannelCount": {
            "description": "The number of channels in the audio data contained in the file.",
            "type": "Number"
        },
        "audioEncodingApplication": {
            "description": "The name of the application that encoded the data contained in the audio file.",
            "type": "String"
        },
        "audioSampleRate": {
            "description": "The sample rate of the audio data contained in the file.",
            "type": "Number"
        },
        "audioSessionCategory": {
            "description": "A constant for the audio session category to be used.",
            "type": "Number",
            "values": [
                "Ti.Media.AUDIO_SESSION_CATEGORY_AMBIENT",
                "Ti.Media.AUDIO_SESSION_CATEGORY_PLAYBACK",
                "Ti.Media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD",
                "Ti.Media.AUDIO_SESSION_CATEGORY_RECORD",
                "Ti.Media.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT"
            ]
        },
        "audioSessionMode": {
            "description": "A constant for the audio session mode to be used. <strong>Deprecated since 3.4.2. Deprecated in favor of the <a href=\"Titanium.Media.audioSessionCategory\">audioSessionCategory</a> property defined in <a href=\"Titanium.Media\">Media</a>.</strong>",
            "type": "Number",
            "values": [
                "Ti.Media.AUDIO_SESSION_MODE_AMBIENT",
                "Ti.Media.AUDIO_SESSION_MODE_PLAYBACK",
                "Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD",
                "Ti.Media.AUDIO_SESSION_MODE_RECORD",
                "Ti.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT"
            ]
        },
        "audioStreamType": {
            "description": "The audio stream type to use when playing the sound.",
            "type": "Number",
            "values": [
                "Ti.Android.STREAM_ALARM",
                "Ti.Android.STREAM_DEFAULT",
                "Ti.Android.STREAM_MUSIC",
                "Ti.Android.STREAM_NOTIFICATION",
                "Ti.Android.STREAM_RING",
                "Ti.Android.STREAM_SYSTEM",
                "Ti.Android.STREAM_VOICE_CALL"
            ]
        },
        "audioTrackNumber": {
            "description": "The track number of a song/composition when it is part of an album.",
            "type": "Number"
        },
        "authenticationRequired": {
            "description": "Set to true if the action requires the device to be unlocked.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "autoAdjustScrollViewInsets": {
            "description": "Specifies whether or not the view controller should automatically adjust its scroll view insets. Valid on iOS 7 and greater.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "autoEncodeUrl": {
            "description": "Determines whether automatic encoding is enabled for the specified URL.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "autoLink": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.AUTOLINK_ALL",
                "Ti.UI.AUTOLINK_CALENDAR",
                "Ti.UI.AUTOLINK_EMAIL_ADDRESSES",
                "Ti.UI.AUTOLINK_MAP_ADDRESSES",
                "Ti.UI.AUTOLINK_NONE",
                "Ti.UI.AUTOLINK_PHONE_NUMBERS",
                "Ti.UI.AUTOLINK_URLS",
                "Ti.UI.AUTOLINK_ALL",
                "Ti.UI.AUTOLINK_CALENDAR",
                "Ti.UI.AUTOLINK_EMAIL_ADDRESSES",
                "Ti.UI.AUTOLINK_MAP_ADDRESSES",
                "Ti.UI.AUTOLINK_NONE",
                "Ti.UI.AUTOLINK_PHONE_NUMBERS",
                "Ti.UI.AUTOLINK_URLS"
            ]
        },
        "autoRedirect": {
            "description": "Determines whether automatic automatic handling of HTTP redirects is enabled.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "autocapitalization": {
            "description": "Determines how text is capitalized during typing.",
            "type": "Number",
            "values": [
                "Ti.UI.TEXT_AUTOCAPITALIZATION_ALL",
                "Ti.UI.TEXT_AUTOCAPITALIZATION_NONE",
                "Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES",
                "Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS",
                "Ti.UI.TEXT_AUTOCAPITALIZATION_ALL",
                "Ti.UI.TEXT_AUTOCAPITALIZATION_NONE",
                "Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES",
                "Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS"
            ]
        },
        "autocorrect": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "autohide": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "autoplay": {
            "description": "Indicates if a movie should automatically start playback.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "autoreverse": {
            "description": "Specifies if the animation should be replayed in reverse upon completion.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "autorotate": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "availableCameraMediaTypes": {
            "description": "Array of media type constants supported for the camera.",
            "type": "Array",
            "values": [
                "Ti.Media.MEDIA_TYPE_PHOTO",
                "Ti.Media.MEDIA_TYPE_VIDEO"
            ]
        },
        "availablePhotoGalleryMediaTypes": {
            "description": "Array of media type constants supported for saving to the device's camera roll or saved images album.",
            "type": "Array",
            "values": [
                "Ti.Media.MEDIA_TYPE_PHOTO",
                "Ti.Media.MEDIA_TYPE_VIDEO"
            ]
        },
        "availablePhotoMediaTypes": {
            "description": "Array of media type constants supported for the photo library.",
            "type": "Array",
            "values": [
                "Ti.Media.MEDIA_TYPE_PHOTO",
                "Ti.Media.MEDIA_TYPE_VIDEO"
            ]
        },
        "averageMicrophonePower": {
            "description": "Current average microphone level in dB or -1 if microphone monitoring is disabled.",
            "type": "Number"
        },
        "b": {
            "description": "The entry at position [1,2] in the matrix.",
            "type": "Number"
        },
        "backButtonTitle": {
            "description": "Title for the back button. This is only valid when the window is a child of a tab.",
            "type": "String"
        },
        "backButtonTitleImage": {
            "description": "The image to show as the back button. This is only valid when the window is a child of a tab.",
            "type": "String"
        },
        "backfillEnd": {
            "description": "Set to <code>true</code> to continue filling with the final color beyond the <code>endPoint</code>.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "backfillStart": {
            "description": "Set to <code>true</code> to continue filling with the starting color beyond the <code>startPoint</code>.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "backgroundColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "backgroundDisabledColor": {
            "description": "Disabled background color of the view, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "backgroundDisabledImage": {
            "description": "",
            "type": "String"
        },
        "backgroundFocusedColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "backgroundFocusedImage": {
            "description": "",
            "type": "String"
        },
        "backgroundGradient": {
            "description": "",
            "type": "Gradient"
        },
        "backgroundImage": {
            "description": "",
            "type": "String"
        },
        "backgroundLeftCap": {
            "description": "Size of the left end cap.",
            "type": "Number"
        },
        "backgroundPaddingBottom": {
            "description": "Number of pixels to extend the background image past the label on the bottom.",
            "type": "Number"
        },
        "backgroundPaddingLeft": {
            "description": "Number of pixels to extend the background image past the label on the left.",
            "type": "Number"
        },
        "backgroundPaddingRight": {
            "description": "Number of pixels to extend the background image past the label on the right.",
            "type": "Number"
        },
        "backgroundPaddingTop": {
            "description": "Number of pixels to extend the background image past the label on the top.",
            "type": "Number"
        },
        "backgroundRepeat": {
            "description": "Determines whether to tile a background across a view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "backgroundSelectedColor": {
            "description": "Selected background color of the view, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "backgroundSelectedImage": {
            "description": "",
            "type": "String"
        },
        "backgroundTopCap": {
            "description": "Size of the top end cap.",
            "type": "Number"
        },
        "badge": {
            "description": "",
            "type": "Number"
        },
        "barColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "barImage": {
            "description": "Background image for the nav bar, specified as a URL to a local image.",
            "type": "String"
        },
        "batteryMonitoring": {
            "description": "Determines whether battery monitoring is enabled.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "bccRecipients": {
            "description": "Recipients of the email included via the <code>BCC</code> (Blind Carbon Copy) field.",
            "type": "Array"
        },
        "begin": {
            "description": "Start date/time of this event.",
            "type": "Date"
        },
        "behavior": {
            "description": "Custom behavior the user notification supports.",
            "type": "Number",
            "values": [
                "Ti.App.iOS.USER_NOTIFICATION_BEHAVIOR_DEFAULT",
                "Ti.App.iOS.USER_NOTIFICATION_BEHAVIOR_TEXTINPUT"
            ]
        },
        "behaviors": {
            "description": "Behaviors associated with this animator.",
            "type": "Array"
        },
        "bindId": {
            "description": "View's ID (or set of IDs) used for data binding. This value must be unique.",
            "type": "String"
        },
        "birthday": {
            "description": "Date of birth of the person. Single value.",
            "type": "String"
        },
        "bitRate": {
            "description": "Bit rate of the current playback stream.",
            "type": "Number"
        },
        "blurRadius": {
            "description": "Specifies the blur radius of the shadow.",
            "type": "Number"
        },
        "borderBottom": {
            "description": "If <code>true</code>, a border is drawn on the bottom of the toolbar. This property is ignored on iOS 7 and above.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "borderColor": {
            "description": "Border color of the view, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "borderRadius": {
            "description": "Radius for the rounded corners of the view's border.",
            "type": "Number"
        },
        "borderStyle": {
            "description": "Border style for the field.",
            "type": "Number",
            "values": [
                "Ti.UI.INPUT_BORDERSTYLE_BEZEL",
                "Ti.UI.INPUT_BORDERSTYLE_LINE",
                "Ti.UI.INPUT_BORDERSTYLE_NONE",
                "Ti.UI.INPUT_BORDERSTYLE_ROUNDED"
            ]
        },
        "borderTop": {
            "description": "If <code>true</code>, a border is drawn on the top of the toolbar. This property is ignored on iOS 7 and above.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "borderWidth": {
            "description": "Border width of the view.",
            "type": "Number"
        },
        "bottom": {
            "description": "",
            "type": "Number"
        },
        "bubbleParent": {
            "description": "Indicates if the proxy will bubble an event to its parent.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "buffer": {
            "description": "Buffer object holding the data currently being pumped to the handler method.",
            "type": "Titanium.Buffer"
        },
        "bufferSize": {
            "description": "Size of the buffer used for streaming, in bytes.",
            "type": "Number"
        },
        "buttonNames": {
            "description": "",
            "type": "Array"
        },
        "byteOrder": {
            "description": "",
            "type": "Number"
        },
        "bytesProcessed": {
            "description": "",
            "type": "Number"
        },
        "c": {
            "description": "The entry at position [2,1] in the matrix.",
            "type": "Number"
        },
        "cache": {
            "description": "Determines whether HTTP responses are cached.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "cacheMode": {
            "description": "Determines how a cache is used in this web view.",
            "type": "Number",
            "values": [
                "Ti.UI.Android.WEBVIEW_LOAD_DEFAULT",
                "Ti.UI.Android.WEBVIEW_LOAD_NO_CACHE",
                "Ti.UI.Android.WEBVIEW_LOAD_CACHE_ONLY",
                "Ti.UI.Android.WEBVIEW_LOAD_CACHE_ELSE_NETWORK"
            ]
        },
        "cacheSize": {
            "description": "Number of pages to cache (pre-render).",
            "type": "Number"
        },
        "calendarViewShown": {
            "description": "Determines whether the calenderView is visible.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "callback": {
            "description": "Callback function invoked upon receiving a new push notification.",
            "type": "Function"
        },
        "cameraFlashMode": {
            "description": "Determines how the flash is fired when using the device's camera.",
            "type": "Number",
            "values": [
                "Ti.Media.CAMERA_FLASH_AUTO",
                "Ti.Media.CAMERA_FLASH_OFF",
                "Ti.Media.CAMERA_FLASH_ON"
            ]
        },
        "canCancelEvents": {
            "description": "Determines whether this scroll view can cancel subview touches in order to scroll instead.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "canDelete": {
            "description": "Determines whether this item can be deleted when it edit mode.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "canEdit": {
            "description": "Specifies if the item can be deleted by a user initiated action.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "canMove": {
            "description": "Specifies if the item can be reordered within the list view by a user initiated action.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "canScroll": {
            "description": "Determines if the list view can scroll in response to user actions.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "cancel": {
            "description": "",
            "type": "Function"
        },
        "cancelBubble": {
            "description": "Set to true to stop the event from bubbling.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "cancelable": {
            "description": "When <code>true</code> allows the user to cancel the progress dialog by pressing the BACK button.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "canceledOnTouchOutside": {
            "description": "When <code>cancelable</code> is set to <code>true</code> and this is set to <code>true</code>, the dialog is canceled when touched outside the window's bounds.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "cancelled": {
            "description": "Indicates if the user canceled the dialog.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "cardBackgroundColor": {
            "description": "Background color for CardView as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "cardCornerRadius": {
            "description": "Corner radius for CardView.",
            "type": "Number"
        },
        "cardElevation": {
            "description": "Elevation for CardView.",
            "type": "Number"
        },
        "cardMaxElevation": {
            "description": "Maximum Elevation for CardView.",
            "type": "Number"
        },
        "cardPreventCornerOverlap": {
            "description": "Add padding to CardView on API level 20 and before to prevent intersections between\nthe Card content and rounded corners.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "cardUseCompatPadding": {
            "description": "Add padding on API level 21 and above to have the same measurements with previous versions.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "caseInsensitiveSearch": {
            "description": "Determines if the search performed is case insensitive.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "categories": {
            "description": "Set of categories of user notification actions required by the applicaiton to use.",
            "type": "Array"
        },
        "category": {
            "description": "",
            "type": "String",
            "values": [
                "Ti.Android.CATEGORY_ALTERNATIVE",
                "Ti.Android.CATEGORY_BROWSABLE",
                "Ti.Android.CATEGORY_DEFAULT",
                "Ti.Android.CATEGORY_DEVELOPMENT_PREFERENCE",
                "Ti.Android.CATEGORY_EMBED",
                "Ti.Android.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST",
                "Ti.Android.CATEGORY_HOME",
                "Ti.Android.CATEGORY_INFO",
                "Ti.Android.CATEGORY_LAUNCHER",
                "Ti.Android.CATEGORY_MONKEY",
                "Ti.Android.CATEGORY_OPENABLE",
                "Ti.Android.CATEGORY_PREFERENCE",
                "Ti.Android.CATEGORY_SAMPLE_CODE",
                "Ti.Android.CATEGORY_SELECTED_ALTERNATIVE",
                "Ti.Android.CATEGORY_TAB",
                "Ti.Android.CATEGORY_TEST",
                "Ti.Android.CATEGORY_UNIT_TEST",
                "Ti.Android.CATEGORY_ALARM",
                "Ti.Android.CATEGORY_CALL",
                "Ti.Android.CATEGORY_EMAIL",
                "Ti.Android.CATEGORY_ERROR",
                "Ti.Android.CATEGORY_EVENT",
                "Ti.Android.CATEGORY_MESSAGE",
                "Ti.Android.CATEGORY_PROGRESS",
                "Ti.Android.CATEGORY_PROMO",
                "Ti.Android.CATEGORY_RECOMMENDATION",
                "Ti.Android.CATEGORY_SERVICE",
                "Ti.Android.CATEGORY_SOCIAL",
                "Ti.Android.CATEGORY_STATUS",
                "Ti.Android.CATEGORY_TRANSPORT"
            ]
        },
        "ccRecipients": {
            "description": "Recipients of the email included via the <code>CC</code> (Carbon Copy) field.",
            "type": "Array"
        },
        "center": {
            "description": "",
            "type": "Point"
        },
        "charset": {
            "description": "",
            "type": "String",
            "values": [
                "Ti.Codec.CHARSET_ASCII",
                "Ti.Codec.CHARSET_ISO_LATIN_1",
                "Ti.Codec.CHARSET_UTF8",
                "Ti.Codec.CHARSET_UTF16",
                "Ti.Codec.CHARSET_UTF16BE",
                "Ti.Codec.CHARSET_UTF16LE",
                "Ti.Codec.CHARSET_ASCII",
                "Ti.Codec.CHARSET_ISO_LATIN_1",
                "Ti.Codec.CHARSET_UTF8",
                "Ti.Codec.CHARSET_UTF16",
                "Ti.Codec.CHARSET_UTF16BE",
                "Ti.Codec.CHARSET_UTF16LE"
            ]
        },
        "chat_groups": {
            "description": "Set of <code>chat_groups</code> objects, if any exist.",
            "type": "Array"
        },
        "chats": {
            "description": "Set of <code>chats</code> objects, if any exist.",
            "type": "Array"
        },
        "checkable": {
            "description": "Determines if the item can be checked.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "checked": {
            "description": "Determines if the item is checked.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "checkins": {
            "description": "Set of <code>checkins</code> objects, if any exist.",
            "type": "Array"
        },
        "childTemplates": {
            "description": "Contains an array of subview templates to be added (in order) as children to this view.",
            "type": "Array"
        },
        "city": {
            "description": "City name.",
            "type": "String"
        },
        "className": {
            "description": "",
            "type": "String"
        },
        "classname": {
            "description": "Set of <code>classname</code> objects, if any exist.",
            "type": "Array"
        },
        "clearButtonMode": {
            "description": "Determines when the clear button is displayed.",
            "type": "Number",
            "values": [
                "Ti.UI.INPUT_BUTTONMODE_ALWAYS",
                "Ti.UI.INPUT_BUTTONMODE_NEVER",
                "Ti.UI.INPUT_BUTTONMODE_ONBLUR",
                "Ti.UI.INPUT_BUTTONMODE_ONFOCUS"
            ]
        },
        "clearOnEdit": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "clipMode": {
            "description": "View's clipping behavior.",
            "type": "Number"
        },
        "clipViews": {
            "description": "Determines whether the previous and next pages are clipped, so that they are not visible \nadjacent to the current page.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "code": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.Media.DEVICE_BUSY",
                "Ti.Media.NO_CAMERA",
                "Ti.Media.UNKNOWN_ERROR"
            ]
        },
        "codecs": {
            "description": "The codecs used to encode/decode the media.",
            "type": "Array"
        },
        "collections": {
            "description": "Set of <code>collections</code> objects, if any exist.",
            "type": "Array"
        },
        "collisionMode": {
            "description": "Specifies the collision behavior.",
            "type": "Number",
            "values": [
                "Ti.UI.iOS.COLLISION_MODE_ALL",
                "Ti.UI.iOS.COLLISION_MODE_BOUNDARY",
                "Ti.UI.iOS.COLLISION_MODE_ITEM"
            ]
        },
        "color": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "colors": {
            "description": "An array of colors, as a color name or hex triplet.",
            "type": "Array"
        },
        "columnCount": {
            "description": "The number of columns of items in the view.",
            "type": "Number"
        },
        "columns": {
            "description": "Columns used for this picker, as an array of <a href=\"Titanium.UI.PickerColumn\">PickerColumn</a> objects.",
            "type": "Array"
        },
        "comment": {
            "description": "",
            "type": "String"
        },
        "composer": {
            "description": "",
            "type": "String"
        },
        "compression": {
            "description": "Audio compression to be used for the recording.",
            "type": "Number",
            "values": [
                "Ti.Media.AUDIO_FORMAT_AAC",
                "Ti.Media.AUDIO_FORMAT_ALAW",
                "Ti.Media.AUDIO_FORMAT_APPLE_LOSSLESS",
                "Ti.Media.AUDIO_FORMAT_ILBC",
                "Ti.Media.AUDIO_FORMAT_IMA4",
                "Ti.Media.AUDIO_FORMAT_LINEAR_PCM",
                "Ti.Media.AUDIO_FORMAT_ULAW"
            ]
        },
        "connected": {
            "description": "Callback to be fired when the socket enters the \"connected\" state.",
            "type": "Function"
        },
        "contactKeywords": {
            "description": "A list of contacts that are somehow associated with this document beyond what is captured as Author.",
            "type": "Array"
        },
        "containerDisplayName": {
            "description": "Display of the search container",
            "type": "String"
        },
        "containerIdentifier": {
            "description": "Identifier for the search container",
            "type": "String"
        },
        "containerOrder": {
            "description": "Order the search container is displayed.",
            "type": "Number"
        },
        "containerTitle": {
            "description": "Title displayed in the search container",
            "type": "String"
        },
        "contentCreationDate": {
            "description": "The date that the contents of the item were created.",
            "type": "String"
        },
        "contentDescription": {
            "description": "An account of the content of the resource.",
            "type": "String"
        },
        "contentHeight": {
            "description": "",
            "type": "Number"
        },
        "contentIntent": {
            "description": "The <code>PendingIntent</code> to execute when the expanded status entry is clicked.",
            "type": "Titanium.Android.PendingIntent"
        },
        "contentModificationDate": {
            "description": "The date that the contents of the item were last modified.",
            "type": "String"
        },
        "contentOffset": {
            "description": "X and Y coordinates to which to reposition the top-left point of the scrollable region.",
            "type": "Object"
        },
        "contentPadding": {
            "description": "Inner padding between the edges of the Card and children of the CardView.",
            "type": "Number"
        },
        "contentPaddingBottom": {
            "description": "Inner padding between the bottom edge of the Card and children of the CardView.",
            "type": "Number"
        },
        "contentPaddingLeft": {
            "description": "Inner padding between the left edge of the Card and children of the CardView.",
            "type": "Number"
        },
        "contentPaddingRight": {
            "description": "Inner padding between the right edge of the Card and children of the CardView.",
            "type": "Number"
        },
        "contentPaddingTop": {
            "description": "Inner padding between the top edge of the Card and children of the CardView.",
            "type": "Number"
        },
        "contentRating": {
            "description": "Whether or not the item has explicit content. Set to <code>1</code> for explicit or <code>0</code> for clean.",
            "type": "Number"
        },
        "contentSources": {
            "description": "Used to indicate where the item was obtained from.",
            "type": "Array"
        },
        "contentText": {
            "description": "Description text of the notification.",
            "type": "String"
        },
        "contentTitle": {
            "description": "Title of the notification.",
            "type": "String"
        },
        "contentType": {
            "description": "UTI Type pedigree for an item.",
            "type": "String"
        },
        "contentTypeTree": {
            "description": "Array of strings related to the content tree of the item.",
            "type": "Array"
        },
        "contentURL": {
            "description": "",
            "type": "String"
        },
        "contentView": {
            "description": "",
            "type": "Titanium.Android.RemoteViews"
        },
        "contentWidth": {
            "description": "Width of the scrollable region.",
            "type": "Number"
        },
        "contributors": {
            "description": "Used to designate the entity responsible for making contributions to the content of the resource.",
            "type": "Array"
        },
        "coords": {
            "description": "If <code>success</code> is true, actual location data for this update.",
            "type": "LocationCoordinates"
        },
        "copyright": {
            "description": "Copyright of the content.",
            "type": "String"
        },
        "countDownDuration": {
            "description": "Duration in milliseconds used for a Countdown Timer picker.",
            "type": "Number"
        },
        "country": {
            "description": "Country name.",
            "type": "String"
        },
        "countryCode": {
            "description": "",
            "type": "String"
        },
        "country_code": {
            "description": "",
            "type": "String"
        },
        "coverage": {
            "description": "Used to designate the extent or scope of the content of the resource.",
            "type": "Array"
        },
        "creator": {
            "description": "Application used to create the document content (e.g. \"Word\",\"Framemaker\", etc.).",
            "type": "String"
        },
        "cropRect": {
            "description": "Simple object defining the user's selected crop rectangle, or <code>null</code> if the user has not edited the photo.",
            "type": "CropRectType"
        },
        "currentPage": {
            "description": "Index of the active page.",
            "type": "Number"
        },
        "currentPlaybackTime": {
            "description": "",
            "type": "Number"
        },
        "currentTab": {
            "description": "The currently active tab, if a tab group is open.",
            "type": "Titanium.UI.Tab"
        },
        "curve": {
            "description": "Animation curve or easing function to apply to the animation.",
            "type": "Number",
            "values": [
                "Ti.UI.ANIMATION_CURVE_EASE_IN",
                "Ti.UI.ANIMATION_CURVE_EASE_IN_OUT",
                "Ti.UI.ANIMATION_CURVE_EASE_OUT",
                "Ti.UI.ANIMATION_CURVE_LINEAR"
            ]
        },
        "d": {
            "description": "The entry at position [2,2] in the matrix.",
            "type": "Number"
        },
        "damping": {
            "description": "",
            "type": "Number"
        },
        "data": {
            "description": "",
            "type": "Object"
        },
        "date": {
            "description": "",
            "type": "Date"
        },
        "daysOfWeek": {
            "description": "The day of the week. Values are from 1 to 7, with Sunday being 1.",
            "type": "Number"
        },
        "debug": {
            "description": "Indicates whether internal debug logging should be output to the console.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "decelerationRate": {
            "description": "The deceleration rate of the ScrollView.",
            "type": "Number",
            "values": [
                "Ti.UI.iOS.SCROLL_DECELERATION_RATE_FAST",
                "Ti.UI.iOS.SCROLL_DECELERATION_RATE_NORMAL"
            ]
        },
        "decodeRetries": {
            "description": "Number of times to retry decoding the bitmap at a URL.",
            "type": "Number"
        },
        "defaultImage": {
            "description": "Local path to the default image to display while loading a remote image.",
            "type": "String"
        },
        "defaultItemTemplate": {
            "description": "Sets the default template for list data items that do not specify the <code>template</code> property.",
            "type": "String"
        },
        "defaults": {
            "description": "Specifies which values should be taken from the defaults.",
            "type": "Number",
            "values": [
                "Ti.Android.DEFAULT_ALL",
                "Ti.Android.DEFAULT_LIGHTS",
                "Ti.Android.DEFAULT_SOUND",
                "Ti.Android.DEFAULT_VIBRATE"
            ]
        },
        "delay": {
            "description": "Delay, in milliseconds before starting the animation.",
            "type": "Number"
        },
        "deleteIntent": {
            "description": "The <code>PendingIntent</code> to execute when the status entry is deleted by the user with the \"Clear All Notifications\" button.",
            "type": "Titanium.Android.PendingIntent"
        },
        "deliveryType": {
            "description": "The delivery type of the item.  Set to <code>0</code> for fast start and <code>1</code> for RTSP.",
            "type": "Number"
        },
        "density": {
            "description": "Specifies the relative mass density of this item.",
            "type": "Number"
        },
        "department": {
            "description": "Department of the person. Single value.",
            "type": "String"
        },
        "dest": {
            "description": "Destination buffer.",
            "type": "Titanium.Buffer"
        },
        "destPosition": {
            "description": "Index in the <code>dest</code> buffer of the first byte of the encoded string.",
            "type": "Number"
        },
        "destructive": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "detailView": {
            "description": "View for the detail view section of the SplitWindow.",
            "type": "Titanium.UI.View"
        },
        "deviceToken": {
            "description": "The device token which this device was registered for.",
            "type": "String"
        },
        "devices": {
            "description": "Dictionary containing counts of devices subscribed to a push channel, grouped by platform.",
            "type": "Object"
        },
        "director": {
            "description": "Director of the item, for example, the movie director.",
            "type": "String"
        },
        "disableBounce": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "disableNetworkActivityIndicator": {
            "description": "Prevents network activity indicator from being displayed.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "disabledColor": {
            "description": "Text color of the button in its disabled state, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "disabledLeftTrackImage": {
            "description": "Image URL of the slider left track when in the disabled state.",
            "type": "String"
        },
        "disabledRightTrackImage": {
            "description": "Image URL of the slider right track when in the disabled state.",
            "type": "String"
        },
        "disabledThumbImage": {
            "description": "Image URL of the slider thumb when in the disabled state.",
            "type": "String"
        },
        "displayAddress": {
            "description": "Display address. Identical to <code>address</code>.",
            "type": "String"
        },
        "displayHomeAsUp": {
            "description": "Displays an \"up\" affordance on the \"home\" area of the action bar.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "displayName": {
            "description": "A localized string to be displayed in the UI for this item.",
            "type": "String"
        },
        "distance": {
            "description": "Distance, in points, between the two attachment points.",
            "type": "Number"
        },
        "distanceFilter": {
            "description": "The minimum change of position (in meters) before a 'location' event is fired.",
            "type": "Number"
        },
        "domain": {
            "description": "",
            "type": "String"
        },
        "domainIdentifier": {
            "description": "Identifier that represents the \"domain\" or owner of this item.",
            "type": "String"
        },
        "downloadedDate": {
            "description": "The date that the file was last downloaded / received.",
            "type": "String"
        },
        "duration": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.NOTIFICATION_DURATION_LONG",
                "Ti.UI.NOTIFICATION_DURATION_SHORT"
            ]
        },
        "editActions": {
            "description": "Specifies custom action items to be shown when when a list item is edited.",
            "type": "Array"
        },
        "editButtonTitle": {
            "description": "Title for the edit button on the <strong>More</strong> tab.",
            "type": "String"
        },
        "editable": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "editing": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "editors": {
            "description": "The list of editor/editors that have worked on this item.",
            "type": "Array"
        },
        "elasticity": {
            "description": "Specifies the elasticity applied to collisions for this item.",
            "type": "Number"
        },
        "elevation": {
            "description": "Base elevation of the view relative to its parent in pixels.",
            "type": "Number"
        },
        "eligibleForHandoff": {
            "description": "Set to true if this user activity should be eligible to be handed off to another device",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "eligibleForPublicIndexing": {
            "description": "Set to <code>true</code> if the user activity can be publicly accessed by all iOS users.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "eligibleForSearch": {
            "description": "Set to true if the user activity should be added to the on-device index.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "ellipsize": {
            "description": "",
            "type": "Number",
            "values": [
                "true",
                "false"
            ]
        },
        "email": {
            "description": "Email addresses for the person. Multi-value. Read-only on Android.",
            "type": "Object"
        },
        "enableJavascriptInterface": {
            "description": "Enable adding javascript interfaces internally to webview prior to JELLY_BEAN_MR1 (Android 4.2)",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "enableKeepAlive": {
            "description": "Determines whether the client should attempt to keep a persistent connection.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "enableReturnKey": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "enableZoomControls": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "enabled": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "encodingApplications": {
            "description": "Software used to convert the original content into a PDF stream.",
            "type": "Array"
        },
        "end": {
            "description": "End date/time of this event.",
            "type": "Date"
        },
        "endDate": {
            "description": "End date of the recurrence end, or undefined if the recurrence end is count-based.",
            "type": "Date"
        },
        "endPlaybackTime": {
            "description": "The end time of movie playback, in milliseconds.",
            "type": "Number"
        },
        "endPoint": {
            "description": "End point for the gradient.",
            "type": "Point"
        },
        "endRadius": {
            "description": "For a radial gradient, the radius at the <code>endPoint</code>.",
            "type": "Number"
        },
        "error": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "errorCode": {
            "description": "The error code of the error (potentially system-dependent). <strong>Deprecated since 3.1.0.</strong>",
            "type": "Number"
        },
        "errorDescription": {
            "description": "Text description of the error. <strong>Deprecated since 3.1.0.</strong>",
            "type": "String"
        },
        "errorState": {
            "description": "Whether an error was encountered. Set to 1 in the case of an error, 0\notherwise.\n <strong>Deprecated since 3.1.0.</strong>",
            "type": "Number"
        },
        "event_occurrences": {
            "description": "Set of <code>event</code> objects, if any exist.",
            "type": "Array"
        },
        "events": {
            "description": "",
            "type": "Array"
        },
        "exact": {
            "description": "Whether or not the predicate is for an exact match.  The default is <code>true</code>.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "exitOnClose": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "expirationDate": {
            "description": "",
            "type": "String"
        },
        "expiresIn": {
            "description": "Indicates the number of seconds before the access token expires.",
            "type": "Number"
        },
        "expiryDate": {
            "description": "The expiration Date of the cookie.",
            "type": "String"
        },
        "extendBackground": {
            "description": "If <code>true</code>, the background of the toolbar extends upwards.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "extendEdges": {
            "description": "An array of supported values specified using the EXTEND_EDGE constants in <a href=\"Titanium.UI\">UI</a>. Valid on iOS 7 and greater.",
            "type": "Array",
            "values": [
                "Ti.UI.EXTEND_EDGE_ALL",
                "Ti.UI.EXTEND_EDGE_BOTTOM",
                "Ti.UI.EXTEND_EDGE_LEFT",
                "Ti.UI.EXTEND_EDGE_NONE",
                "Ti.UI.EXTEND_EDGE_RIGHT",
                "Ti.UI.EXTEND_EDGE_TOP",
                "Ti.UI.EXTEND_EDGE_ALL",
                "Ti.UI.EXTEND_EDGE_BOTTOM",
                "Ti.UI.EXTEND_EDGE_LEFT",
                "Ti.UI.EXTEND_EDGE_NONE",
                "Ti.UI.EXTEND_EDGE_RIGHT",
                "Ti.UI.EXTEND_EDGE_TOP"
            ]
        },
        "fields": {
            "description": "Field names to show when selecting properties. By default, shows all available.",
            "type": "Array"
        },
        "file": {
            "description": "Target local file to receive data.",
            "type": "String"
        },
        "fileSize": {
            "description": "Size of the document in MB.",
            "type": "Number"
        },
        "files": {
            "description": "Set of <code>file</code> objects, if any exist.",
            "type": "Array"
        },
        "filterAnchored": {
            "description": "Determines whether the search is limited to the start of the string",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "filterAttribute": {
            "description": "Filter attribute to be used when searching.",
            "type": "String"
        },
        "filterCaseInsensitive": {
            "description": "Determines whether the search is case insensitive.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "firstName": {
            "description": "First name of the person. Single value.",
            "type": "String"
        },
        "firstPhonetic": {
            "description": "Phonetic first name of the person.  Single value.",
            "type": "String"
        },
        "flagSecure": {
            "description": "Treat the content of the window as secure, preventing it from appearing in screenshots or from being viewed on non-secure displays.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "flags": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.Android.FLAG_ACTIVITY_BROUGHT_TO_FRONT",
                "Ti.Android.FLAG_ACTIVITY_CLEAR_TOP",
                "Ti.Android.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET",
                "Ti.Android.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS",
                "Ti.Android.FLAG_ACTIVITY_FORWARD_RESULT",
                "Ti.Android.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY",
                "Ti.Android.FLAG_ACTIVITY_MULTIPLE_TASK",
                "Ti.Android.FLAG_ACTIVITY_NEW_TASK",
                "Ti.Android.FLAG_ACTIVITY_NO_ANIMATION",
                "Ti.Android.FLAG_ACTIVITY_NO_HISTORY",
                "Ti.Android.FLAG_ACTIVITY_NO_USER_ACTION",
                "Ti.Android.FLAG_ACTIVITY_PREVIOUS_IS_TOP",
                "Ti.Android.FLAG_ACTIVITY_REORDER_TO_FRONT",
                "Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED",
                "Ti.Android.FLAG_ACTIVITY_SINGLE_TOP",
                "Ti.Android.FLAG_DEBUG_LOG_RESOLUTION",
                "Ti.Android.FLAG_FROM_BACKGROUND",
                "Ti.Android.FLAG_GRANT_READ_URI_PERMISSION",
                "Ti.Android.FLAG_GRANT_WRITE_URI_PERMISSION",
                "Ti.Android.FLAG_RECEIVER_REGISTERED_ONLY",
                "Ti.Android.FLAG_CANCEL_CURRENT",
                "Ti.Android.FLAG_NO_CREATE",
                "Ti.Android.FLAG_ONE_SHOT",
                "Ti.Android.FLAG_UPDATE_CURRENT",
                "Ti.Android.FLAG_AUTO_CANCEL",
                "Ti.Android.FLAG_INSISTENT",
                "Ti.Android.FLAG_NO_CLEAR",
                "Ti.Android.FLAG_ONGOING_EVENT",
                "Ti.Android.FLAG_ONLY_ALERT_ONCE",
                "Ti.Android.FLAG_SHOW_LIGHTS",
                "Ti.Android.FLAG_CANCEL_CURRENT",
                "Ti.Android.FLAG_NO_CREATE",
                "Ti.Android.FLAG_ONE_SHOT",
                "Ti.Android.FLAG_UPDATE_CURRENT"
            ]
        },
        "floor": {
            "description": "The floor of the building on which the user is located. Available in iOS 8.0 and later.",
            "type": "LocationCoordinatesFloor"
        },
        "focusAppOnPush": {
            "description": "Whether or not your application is brought to the foreground whenever a new push is received.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "focusable": {
            "description": "Whether view should be focusable while navigating with the trackball.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "font": {
            "description": "",
            "type": "Font"
        },
        "fontFamily": {
            "description": "Specifies the font family or specific font to use.",
            "type": "String"
        },
        "fontNames": {
            "description": "Array of font names used in the item.",
            "type": "Array"
        },
        "fontSize": {
            "description": "Font size, in platform-dependent units.",
            "type": "Number"
        },
        "fontStyle": {
            "description": "Font style. Valid values are \"italic\" or \"normal\".",
            "type": "String"
        },
        "fontWeight": {
            "description": "Font weight. Valid values are \"bold\" or \"normal\".",
            "type": "String"
        },
        "footer": {
            "description": "The footer title of the row.",
            "type": "String"
        },
        "footerDividersEnabled": {
            "description": "When set to false, the ListView will not draw the divider before the footer view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "footerTitle": {
            "description": "",
            "type": "String"
        },
        "footerView": {
            "description": "",
            "type": "Titanium.UI.View"
        },
        "forceSplashAsSnapshot": {
            "description": "Shows the application's splash screen on app resume.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "forceTouchSupported": {
            "description": "Determines if the 3D-Touch capability \"Force Touch\" is supported (<code>true</code>) or not (<code>false</code>) by the device.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "format": {
            "description": "Audio format to be used for the recording.",
            "type": "Number",
            "values": [
                "Ti.Media.AUDIO_FILEFORMAT_3GP2",
                "Ti.Media.AUDIO_FILEFORMAT_3GPP",
                "Ti.Media.AUDIO_FILEFORMAT_AIFF",
                "Ti.Media.AUDIO_FILEFORMAT_AMR",
                "Ti.Media.AUDIO_FILEFORMAT_CAF",
                "Ti.Media.AUDIO_FILEFORMAT_MP3",
                "Ti.Media.AUDIO_FILEFORMAT_MP4",
                "Ti.Media.AUDIO_FILEFORMAT_MP4A",
                "Ti.Media.AUDIO_FILEFORMAT_WAVE"
            ]
        },
        "format24": {
            "description": "Determines whether the Time pickers display in 24-hour or 12-hour clock format.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "forwardGeocoderTimeout": {
            "description": "The time within which forward geocoder requests must succeed, in milliseconds.",
            "type": "Number"
        },
        "frequency": {
            "description": "",
            "type": "Number"
        },
        "friction": {
            "description": "Specifies the linear resistance of the item when it slides against another item.",
            "type": "Number"
        },
        "friend_requests": {
            "description": "Set of <code>user</code> objects, if any exist.",
            "type": "Array"
        },
        "fromStream": {
            "description": "Stream being read from.",
            "type": "Titanium.IOStream"
        },
        "fullscreen": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "generalMIDISequence": {
            "description": "Used to indicates whether the MIDI sequence contained in the file is setup for use with a General MIDI device.",
            "type": "Number"
        },
        "genre": {
            "description": "",
            "type": "String"
        },
        "geo_fences": {
            "description": "Set of geo-fence objects, if any exist.",
            "type": "Array"
        },
        "gravityDirection": {
            "description": "Specifies the direction of the gravity vector as an x, y pair.",
            "type": "Point"
        },
        "grouping": {
            "description": "A constant that specifies the ordering of the result array.",
            "type": "Number",
            "values": [
                "Ti.Media.MUSIC_MEDIA_GROUP_TITLE",
                "Ti.Media.MUSIC_MEDIA_GROUP_ALBUM",
                "Ti.Media.MUSIC_MEDIA_GROUP_ARTIST",
                "Ti.Media.MUSIC_MEDIA_GROUP_ALBUM_ARTIST",
                "Ti.Media.MUSIC_MEDIA_GROUP_COMPOSER",
                "Ti.Media.MUSIC_MEDIA_GROUP_GENRE",
                "Ti.Media.MUSIC_MEDIA_GROUP_PLAYLIST",
                "Ti.Media.MUSIC_MEDIA_GROUP_PODCAST_TITLE"
            ]
        },
        "handleLinks": {
            "description": "Specifies if the text area should allow user interaction with the given URL in the given range of text.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "handlePlatformUrl": {
            "description": "Lets the webview handle platform supported urls",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "hasCheck": {
            "description": "Determines whether a system-provided checkmark is displayed on the right-hand side of \nthe row.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "hasChild": {
            "description": "Determines whether a system-provided arrow is displayed on the right-hand side of the row.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "hasDetail": {
            "description": "Determines whether a system-provided detail disclosure button is displayed on the right-hand \nside of the row.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "header": {
            "description": "The header title of the row.",
            "type": "String"
        },
        "headerDividersEnabled": {
            "description": "When set to false, the ListView will not draw the divider after the header view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "headerPullView": {
            "description": "View positioned above the first row that is only revealed when the user drags the table \ncontents down.",
            "type": "Titanium.UI.View"
        },
        "headerTitle": {
            "description": "",
            "type": "String"
        },
        "headerView": {
            "description": "",
            "type": "Titanium.UI.View"
        },
        "heading": {
            "description": "",
            "type": "Number"
        },
        "headingFilter": {
            "description": "Minimum heading change (in degrees) before a <code>heading</code> event is fired.",
            "type": "Number"
        },
        "height": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.FILL",
                "Ti.UI.SIZE",
                "Ti.UI.FILL",
                "Ti.UI.SIZE"
            ]
        },
        "hidden": {
            "description": "Set to <code>true</code> if the file is hidden.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "hideLoadIndicator": {
            "description": "Hides activity indicator when loading remote URL.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "hideSearchOnSelection": {
            "description": "Determines whether the search field should hide on completion.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "hideShadow": {
            "description": "Set this to true to hide the shadow image of the navigation bar.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "highlightedColor": {
            "description": "Color of the label when in the highlighted state, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "highlightedLeftTrackImage": {
            "description": "Image URL of the slider left track when in the highlighted state.",
            "type": "String"
        },
        "highlightedRightTrackImage": {
            "description": "Image URL of the slider right track when in the highlighted state.",
            "type": "String"
        },
        "highlightedThumbImage": {
            "description": "Image URL of the slider thumb when in the highlighted state.",
            "type": "String"
        },
        "hintText": {
            "description": "",
            "type": "String"
        },
        "hintTextColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "hinttextid": {
            "description": "Key identifying a string from the locale file to use for the\n<a href=\"Titanium.UI.SearchBar.hintText\">hintText</a> property.",
            "type": "String"
        },
        "hires": {
            "description": "Set to <code>true</code> to prevent scaling of 2x-resolution remote images for Retina \ndisplays.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "hitRect": {
            "description": "Sets the region where this view responds to gestures.",
            "type": "Dimension"
        },
        "homeButtonEnabled": {
            "description": "Enable or disable the \"home\" button in the corner of the action bar.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "horizontalBounce": {
            "description": "Determines whether horizontal scroll bounce of the scrollable region is enabled.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "horizontalMargin": {
            "description": "Horizontal placement of the notification, <em>as a fraction of the screen width</em>.",
            "type": "Number"
        },
        "horizontalWrap": {
            "description": "Determines whether the layout has wrapping behavior.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "host": {
            "description": "The host to connect to or listen on.",
            "type": "String"
        },
        "html": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "httpURLFormatter": {
            "description": "User-defined function that is called everytime HTTPClient connects to a remote resource.",
            "type": "Function"
        },
        "httponly": {
            "description": "The httponly attribute of the cookie.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "icon": {
            "description": "",
            "type": "String",
            "values": [
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_COMPOSE",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_PLAY",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_PAUSE",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_ADD",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_LOCATION",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_SEARCH",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_SHARE",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_PROHIBIT",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_CONTACT",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_HOME",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_MARK_LOCATION",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_FAVORITE",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_LOVE",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_CLOUD",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_INVITATION",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_CONFIRMATION",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_MAIL",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_MESSAGE",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_DATE",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_TIME",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_TASK",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_TASK_COMPLETED",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_ALARM",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_BOOKMARK",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_SHUFFLE",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_AUDIO",
                "Ti.UI.iOS.SHORTCUT_ICON_TYPE_UPDATE"
            ]
        },
        "iconIsMask": {
            "description": "Defines if the icon property of the tab must be used as a mask. This property is applicable on iOS 7 and greater.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "iconified": {
            "description": "Iconifies or expands the search view",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "iconifiedByDefault": {
            "description": "Sets the default or resting state of the search view",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "identifier": {
            "description": "",
            "type": "String"
        },
        "idleTimerDisabled": {
            "description": "Determines whether the screen is locked when the device is idle.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "ignoreSslError": {
            "description": "Controls whether to ignore invalid SSL certificates or not.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "image": {
            "description": "",
            "type": "Titanium.Blob"
        },
        "images": {
            "description": "",
            "type": "Array"
        },
        "inBackground": {
            "description": "Boolean indicating if notification was received while app was in background. \nThis property became available in Titanium Mobile 3.1.0 for iOS.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "inPopOver": {
            "description": "Show the camera in a popover.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "inbound": {
            "description": "Socket which represents the inbound connection.",
            "type": "Titanium.Network.Socket.TCP"
        },
        "includeFontPadding": {
            "description": "Includes extra top and bottom padding to make room for accents that go above normal ascent and descent.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "includeOpaqueBars": {
            "description": "Specifies if the edges should extend beyond opaque bars (navigation bar, tab bar, toolbar). Valid on iOS 7 and greater.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "indentionLevel": {
            "description": "Indention level for the row.",
            "type": "Number"
        },
        "index": {
            "description": "",
            "type": "Number"
        },
        "indicatorColor": {
            "description": "Color of the animated indicator.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "indicatorDiameter": {
            "description": "Diameter of the indicator.",
            "type": "String"
        },
        "information": {
            "description": "Information about the item.",
            "type": "String"
        },
        "initialPlaybackTime": {
            "description": "The start time of movie playback, in milliseconds.",
            "type": "Number"
        },
        "inputs": {
            "description": "An Array of current input ports for the session. See the <code>AUDIO_SESSION_PORT</code> constants.",
            "type": "Array"
        },
        "instantMessage": {
            "description": "Instant messenger information of the person. Multi-value.",
            "type": "Object"
        },
        "intent": {
            "description": "",
            "type": "Titanium.Android.Intent"
        },
        "ip_address": {
            "description": "IP address of client.",
            "type": "String"
        },
        "isCompilation": {
            "description": "Filter by whether or not the item is a compilation. Value should be a Boolean.",
            "type": "MediaQueryInfoType"
        },
        "isLocal": {
            "description": "whether or not the service is local to the device",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "isSearching": {
            "description": "Whether or not the browser is currently searching",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "item": {
            "description": "",
            "type": "Titanium.UI.View"
        },
        "itemContentType": {
            "description": "Content type of the attribute set.",
            "type": "String",
            "values": [
                "Ti.App.iOS.UTTYPE_TEXT",
                "Ti.App.iOS.UTTYPE_PLAIN_TEXT",
                "Ti.App.iOS.UTTYPE_UTF8_PLAIN_TEXT",
                "Ti.App.iOS.UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT",
                "Ti.App.iOS.UTTYPE_UTF16_PLAIN_TEXT",
                "Ti.App.iOS.UTTYPE_RTF",
                "Ti.App.iOS.UTTYPE_HTML",
                "Ti.App.iOS.UTTYPE_XML",
                "Ti.App.iOS.UTTYPE_PDF",
                "Ti.App.iOS.UTTYPE_RTFD",
                "Ti.App.iOS.UTTYPE_FLAT_RTFD",
                "Ti.App.iOS.UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA",
                "Ti.App.iOS.UTTYPE_WEB_ARCHIVE",
                "Ti.App.iOS.UTTYPE_IMAGE",
                "Ti.App.iOS.UTTYPE_JPEG",
                "Ti.App.iOS.UTTYPE_JPEG2000",
                "Ti.App.iOS.UTTYPE_TIFF",
                "Ti.App.iOS.UTTYPE_PICT",
                "Ti.App.iOS.UTTYPE_GIF",
                "Ti.App.iOS.UTTYPE_PNG",
                "Ti.App.iOS.UTTYPE_QUICKTIME_IMAGE",
                "Ti.App.iOS.UTTYPE_APPLE_ICNS",
                "Ti.App.iOS.UTTYPE_BMP",
                "Ti.App.iOS.UTTYPE_ICO",
                "Ti.App.iOS.UTTYPE_MOVIE",
                "Ti.App.iOS.UTTYPE_VIDEO",
                "Ti.App.iOS.UTTYPE_AUDIO",
                "Ti.App.iOS.UTTYPE_QUICKTIME_MOVIE",
                "Ti.App.iOS.UTTYPE_MPEG",
                "Ti.App.iOS.UTTYPE_MPEG4",
                "Ti.App.iOS.UTTYPE_MP3",
                "Ti.App.iOS.UTTYPE_MPEG4_AUDIO",
                "Ti.App.iOS.UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO"
            ]
        },
        "itemId": {
            "description": "A user defined string that gets passed to events.",
            "type": "String"
        },
        "itemIndex": {
            "description": "The itemIndex of the reference item.",
            "type": "Number"
        },
        "itemOffset": {
            "description": "Offset from the center point of the item for the attachment.",
            "type": "Point"
        },
        "items": {
            "description": "",
            "type": "Array"
        },
        "itemtype": {
            "description": "The unique key for the application shortcut.",
            "type": "String"
        },
        "jobTitle": {
            "description": "Job title of the person. Single value.",
            "type": "String"
        },
        "keepScreenOn": {
            "description": "Determines whether to keep the device screen on.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "keepSectionsInSearch": {
            "description": "Determines if the section information is displayed in the search results when using the <code>searchText</code> property.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "keySignature": {
            "description": "The musical key of the song/composition contained in an audio file.",
            "type": "String"
        },
        "keyboardToolbar": {
            "description": "Array of toolbar button objects or a <a href=\"Titanium.UI.iOS.Toolbar\">toolbar</a> to be used when the \nkeyboard is displayed.",
            "type": "Array"
        },
        "keyboardToolbarColor": {
            "description": "Color of the keyboard toolbar if keyboardToolbar is an array, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "keyboardToolbarHeight": {
            "description": "Height of the keyboard toolbar if keyboardToolbar is an array.",
            "type": "Number"
        },
        "keyboardType": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.KEYBOARD_APPEARANCE_ALERT",
                "Ti.UI.KEYBOARD_APPEARANCE_DEFAULT",
                "Ti.UI.KEYBOARD_ASCII",
                "Ti.UI.KEYBOARD_DECIMAL_PAD",
                "Ti.UI.KEYBOARD_DEFAULT",
                "Ti.UI.KEYBOARD_EMAIL",
                "Ti.UI.KEYBOARD_NAMEPHONE_PAD",
                "Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION",
                "Ti.UI.KEYBOARD_NUMBER_PAD",
                "Ti.UI.KEYBOARD_PHONE_PAD",
                "Ti.UI.KEYBOARD_URL",
                "Ti.UI.KEYBOARD_APPEARANCE_ALERT",
                "Ti.UI.KEYBOARD_APPEARANCE_DEFAULT",
                "Ti.UI.KEYBOARD_ASCII",
                "Ti.UI.KEYBOARD_DECIMAL_PAD",
                "Ti.UI.KEYBOARD_DEFAULT",
                "Ti.UI.KEYBOARD_EMAIL",
                "Ti.UI.KEYBOARD_NAMEPHONE_PAD",
                "Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION",
                "Ti.UI.KEYBOARD_NUMBER_PAD",
                "Ti.UI.KEYBOARD_PHONE_PAD",
                "Ti.UI.KEYBOARD_URL"
            ]
        },
        "keyvalues": {
            "description": "Set of <code>keyvalues</code> objects, if any exist.",
            "type": "Array"
        },
        "keywords": {
            "description": "",
            "type": "Array"
        },
        "kind": {
            "description": "",
            "type": "String",
            "values": [
                "Ti.Contacts.CONTACTS_KIND_ORGANIZATION",
                "Ti.Contacts.CONTACTS_KIND_PERSON"
            ]
        },
        "labels": {
            "description": "",
            "type": "Array"
        },
        "landscapeSplit": {
            "description": "Determines the width of the <code>masterView</code> in landscape mode.",
            "type": "Number"
        },
        "languages": {
            "description": "Used to designate the languages of the intellectual content of the resource.",
            "type": "Array"
        },
        "largeIcon": {
            "description": "Add a large icon to the notification (and the ticker on some devices) specified as an Android resource ID, or a local URL to a density-specific image.",
            "type": "Number"
        },
        "lastInsertRowId": {
            "description": "The identifier of the last populated row.",
            "type": "Number"
        },
        "lastName": {
            "description": "Last name of the person. Single value.",
            "type": "String"
        },
        "lastPhonetic": {
            "description": "Phonetic last name of the person. Single value.",
            "type": "String"
        },
        "lastUsedDate": {
            "description": "The date that the item was last used.",
            "type": "String"
        },
        "latitude": {
            "description": "",
            "type": "Number"
        },
        "latitudeDelta": {
            "description": "The amount of north-to-south distance displayed on the map, measured in decimal degrees.",
            "type": "Number"
        },
        "launchOptionsLocationKey": {
            "description": "If set to <code>true</code>, this key indicates that the application was launched in response to an\nincoming location event.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "layout": {
            "description": "Specifies how the view positions its children. \nOne of: 'composite', 'vertical', or 'horizontal'.",
            "type": "String",
            "values": [
                "\"vertical\"",
                "\"horizontal\"",
                "\"composite\""
            ]
        },
        "layoutId": {
            "description": "Android layout resource ID for the view to display. Required.",
            "type": "Number"
        },
        "lazyLoadingEnabled": {
            "description": "Determines if the list view should use lazy loading to load remote images.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "ledARGB": {
            "description": "The color for the LED to blink.",
            "type": "Number"
        },
        "ledOffMS": {
            "description": "The number of milliseconds for the LED to be off while it's flashing.",
            "type": "Number"
        },
        "ledOnMS": {
            "description": "The number of milliseconds for the LED to be on while it's flashing.",
            "type": "Number"
        },
        "left": {
            "description": "",
            "type": "Number"
        },
        "leftButton": {
            "description": "Left button view to display in the <code>TextField</code>.",
            "type": "Object"
        },
        "leftButtonMode": {
            "description": "Determines when to display the left button view.",
            "type": "Number",
            "values": [
                "Ti.UI.INPUT_BUTTONMODE_ALWAYS",
                "Ti.UI.INPUT_BUTTONMODE_NEVER",
                "Ti.UI.INPUT_BUTTONMODE_ONBLUR",
                "Ti.UI.INPUT_BUTTONMODE_ONFOCUS"
            ]
        },
        "leftButtonPadding": {
            "description": "Padding between the left button and the edge of the field.",
            "type": "Number"
        },
        "leftImage": {
            "description": "Image to render in the left image area of the row, specified as a local path or URL.",
            "type": "String"
        },
        "leftNavButton": {
            "description": "",
            "type": "Titanium.UI.View"
        },
        "leftNavButtons": {
            "description": "An Array of views to show in the left nav bar area.",
            "type": "Array"
        },
        "leftTrackImage": {
            "description": "Image URL of the slider left track.",
            "type": "String"
        },
        "leftTrackLeftCap": {
            "description": "Size of the left end cap for the leftTrackImage, disabledLeftTrackImage, highlightedLeftTrackImage and selectedLeftTrackImage properties.",
            "type": "Number"
        },
        "leftTrackTopCap": {
            "description": "Size of the top end cap for the leftTrackImage, disabledLeftTrackImage, highlightedLeftTrackImage and selectedLeftTrackImage properties.",
            "type": "Number"
        },
        "length": {
            "description": "",
            "type": "Number"
        },
        "level": {
            "description": "The logical floor of the building.",
            "type": "Number"
        },
        "lifecycleContainer": {
            "description": "The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.",
            "type": "Titanium.UI.Window"
        },
        "lightTouchEnabled": {
            "description": "Enables using light touches to make a selection and activate mouseovers.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "likes": {
            "description": "Set of <code>like</code> objects, if any exist.",
            "type": "Array"
        },
        "lines": {
            "description": "Makes the label be exactly this many lines tall.",
            "type": "Number"
        },
        "listenQueueSize": {
            "description": "Max number of pending incoming connections to be allowed when the socket is in the <a href=\"Titanium.Network.Socket.LISTENING\">LISTENING</a> state.",
            "type": "Number"
        },
        "loading": {
            "description": "Indicates if the webview is loading content.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "local": {
            "description": "Whether or not the item is local. Set to <code>1</code> if true and <code>0</code> otherwise.",
            "type": "Number"
        },
        "localName": {
            "description": "Local part of the qualified name of this node.",
            "type": "String"
        },
        "locale": {
            "description": "Locale used when displaying Date and Time picker values.",
            "type": "String"
        },
        "location": {
            "description": "",
            "type": "Object",
            "values": [
                "Ti.UI.Android.PROGRESS_INDICATOR_DIALOG",
                "Ti.UI.Android.PROGRESS_INDICATOR_STATUS_BAR"
            ]
        },
        "locationServicesAuthorization": {
            "description": "Returns an authorization constant indicating if the application has access to location services.",
            "type": "Number",
            "values": [
                "Ti.Geolocation.AUTHORIZATION_ALWAYS",
                "Ti.Geolocation.AUTHORIZATION_AUTHORIZED",
                "Ti.Geolocation.AUTHORIZATION_DENIED",
                "Ti.Geolocation.AUTHORIZATION_RESTRICTED",
                "Ti.Geolocation.AUTHORIZATION_UNKNOWN",
                "Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE"
            ]
        },
        "locationTimeout": {
            "description": "The time within which location requests must succeed, in milliseconds.",
            "type": "Number"
        },
        "loginKeyboardType": {
            "description": "Keyboard type to display when this text field inside the dialog is focused.",
            "type": "Number",
            "values": [
                "Ti.UI.KEYBOARD_APPEARANCE_ALERT",
                "Ti.UI.KEYBOARD_APPEARANCE_DEFAULT",
                "Ti.UI.KEYBOARD_ASCII",
                "Ti.UI.KEYBOARD_DECIMAL_PAD",
                "Ti.UI.KEYBOARD_DEFAULT",
                "Ti.UI.KEYBOARD_EMAIL",
                "Ti.UI.KEYBOARD_NAMEPHONE_PAD",
                "Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION",
                "Ti.UI.KEYBOARD_NUMBER_PAD",
                "Ti.UI.KEYBOARD_PHONE_PAD",
                "Ti.UI.KEYBOARD_URL"
            ]
        },
        "loginPlaceholder": {
            "description": "Placeholder of the login text field inside the dialog.",
            "type": "String"
        },
        "loginReturnKeyType": {
            "description": "Specifies the text to display on the keyboard <code>Return</code> key when this field is focused.",
            "type": "Number",
            "values": [
                "Ti.UI.RETURNKEY_DEFAULT",
                "Ti.UI.RETURNKEY_DONE",
                "Ti.UI.RETURNKEY_EMERGENCY_CALL",
                "Ti.UI.RETURNKEY_GO",
                "Ti.UI.RETURNKEY_GOOGLE",
                "Ti.UI.RETURNKEY_JOIN",
                "Ti.UI.RETURNKEY_NEXT",
                "Ti.UI.RETURNKEY_ROUTE",
                "Ti.UI.RETURNKEY_SEARCH",
                "Ti.UI.RETURNKEY_SEND",
                "Ti.UI.RETURNKEY_YAHOO"
            ]
        },
        "logo": {
            "description": "Sets the application logo displayed in the \"home\" area of the action bar, specified as a local file path or URL.",
            "type": "String"
        },
        "longitude": {
            "description": "",
            "type": "Number"
        },
        "longitudeDelta": {
            "description": "The amount of east-to-west distance displayed on the map, measured in decimal degrees.",
            "type": "Number"
        },
        "looping": {
            "description": "Determines whether the audio should loop upon completion.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "lyricist": {
            "description": "The lyricist/text writer for song/composition contained in the audio file.",
            "type": "String"
        },
        "m11": {
            "description": "The entry at position [1,1] in the matrix.",
            "type": "Number"
        },
        "m12": {
            "description": "The entry at position [1,2] in the matrix.",
            "type": "Number"
        },
        "m13": {
            "description": "The entry at position [1,3] in the matrix.",
            "type": "Number"
        },
        "m14": {
            "description": "The entry at position [1,4] in the matrix.",
            "type": "Number"
        },
        "m21": {
            "description": "The entry at position [2,1] in the matrix.",
            "type": "Number"
        },
        "m22": {
            "description": "The entry at position [2,2] in the matrix.",
            "type": "Number"
        },
        "m23": {
            "description": "The entry at position [2,3] in the matrix.",
            "type": "Number"
        },
        "m24": {
            "description": "The entry at position [2,4] in the matrix.",
            "type": "Number"
        },
        "m31": {
            "description": "The entry at position [3,1] in the matrix.",
            "type": "Number"
        },
        "m32": {
            "description": "The entry at position [3,2] in the matrix.",
            "type": "Number"
        },
        "m33": {
            "description": "The entry at position [3,3] in the matrix.",
            "type": "Number"
        },
        "m34": {
            "description": "The entry at position [3,4] in the matrix.",
            "type": "Number"
        },
        "m41": {
            "description": "The entry at position [4,1] in the matrix.",
            "type": "Number"
        },
        "m42": {
            "description": "The entry at position [4,2] in the matrix.",
            "type": "Number"
        },
        "m43": {
            "description": "The entry at position [4,3] in the matrix.",
            "type": "Number"
        },
        "m44": {
            "description": "The entry at position [4,4] in the matrix.",
            "type": "Number"
        },
        "magneticHeading": {
            "description": "Declination in degrees from magnetic North.",
            "type": "Number"
        },
        "magnitude": {
            "description": "",
            "type": "Number"
        },
        "manualMode": {
            "description": "Set to <code>true</code> to enable manual configuration of location updates through this module.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "mask": {
            "description": "Image drawn as the background image.",
            "type": "String"
        },
        "masterIsOverlayed": {
            "description": "Determines whether to show the master view is overlayed in portrait orientation.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "masterView": {
            "description": "View for the master view section of the SplitWindow.",
            "type": "Titanium.UI.View"
        },
        "max": {
            "description": "",
            "type": "Number"
        },
        "maxAge": {
            "description": "",
            "type": "Number"
        },
        "maxDate": {
            "description": "Maximum date displayed when a Date picker is in use.",
            "type": "Date"
        },
        "maxLength": {
            "description": "Maximum length of text field input.",
            "type": "Number"
        },
        "maxLines": {
            "description": "Makes the label at most this many lines tall.",
            "type": "Number"
        },
        "maxRange": {
            "description": "Upper limit on the slider value that can be selected.",
            "type": "Number"
        },
        "maxRowHeight": {
            "description": "Maximum row height for table view rows.",
            "type": "Number"
        },
        "maxZoomScale": {
            "description": "Maximum scaling factor of the scrollable region and its content.",
            "type": "Number"
        },
        "maximumHeadingAge": {
            "description": "The maximum age of cached locations acceptible for heading requests, in milliseconds.",
            "type": "Number"
        },
        "maximumLocationAge": {
            "description": "The maximum age of cached locations acceptible for location requests, in milliseconds.",
            "type": "Number"
        },
        "media": {
            "description": "",
            "type": "Titanium.Blob"
        },
        "mediaControlStyle": {
            "description": "The style of the playback controls.",
            "type": "Number",
            "values": [
                "Ti.Media.VIDEO_CONTROL_VOLUME_ONLY",
                "Ti.Media.VIDEO_CONTROL_DEFAULT",
                "Ti.Media.VIDEO_CONTROL_EMBEDDED",
                "Ti.Media.VIDEO_CONTROL_FULLSCREEN",
                "Ti.Media.VIDEO_CONTROL_HIDDEN",
                "Ti.Media.VIDEO_CONTROL_NONE"
            ]
        },
        "mediaType": {
            "description": "",
            "type": "MediaQueryInfoType",
            "values": [
                "Ti.Media.MUSIC_MEDIA_TYPE_ALL",
                "Ti.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO",
                "Ti.Media.MUSIC_MEDIA_TYPE_AUDIOBOOK",
                "Ti.Media.MUSIC_MEDIA_TYPE_MUSIC",
                "Ti.Media.MUSIC_MEDIA_TYPE_PODCAST"
            ]
        },
        "mediaTypes": {
            "description": "",
            "type": "Array",
            "values": [
                "Ti.Media.MUSIC_MEDIA_TYPE_ALL",
                "Ti.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO",
                "Ti.Media.MUSIC_MEDIA_TYPE_AUDIOBOOK",
                "Ti.Media.MUSIC_MEDIA_TYPE_MUSIC",
                "Ti.Media.MUSIC_MEDIA_TYPE_PODCAST",
                "Ti.Media.MEDIA_TYPE_PHOTO",
                "Ti.Media.MEDIA_TYPE_VIDEO",
                "Ti.Media.VIDEO_MEDIA_TYPE_AUDIO",
                "Ti.Media.VIDEO_MEDIA_TYPE_NONE",
                "Ti.Media.VIDEO_MEDIA_TYPE_VIDEO"
            ]
        },
        "message": {
            "description": "",
            "type": "String"
        },
        "messageBody": {
            "description": "Email message body.",
            "type": "String"
        },
        "messageid": {
            "description": "Key identifying a string in the locale file to use for the message text.",
            "type": "String"
        },
        "messages": {
            "description": "Set of <code>message</code> objects, if any exist.",
            "type": "Array"
        },
        "meta": {
            "description": "Meta data, if any returned.",
            "type": "Object"
        },
        "metadataModificationDate": {
            "description": "The date that the last metadata attribute was changed.",
            "type": "String"
        },
        "method": {
            "description": "REST method call you specified.",
            "type": "String"
        },
        "middleName": {
            "description": "Middle name of the person. Single value.",
            "type": "String"
        },
        "middlePhonetic": {
            "description": "Phonetic middle name of the person. Single value.",
            "type": "String"
        },
        "min": {
            "description": "",
            "type": "Number"
        },
        "minAge": {
            "description": "Controls the frequency of location updates.",
            "type": "Number"
        },
        "minDate": {
            "description": "Minimum date displayed when a Date picker is in use.",
            "type": "Date"
        },
        "minRange": {
            "description": "Lower limit on the slider value that can be selected.",
            "type": "Number"
        },
        "minRowHeight": {
            "description": "Minimum row height for table view rows.",
            "type": "Number"
        },
        "minUpdateDistance": {
            "description": "Don't send a location update unless the location has changed at least <code>minUpdateDistance</code> \nmeters since the previous update.",
            "type": "Number"
        },
        "minUpdateTime": {
            "description": "Limits the frequency of location updates to no more than one per <code>minUpdateTime</code> seconds.",
            "type": "Number"
        },
        "minZoomScale": {
            "description": "Minimum scaling factor of the scrollable region and its content.",
            "type": "Number"
        },
        "minimumFontSize": {
            "description": "",
            "type": "Number"
        },
        "minuteInterval": {
            "description": "Interval in minutes displayed when one of the Time types of pickers is in use.",
            "type": "Number"
        },
        "modal": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "modalStyle": {
            "description": "Presentation style of this modal window.",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT",
                "Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET",
                "Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN",
                "Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET"
            ]
        },
        "modalTransitionStyle": {
            "description": "Transition style of this modal window.",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL",
                "Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE",
                "Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL",
                "Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL"
            ]
        },
        "mode": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.Stream.MODE_APPEND",
                "Ti.Stream.MODE_READ",
                "Ti.Stream.MODE_WRITE",
                "Ti.UI.iOS.BLEND_MODE_CLEAR",
                "Ti.UI.iOS.BLEND_MODE_COLOR",
                "Ti.UI.iOS.BLEND_MODE_COLOR_BURN",
                "Ti.UI.iOS.BLEND_MODE_COLOR_DODGE",
                "Ti.UI.iOS.BLEND_MODE_COPY",
                "Ti.UI.iOS.BLEND_MODE_DARKEN",
                "Ti.UI.iOS.BLEND_MODE_DESTINATION_ATOP",
                "Ti.UI.iOS.BLEND_MODE_DESTINATION_IN",
                "Ti.UI.iOS.BLEND_MODE_DESTINATION_OUT",
                "Ti.UI.iOS.BLEND_MODE_DESTINATION_OVER",
                "Ti.UI.iOS.BLEND_MODE_DIFFERENCE",
                "Ti.UI.iOS.BLEND_MODE_EXCLUSION",
                "Ti.UI.iOS.BLEND_MODE_HARD_LIGHT",
                "Ti.UI.iOS.BLEND_MODE_HUE",
                "Ti.UI.iOS.BLEND_MODE_LIGHTEN",
                "Ti.UI.iOS.BLEND_MODE_LUMINOSITY",
                "Ti.UI.iOS.BLEND_MODE_MULTIPLY",
                "Ti.UI.iOS.BLEND_MODE_NORMAL",
                "Ti.UI.iOS.BLEND_MODE_OVERLAY",
                "Ti.UI.iOS.BLEND_MODE_PLUS_DARKER",
                "Ti.UI.iOS.BLEND_MODE_PLUS_LIGHTER",
                "Ti.UI.iOS.BLEND_MODE_SATURATION",
                "Ti.UI.iOS.BLEND_MODE_SCREEN",
                "Ti.UI.iOS.BLEND_MODE_SOFT_LIGHT",
                "Ti.UI.iOS.BLEND_MODE_SOURCE_ATOP",
                "Ti.UI.iOS.BLEND_MODE_SOURCE_IN",
                "Ti.UI.iOS.BLEND_MODE_SOURCE_OUT",
                "Ti.UI.iOS.BLEND_MODE_XOR"
            ]
        },
        "moveable": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "movieControlMode": {
            "description": "Style of the media playback controls. <strong>Deprecated since 1.8.0. Use <a href=\"Titanium.Media.VideoPlayer.mediaControlStyle\">mediaControlStyle</a> instead.</strong>",
            "type": "Number"
        },
        "moving": {
            "description": "Determines whether row moving mode is active.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "musicalGenre": {
            "description": "The musical genre of the song/composition contained in the audio file.",
            "type": "String"
        },
        "musicalInstrumentCategory": {
            "description": "Metadata attribute that stores the category of instrument.",
            "type": "String"
        },
        "musicalInstrumentName": {
            "description": "Metadata attribute that stores the name of instrument.",
            "type": "String"
        },
        "name": {
            "description": "",
            "type": "String"
        },
        "naturalSize": {
            "description": "Returns the natural size of the movie.",
            "type": "MovieSize"
        },
        "navBarAtTop": {
            "description": "Specifies whether the navigation should be at the top of the screen or the bottom of the screen.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "navBarHidden": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "navTintColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "navigationMode": {
            "description": "Controls the navigation mode.",
            "type": "Number"
        },
        "needsSave": {
            "description": "Determines if iOS should fire the <code>useractivitywillsave</code> event for the application to update\nthe state or content of the user activity.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "nickname": {
            "description": "Nickname of the person. Single value.",
            "type": "String"
        },
        "nodeValue": {
            "description": "Content (value) of this node.",
            "type": "String"
        },
        "note": {
            "description": "Notes for the person. Single value.",
            "type": "String"
        },
        "notes": {
            "description": "Notes for this event.",
            "type": "String"
        },
        "number": {
            "description": "The number of events that this notification represents.",
            "type": "Number"
        },
        "occurrenceCount": {
            "description": "Occurrence count of the recurrence end, or 0 if the recurrence end is date-based.",
            "type": "Number"
        },
        "offset": {
            "description": "",
            "type": "Number"
        },
        "ok": {
            "description": "Text for the <code>OK</code> button.",
            "type": "String"
        },
        "okid": {
            "description": "Key identifying a string in the locale file to use for the <code>ok</code> text.",
            "type": "String"
        },
        "onCreate": {
            "description": "Callback function called when the Android activity is created.",
            "type": "Function"
        },
        "onCreateOptionsMenu": {
            "description": "Callback function called to initially create an Android options menu\nfor this Activity when the user presses the <strong>Menu</strong> button.",
            "type": "Function"
        },
        "onCreateWindow": {
            "description": "Callback function called when there is a request for the application to create a new window\nto host new content.",
            "type": "Function"
        },
        "onDestroy": {
            "description": "Callback function called when the Android activity is destroyed.",
            "type": "Function"
        },
        "onHomeIconItemSelected": {
            "description": "Callback function called when the home icon is clicked.",
            "type": "Function"
        },
        "onPause": {
            "description": "Callback function called when the Android activity is paused.",
            "type": "Function"
        },
        "onPrepareOptionsMenu": {
            "description": "Callback function called to prepare an options menu for display when the user presses\nthe <strong>Menu</strong> button. ",
            "type": "Function"
        },
        "onReceived": {
            "description": "The function called when a broadcast is received.",
            "type": "Function"
        },
        "onRestart": {
            "description": "Callback function called when the Android activity is restarted.",
            "type": "Function"
        },
        "onResume": {
            "description": "Callback function called when the Android activity is resumed.",
            "type": "Function"
        },
        "onStart": {
            "description": "Callback function called when the Android activity is started.",
            "type": "Function"
        },
        "onStop": {
            "description": "Callback function called when the Android activity is stopped.",
            "type": "Function"
        },
        "onTintColor": {
            "description": "The color used to tint the appearance of the switch when it is turned on.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "ondatastream": {
            "description": "Function to be called at regular intervals as the request data is being received.",
            "type": "Function"
        },
        "onerror": {
            "description": "Function to be called upon a error response.",
            "type": "Function"
        },
        "onload": {
            "description": "Function to be called upon a successful response.",
            "type": "Function"
        },
        "onreadystatechange": {
            "description": "Function to be called for each <a href=\"Titanium.Network.HTTPClient.readyState\">readyState</a> change.",
            "type": "Function"
        },
        "onsendstream": {
            "description": "Function to be called at regular intervals as the request data is being transmitted.",
            "type": "Function"
        },
        "opacity": {
            "description": "",
            "type": "Number"
        },
        "opaque": {
            "description": "Value of the <code>opaque</code> property at the end of the animation.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "opaquebackground": {
            "description": "Boolean value indicating if the option dialog should have an opaque background.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "options": {
            "description": "List of option names to display in the dialog.",
            "type": "Array"
        },
        "organization": {
            "description": "Organization to which the person belongs. Single value.",
            "type": "String"
        },
        "organizations": {
            "description": "Used to indicate company/Organization that created the document.",
            "type": "Array"
        },
        "orientation": {
            "description": "Updates the orientation of the current window to the specified orientation value. <strong>Removed in 3.0.0. Use <a href=\"Titanium.UI.Window.orientationModes\">orientationModes</a> instead.</strong>",
            "type": "Number"
        },
        "orientationModes": {
            "description": "Array of supported orientation modes, specified using the orientation\nconstants defined in <a href=\"Titanium.UI\">UI</a>.",
            "type": "Array",
            "values": [
                "Ti.UI.LANDSCAPE_LEFT",
                "Ti.UI.LANDSCAPE_RIGHT",
                "Ti.UI.PORTRAIT",
                "Ti.UI.UPSIDE_PORTRAIT",
                "Ti.UI.LANDSCAPE_LEFT",
                "Ti.UI.LANDSCAPE_RIGHT",
                "Ti.UI.PORTRAIT",
                "Ti.UI.UPSIDE_PORTRAIT"
            ]
        },
        "originalFormat": {
            "description": "Original format of the movie.",
            "type": "String"
        },
        "originalSource": {
            "description": "Original source of the movie.",
            "type": "String"
        },
        "originalUrl": {
            "description": "The origual url attribute of the cookie.",
            "type": "String"
        },
        "outputs": {
            "description": "An Array of current output ports for the session. See the <code>AUDIO_SESSION_PORT</code> constants.",
            "type": "Array"
        },
        "overScrollMode": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.Android.OVER_SCROLL_ALWAYS",
                "Ti.UI.Android.OVER_SCROLL_IF_CONTENT_SCROLLS",
                "Ti.UI.Android.OVER_SCROLL_NEVER",
                "Ti.UI.Android.OVER_SCROLL_ALWAYS",
                "Ti.UI.Android.OVER_SCROLL_IF_CONTENT_SCROLLS",
                "Ti.UI.Android.OVER_SCROLL_NEVER"
            ]
        },
        "overlay": {
            "description": "View to added as an overlay to the camera UI (on top).",
            "type": "Titanium.UI.View"
        },
        "overlayEnabled": {
            "description": "Determines whether the paging control is added as an overlay to the view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "overrideCurrentAnimation": {
            "description": "When on, animate call overrides current animation if applicable.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "packageName": {
            "description": "",
            "type": "String"
        },
        "paddingLeft": {
            "description": "Left padding of this text field.",
            "type": "Number"
        },
        "paddingRight": {
            "description": "Right padding of this text field.",
            "type": "Number"
        },
        "pageCount": {
            "description": "Number of pages in the item.",
            "type": "Number"
        },
        "pageHeight": {
            "description": "Height in points (72 points per inch) of the document page.",
            "type": "Number"
        },
        "pageWidth": {
            "description": "Width in points (72 points per inch) of the document page.",
            "type": "Number"
        },
        "pagingControlAlpha": {
            "description": "Alpha value of the paging control.",
            "type": "Number"
        },
        "pagingControlColor": {
            "description": "Color of the paging control, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "pagingControlHeight": {
            "description": "Height of the paging control, in pixels.",
            "type": "Number"
        },
        "pagingControlOnTop": {
            "description": "Determines whether the paging control is displayed at the top or bottom of the view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "pagingControlTimeout": {
            "description": "Number of milliseconds to wait before hiding the paging control.",
            "type": "Number"
        },
        "participants": {
            "description": "The list of people who are visible in an image or movie or written about in a document.",
            "type": "Array"
        },
        "passthroughViews": {
            "description": "Passthrough views to use when the popover is shown.",
            "type": "Array"
        },
        "password": {
            "description": "Sets the password parameter for authentication credentials.",
            "type": "String"
        },
        "passwordKeyboardType": {
            "description": "Keyboard type to display when this text field inside the dialog is focused.",
            "type": "Number",
            "values": [
                "Ti.UI.KEYBOARD_APPEARANCE_ALERT",
                "Ti.UI.KEYBOARD_APPEARANCE_DEFAULT",
                "Ti.UI.KEYBOARD_ASCII",
                "Ti.UI.KEYBOARD_DECIMAL_PAD",
                "Ti.UI.KEYBOARD_DEFAULT",
                "Ti.UI.KEYBOARD_EMAIL",
                "Ti.UI.KEYBOARD_NAMEPHONE_PAD",
                "Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION",
                "Ti.UI.KEYBOARD_NUMBER_PAD",
                "Ti.UI.KEYBOARD_PHONE_PAD",
                "Ti.UI.KEYBOARD_URL"
            ]
        },
        "passwordMask": {
            "description": "Obscure the input text from the user.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "passwordPlaceholder": {
            "description": "Placeholder of the password text field inside the dialog.",
            "type": "String"
        },
        "passwordReturnKeyType": {
            "description": "Specifies the text to display on the keyboard <code>Return</code> key when this field is focused.",
            "type": "Number",
            "values": [
                "Ti.UI.RETURNKEY_DEFAULT",
                "Ti.UI.RETURNKEY_DONE",
                "Ti.UI.RETURNKEY_EMERGENCY_CALL",
                "Ti.UI.RETURNKEY_GO",
                "Ti.UI.RETURNKEY_GOOGLE",
                "Ti.UI.RETURNKEY_JOIN",
                "Ti.UI.RETURNKEY_NEXT",
                "Ti.UI.RETURNKEY_ROUTE",
                "Ti.UI.RETURNKEY_SEARCH",
                "Ti.UI.RETURNKEY_SEND",
                "Ti.UI.RETURNKEY_YAHOO"
            ]
        },
        "path": {
            "description": "",
            "type": "String"
        },
        "pauseLocationUpdateAutomatically": {
            "description": "Indicates whether the location updates may be paused. Available in iOS 6.0 and later.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "paused": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "performers": {
            "description": "Performers in the movie.",
            "type": "Array"
        },
        "permission": {
            "description": "Dictionary of permissions.",
            "type": "Object"
        },
        "persistent": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "phone": {
            "description": "Phone numbers for the person. Multi-value. Read-only on Android.",
            "type": "Object"
        },
        "photos": {
            "description": "Set of <code>photos</code> objects, if any exist.",
            "type": "Array"
        },
        "placeholder": {
            "description": "Placeholder of the text field inside the dialog.",
            "type": "String"
        },
        "places": {
            "description": "",
            "type": "Array"
        },
        "playCount": {
            "description": "User play count of this item.",
            "type": "Number"
        },
        "pluginState": {
            "description": "Determines how to treat content that requires plugins in this web view.",
            "type": "Number",
            "values": [
                "Ti.UI.Android.WEBVIEW_PLUGINS_OFF",
                "Ti.UI.Android.WEBVIEW_PLUGINS_ON",
                "Ti.UI.Android.WEBVIEW_PLUGINS_ON_DEMAND"
            ]
        },
        "point1": {
            "description": "Start point for the boundary",
            "type": "Point"
        },
        "point2": {
            "description": "End point for the boundary",
            "type": "Point"
        },
        "points": {
            "description": "Array of map points making up the route.",
            "type": "Array"
        },
        "popoverView": {
            "description": "",
            "type": "Titanium.UI.View"
        },
        "port": {
            "description": "",
            "type": "Number"
        },
        "portraitSplit": {
            "description": "Determines the width of the <code>masterView</code> in portrait mode.",
            "type": "Number"
        },
        "position": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.ListViewScrollPosition.BOTTOM",
                "Ti.UI.iPhone.ListViewScrollPosition.MIDDLE",
                "Ti.UI.iPhone.ListViewScrollPosition.NONE",
                "Ti.UI.iPhone.ListViewScrollPosition.TOP",
                "Ti.UI.iPhone.TableViewScrollPosition.BOTTOM",
                "Ti.UI.iPhone.TableViewScrollPosition.MIDDLE",
                "Ti.UI.iPhone.TableViewScrollPosition.NONE",
                "Ti.UI.iPhone.TableViewScrollPosition.TOP"
            ]
        },
        "postalCode": {
            "description": "",
            "type": "String"
        },
        "posts": {
            "description": "Set of <code>posts</code> objects, if any exist.",
            "type": "Array"
        },
        "power": {
            "description": "Power consumption for this provider, either low (1), medium (2), or high (3).",
            "type": "Number"
        },
        "preferredProvider": {
            "description": "Determines the preferred location provider.\n <strong>Deprecated since 2.0.0. Android legacy mode operation is deprecated. For new development, use\neither simple mode or manual mode. See \"Configurating Location Updates on Android\"\nin the main description of this class for more information.</strong>",
            "type": "String",
            "values": [
                "Ti.Geolocation.PROVIDER_GPS",
                "Ti.Geolocation.PROVIDER_NETWORK",
                "Ti.Geolocation.PROVIDER_PASSIVE"
            ]
        },
        "prefix": {
            "description": "Namespace prefix of this node.",
            "type": "String"
        },
        "preventDefaultImage": {
            "description": "Prevent the default image from being displayed while loading a remote image. This property \nis ignored when the <code>defaultImage</code> property is set.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "preview": {
            "description": "The preview view.",
            "type": "Titanium.UI.View"
        },
        "previewContext": {
            "description": "The preview context used in the 3D-Touch feature \"Peek and Pop\".",
            "type": "Titanium.UI.View"
        },
        "priority": {
            "description": "Sets the priority of the notification.",
            "type": "Number",
            "values": [
                "Ti.Android.PRIORITY_MAX",
                "Ti.Android.PRIORITY_HIGH",
                "Ti.Android.PRIORITY_DEFAULT",
                "Ti.Android.PRIORITY_LOW",
                "Ti.Android.PRIORITY_MIN"
            ]
        },
        "producer": {
            "description": "Producer of the content.",
            "type": "String"
        },
        "progress": {
            "description": "A value from 0.0-1.0 with the progress of the exchange.",
            "type": "Number"
        },
        "projects": {
            "description": "The list of projects that this item is part of.",
            "type": "Array"
        },
        "prompt": {
            "description": "Single line of text displayed at the top of the search bar.",
            "type": "String"
        },
        "promptid": {
            "description": "Key identifying a string from the locale file to use for the\n<a href=\"Titanium.UI.SearchBar.prompt\">prompt</a> property.",
            "type": "String"
        },
        "properties": {
            "description": "",
            "type": "Titanium.UI.ListItem"
        },
        "provider": {
            "description": "If <code>success</code> is true, object describing the location provider generating this update.",
            "type": "LocationProviderDict"
        },
        "proximityDetection": {
            "description": "Determines whether proximity detection is enabled.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "pruneSectionsOnEdit": {
            "description": "Determines if empty sections are retained when the user completes editing the list view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "publishers": {
            "description": "Used to designate the entity responsible for making the resource available.",
            "type": "Array"
        },
        "pullBackgroundColor": {
            "description": "Background color of the wrapper view when this view is used as either <a href=\"Titanium.UI.ListView.pullView\">pullView</a> or <a href=\"Titanium.UI.TableView.headerPullView\">headerPullView</a>.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "pullView": {
            "description": "View positioned above the first row that is only revealed when the user drags the list view contents down.",
            "type": "Titanium.UI.View"
        },
        "purpose": {
            "description": "Text to display in the permission dialog when requesting location\nservices.",
            "type": "String"
        },
        "pushDirection": {
            "description": "Specifies the direction of the force vector as an x, y pair.",
            "type": "Point"
        },
        "pushMode": {
            "description": "Specifies the push mode.",
            "type": "Number",
            "values": [
                "Ti.UI.iOS.PUSH_MODE_CONTINUOUS",
                "Ti.UI.iOS.PUSH_MODE_INSTANTANEOUS"
            ]
        },
        "push_channels": {
            "description": "Array of <code>push_channel</code> names, if any exist.",
            "type": "Array"
        },
        "push_schedules": {
            "description": "Array of <a href=\"http://docs.appcelerator.com/arrowdb/latest/#!/api/PushSchedules\">schedules push notifications</a>, if any exist.",
            "type": "Array"
        },
        "range": {
            "description": "Attribute range.",
            "type": "Array"
        },
        "rating": {
            "description": "User rating of this item out of 5 stars.",
            "type": "Number"
        },
        "ratingDescription": {
            "description": "A description of the rating, for example, the number of reviewers.",
            "type": "String"
        },
        "readyState": {
            "description": "The state for which <code>onreadystatechange</code> was invoked. Set to one of <code>Titanium.Network.HTTPClient</code> ready-state constants",
            "type": "Number"
        },
        "recordId": {
            "description": "",
            "type": "Number"
        },
        "recordingDate": {
            "description": "The recording date of the song/composition.",
            "type": "String"
        },
        "rect": {
            "description": "",
            "type": "Dimension"
        },
        "recurrenceRule": {
            "description": "Recurrence rule associated with the event. (Available in iOS 4.0 through iOS 5.1.) <strong>Removed in 3.2.0.</strong>",
            "type": "Titanium.Calendar.RecurrenceRule"
        },
        "recurrenceRules": {
            "description": "The recurrence rules for the calendar item. (Available in iOS 5.1 and above.)",
            "type": "Array"
        },
        "referenceInsets": {
            "description": "Insets to apply when using the animator's reference view as the boundary.",
            "type": "ReferenceInsets"
        },
        "referenceView": {
            "description": "Titanium View object to initialize as the reference view for the animator.",
            "type": "Titanium.UI.View"
        },
        "refreshControl": {
            "description": "View positioned above the first row that is only revealed when the user drags the list view contents down.",
            "type": "Titanium.UI.RefreshControl"
        },
        "region1": {
            "description": "First line of region.",
            "type": "String"
        },
        "region2": {
            "description": "Not used.",
            "type": "String"
        },
        "regionFit": {
            "description": "If <code>true</code>, the specified region is modified to fit the aspect ratio of the\nmap view, while remaining centered on <code>latitude</code>,<code>longitude</code>.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "relatedNames": {
            "description": "Names of people to which the person is related. Multi-value.",
            "type": "Object"
        },
        "relatedUniqueIdentifier": {
            "description": "For activities this is the unique identifier for the item this activity is related to.",
            "type": "String"
        },
        "relativeOffset": {
            "description": "The offset from the start of an event, at which the alarm fires.",
            "type": "Number"
        },
        "remoteBackup": {
            "description": "Value indicating whether or not to back up to a cloud service.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "repeat": {
            "description": "",
            "type": "String"
        },
        "repeatCount": {
            "description": "Number of times to repeat the image animation.",
            "type": "Number"
        },
        "repeatMode": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.Media.MUSIC_PLAYER_REPEAT_ALL",
                "Ti.Media.MUSIC_PLAYER_REPEAT_DEFAULT",
                "Ti.Media.MUSIC_PLAYER_REPEAT_NONE",
                "Ti.Media.MUSIC_PLAYER_REPEAT_ONE",
                "Ti.Media.VIDEO_REPEAT_MODE_NONE",
                "Ti.Media.VIDEO_REPEAT_MODE_ONE"
            ]
        },
        "representative": {
            "description": "A single representative of the selected items.",
            "type": "Titanium.Media.Item"
        },
        "requestCode": {
            "description": "Unique, automatically generated integer request code.",
            "type": "Number"
        },
        "requestedOrientation": {
            "description": "Specifies a specific orientation for this activity.",
            "type": "Number",
            "values": [
                "Ti.Android.SCREEN_ORIENTATION_BEHIND",
                "Ti.Android.SCREEN_ORIENTATION_LANDSCAPE",
                "Ti.Android.SCREEN_ORIENTATION_NOSENSOR",
                "Ti.Android.SCREEN_ORIENTATION_PORTRAIT",
                "Ti.Android.SCREEN_ORIENTATION_SENSOR",
                "Ti.Android.SCREEN_ORIENTATION_UNSPECIFIED",
                "Ti.Android.SCREEN_ORIENTATION_USER"
            ]
        },
        "requiredUserInfoKeys": {
            "description": "An array of String keys from the userInfo property which represent the minimal information about the user activity that should be stored for later restoration.",
            "type": "Array"
        },
        "resistance": {
            "description": "Specifies the linear resistance of this item which reduces linear velocity over time.",
            "type": "Number"
        },
        "result": {
            "description": "",
            "type": "String"
        },
        "resultCode": {
            "description": "Integer result code that the started activity passed to\n<a href=\"Titanium.Android.Activity.setResult\">setResult</a>.",
            "type": "Number"
        },
        "returnKeyType": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.RETURNKEY_DEFAULT",
                "Ti.UI.RETURNKEY_DONE",
                "Ti.UI.RETURNKEY_EMERGENCY_CALL",
                "Ti.UI.RETURNKEY_GO",
                "Ti.UI.RETURNKEY_GOOGLE",
                "Ti.UI.RETURNKEY_JOIN",
                "Ti.UI.RETURNKEY_NEXT",
                "Ti.UI.RETURNKEY_ROUTE",
                "Ti.UI.RETURNKEY_SEARCH",
                "Ti.UI.RETURNKEY_SEND",
                "Ti.UI.RETURNKEY_YAHOO",
                "Ti.UI.RETURNKEY_DEFAULT",
                "Ti.UI.RETURNKEY_DONE",
                "Ti.UI.RETURNKEY_EMERGENCY_CALL",
                "Ti.UI.RETURNKEY_GO",
                "Ti.UI.RETURNKEY_GOOGLE",
                "Ti.UI.RETURNKEY_JOIN",
                "Ti.UI.RETURNKEY_NEXT",
                "Ti.UI.RETURNKEY_ROUTE",
                "Ti.UI.RETURNKEY_SEARCH",
                "Ti.UI.RETURNKEY_SEND",
                "Ti.UI.RETURNKEY_YAHOO"
            ]
        },
        "reverse": {
            "description": "Run the animation in reverse.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "reverseGeocoderTimeout": {
            "description": "The time within which reverse geocoder requests must succeed, in milliseconds.",
            "type": "Number"
        },
        "reviews": {
            "description": "Set of <code>reviews</code> objects, if any exist.",
            "type": "Array"
        },
        "right": {
            "description": "",
            "type": "Number"
        },
        "rightButton": {
            "description": "Right button view.",
            "type": "Object"
        },
        "rightButtonMode": {
            "description": "Determines when to display the right button view.",
            "type": "Number",
            "values": [
                "Ti.UI.INPUT_BUTTONMODE_ALWAYS",
                "Ti.UI.INPUT_BUTTONMODE_NEVER",
                "Ti.UI.INPUT_BUTTONMODE_ONBLUR",
                "Ti.UI.INPUT_BUTTONMODE_ONFOCUS"
            ]
        },
        "rightButtonPadding": {
            "description": "Padding between the right button and the edge of the field.",
            "type": "Number"
        },
        "rightImage": {
            "description": "Image to render in the right image area of the row, specified as a local path or URL.",
            "type": "String"
        },
        "rightNavButton": {
            "description": "",
            "type": "Titanium.UI.View"
        },
        "rightNavButtons": {
            "description": "An Array of views to show in the right nav bar area.",
            "type": "Array"
        },
        "rightTrackImage": {
            "description": "Image URL of the slider right track.",
            "type": "String"
        },
        "rightTrackLeftCap": {
            "description": "Size of the left end cap for the rightTrackImage, disabledRightTrackImage, highlightedRightTrackImage and selectedRightTrackImage properties.",
            "type": "Number"
        },
        "rightTrackTopCap": {
            "description": "Size of the top end cap for the rightTrackImage, disabledRightTrackImage, highlightedRightTrackImage and selectedRightTrackImage properties.",
            "type": "Number"
        },
        "rights": {
            "description": "Used to provide a link to information about rights held in and over resource.",
            "type": "Array"
        },
        "role": {
            "description": "Used to indicate the role of the document creator.",
            "type": "String"
        },
        "rotate": {
            "description": "Rotation angle, in degrees. See the <a href=\"Titanium.UI.2DMatrix.rotate\">rotate</a> method\nfor a discussion of rotation.",
            "type": "Number"
        },
        "rowCount": {
            "description": "The number of rows of items in the view.",
            "type": "Number"
        },
        "rowHeight": {
            "description": "Default row height for table view rows.",
            "type": "Number"
        },
        "rowsAffected": {
            "description": "The number of rows affected by the last query.",
            "type": "Number"
        },
        "saveToPhotoGallery": {
            "description": "Specifies if the media should be saved to the photo gallery upon successful capture.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "scale": {
            "description": "Scale the matrix by the specified scaling factor. The same scaling factor is used\nfor both horizontal and vertical scaling.",
            "type": "Number"
        },
        "scalesPageToFit": {
            "description": "If <code>true</code>, scale contents to fit the web view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "scalingMode": {
            "description": "Determines how the content scales to fit the view.",
            "type": "Number",
            "values": [
                "Ti.Media.VIDEO_SCALING_ASPECT_FILL",
                "Ti.Media.VIDEO_SCALING_ASPECT_FIT",
                "Ti.Media.VIDEO_SCALING_MODE_FILL",
                "Ti.Media.VIDEO_SCALING_NONE"
            ]
        },
        "scrollIndicatorStyle": {
            "description": "Style of the scrollbar.",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.ScrollIndicatorStyle.BLACK",
                "Ti.UI.iPhone.ScrollIndicatorStyle.DEFAULT",
                "Ti.UI.iPhone.ScrollIndicatorStyle.WHITE",
                "Ti.UI.iPhone.ScrollIndicatorStyle.BLACK",
                "Ti.UI.iPhone.ScrollIndicatorStyle.DEFAULT",
                "Ti.UI.iPhone.ScrollIndicatorStyle.WHITE"
            ]
        },
        "scrollType": {
            "description": "Limits the direction of the scrollable region, overriding the deduced setting. Set to \n<code>horizontal</code> or <code>vertical</code>.",
            "type": "String"
        },
        "scrollable": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "scrollingEnabled": {
            "description": "Determines whether scrolling is enabled for the view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "scrollsToTop": {
            "description": "Controls whether the scroll-to-top gesture is effective.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "search": {
            "description": "Search field to use for the table view.",
            "type": "Titanium.UI.SearchBar"
        },
        "searchAsChild": {
            "description": "Determines whether the <a href=\"Titanium.UI.SearchBar\">SearchBar</a> or <a href=\"Titanium.UI.Android.SearchView\">SearchView</a> appears as part of the TableView.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "searchHidden": {
            "description": "Determines whether the search field is visible.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "searchText": {
            "description": "The string to use as the search parameter.",
            "type": "String"
        },
        "searchView": {
            "description": "Search field to use for the list view.",
            "type": "Titanium.UI.SearchBar"
        },
        "searchableText": {
            "description": "The text to match against when the <a href=\"Titanium.UI.ListView\">ListView</a> is performing a search.",
            "type": "String"
        },
        "sectionIndex": {
            "description": "The sectionIndex of the reference item.",
            "type": "Number"
        },
        "sectionIndexTitles": {
            "description": "Array of objects (with <code>title</code> and <code>index</code> properties) to control the list view index.",
            "type": "Array"
        },
        "sections": {
            "description": "",
            "type": "Array"
        },
        "secure": {
            "description": "The secure attribute of the cookie.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "securityManager": {
            "description": "The Security Manager for this client.",
            "type": "SecurityManagerProtocol"
        },
        "securityMethod": {
            "description": "Security (encryption) method used in the file.",
            "type": "String"
        },
        "selected": {
            "description": "Index to make selected.",
            "type": "Number"
        },
        "selectedBackgroundColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "selectedBackgroundGradient": {
            "description": "Background gradient to render when the item is selected.",
            "type": "Gradient"
        },
        "selectedBackgroundImage": {
            "description": "",
            "type": "String"
        },
        "selectedColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "selectedImage": {
            "description": "Image or path to image to display in the item as it is selected.",
            "type": "String"
        },
        "selectedIndex": {
            "description": "Defines the default selected option.",
            "type": "Number"
        },
        "selectedLeftTrackImage": {
            "description": "Image URL of the slider left track when in the selected state.",
            "type": "String"
        },
        "selectedPerson": {
            "description": "Function to call when a person is selected. Must not be used with <code>selectedProperty</code> property.",
            "type": "Function"
        },
        "selectedProperty": {
            "description": "Function to call when a property is selected. Must not be used with <code>selectedPerson</code> \nproperty.\nNote: If ringtone or texttone is selected, null values are returned, since these are unsupported\nby Apple.",
            "type": "Function"
        },
        "selectedRightTrackImage": {
            "description": "Image URL of the slider right track when in the selected state.",
            "type": "String"
        },
        "selectedRow": {
            "description": "The selected row in this column.",
            "type": "Titanium.UI.PickerRow"
        },
        "selectedThumbImage": {
            "description": "Image URL of the slider thumb when in the selected state.",
            "type": "String"
        },
        "selectionIndicator": {
            "description": "Determines whether the visual selection indicator is shown.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "selectionOpens": {
            "description": "Determines whether calling the method <code>setSelectedRow</code> opens when called",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "selectionStyle": {
            "description": "Selection style constant to control the selection color.",
            "type": "Number"
        },
        "separatorColor": {
            "description": "Separator line color between rows, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "separatorHeight": {
            "description": "height of the ListView separator.",
            "type": "String"
        },
        "separatorInsets": {
            "description": "",
            "type": "Object"
        },
        "separatorStyle": {
            "description": "Separator style constant.",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.ListViewSeparatorStyle.NONE",
                "Ti.UI.iPhone.ListViewSeparatorStyle.SINGLE_LINE"
            ]
        },
        "serviceType": {
            "description": "The type of the service the browser searches for",
            "type": "String"
        },
        "sessionId": {
            "description": "Identifies the current session",
            "type": "String"
        },
        "shadow": {
            "description": "Shadow color and offset for the window title.",
            "type": "shadowDict"
        },
        "shadowColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "shadowImage": {
            "description": "",
            "type": "String"
        },
        "shadowOffset": {
            "description": "",
            "type": "Object"
        },
        "shadowRadius": {
            "description": "",
            "type": "Number"
        },
        "showAppOnTrayClick": {
            "description": "Whether or not clicking the tray notification will bring your application to the foreground.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showAsAction": {
            "description": "A set of flags that controls how this item appears in the action bar.",
            "type": "Number",
            "values": [
                "Ti.Android.SHOW_AS_ACTION_ALWAYS",
                "Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW",
                "Ti.Android.SHOW_AS_ACTION_IF_ROOM",
                "Ti.Android.SHOW_AS_ACTION_NEVER",
                "Ti.Android.SHOW_AS_ACTION_WITH_TEXT"
            ]
        },
        "showBookmark": {
            "description": "Determines whether the bookmark button is displayed.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showCalibration": {
            "description": "Determines whether the compass calibration UI is shown if needed.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showCancel": {
            "description": "Determines whether the cancel button is displayed.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showControls": {
            "description": "Indicates if the built-in camera controls should be displayed.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showHorizontalScrollIndicator": {
            "description": "Determines whether the horizontal scroll indicator is visible.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showMasterInPortrait": {
            "description": "Determines whether to show the master view in portrait orientation.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showPagingControl": {
            "description": "Determines whether the paging control is visible.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showScrollbars": {
            "description": "If <code>true</code>, scrollbars are displayed if content is larger than the web view.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showTrayNotification": {
            "description": "Whether or not to show a tray notification when a new push is received.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showTrayNotificationsWhenFocused": {
            "description": "Whether or not to show tray notifications when your application is in the foreground.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showUndoRedoActions": {
            "description": "Determinates if the undo and redo buttons on the left side of the keyboard should be displayed or not. Only valid on iOS9 and above.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "showVerticalScrollIndicator": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "shuffleMode": {
            "description": "Shuffle setting.",
            "type": "Number",
            "values": [
                "Ti.Media.MUSIC_PLAYER_SHUFFLE_ALBUMS",
                "Ti.Media.MUSIC_PLAYER_SHUFFLE_DEFAULT",
                "Ti.Media.MUSIC_PLAYER_SHUFFLE_NONE",
                "Ti.Media.MUSIC_PLAYER_SHUFFLE_SONGS"
            ]
        },
        "singleCallback": {
            "description": "Set to true to trigger a single callback for the selected push notification when multiple push notifications are displayed in the tray.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "smoothScrollOnTabClick": {
            "description": "Boolean value indicating if changing pages by tab clicks is animated.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "snapPoint": {
            "description": "Specifies the point to snap to.",
            "type": "Point"
        },
        "socialProfile": {
            "description": "Social profile information of the person. Multi-value.",
            "type": "Object"
        },
        "socket": {
            "description": "",
            "type": "Object"
        },
        "softKeyboardOnFocus": {
            "description": "Determines keyboard behavior when this view is focused.",
            "type": "Number",
            "values": [
                "Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS",
                "Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS",
                "Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS",
                "Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS",
                "Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS",
                "Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS"
            ]
        },
        "sound": {
            "description": "",
            "type": "String"
        },
        "source": {
            "description": "",
            "type": "String"
        },
        "sourceLength": {
            "description": "Number of characters in <code>source</code> to encode.",
            "type": "Number"
        },
        "sourcePosition": {
            "description": "Position in <code>source</code> to start encoding.",
            "type": "Number"
        },
        "sourceType": {
            "description": "The playback type of the movie.",
            "type": "Number",
            "values": [
                "Ti.Media.VIDEO_SOURCE_TYPE_FILE",
                "Ti.Media.VIDEO_SOURCE_TYPE_STREAMING",
                "Ti.Media.VIDEO_SOURCE_TYPE_UNKNOWN"
            ]
        },
        "speed": {
            "description": "Current speed in meters/second. On iOS, a negative value indicates that the \nheading data is not valid.",
            "type": "Number"
        },
        "splitActionBar": {
            "description": "Boolean value to enable split action bar.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "startMode": {
            "description": "One of the <code>START_</code> constants from <a href=\"Titanium.Android\">Android</a> to specify the \"stickiness\" of the Service when Android shuts down the host application.",
            "type": "Number",
            "values": [
                "Ti.Android.START_NOT_STICKY",
                "Ti.Android.START_REDELIVER_INTENT"
            ]
        },
        "startPoint": {
            "description": "Start point for the gradient.",
            "type": "Point"
        },
        "startRadius": {
            "description": "For a radial gradient, the radius at the <code>startPoint</code>.",
            "type": "Number"
        },
        "started": {
            "description": "",
            "type": "String"
        },
        "statusBarStyle": {
            "description": "The status bar style associated with this window.",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.StatusBar.DEFAULT",
                "Ti.UI.iPhone.StatusBar.GRAY",
                "Ti.UI.iPhone.StatusBar.GREY",
                "Ti.UI.iPhone.StatusBar.LIGHT_CONTENT",
                "Ti.UI.iPhone.StatusBar.OPAQUE_BLACK",
                "Ti.UI.iPhone.StatusBar.TRANSLUCENT_BLACK",
                "Ti.UI.iPhone.StatusBar.DEFAULT",
                "Ti.UI.iPhone.StatusBar.GRAY",
                "Ti.UI.iPhone.StatusBar.GREY",
                "Ti.UI.iPhone.StatusBar.LIGHT_CONTENT",
                "Ti.UI.iPhone.StatusBar.OPAQUE_BLACK",
                "Ti.UI.iPhone.StatusBar.TRANSLUCENT_BLACK"
            ]
        },
        "statuses": {
            "description": "Set of <code>statuses</code> objects, if any exist.",
            "type": "Array"
        },
        "streamable": {
            "description": "Whether the content is prepared for streaming.  Set to <code>0</code> for not streamable and <code>1</code> for streamable.",
            "type": "Number"
        },
        "street": {
            "description": "Street name, without street address.",
            "type": "String"
        },
        "street1": {
            "description": "Street name.",
            "type": "String"
        },
        "style": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.ActivityIndicatorStyle.BIG",
                "Ti.UI.ActivityIndicatorStyle.BIG_DARK",
                "Ti.UI.ActivityIndicatorStyle.DARK",
                "Ti.UI.ActivityIndicatorStyle.PLAIN",
                "Ti.UI.iPhone.SystemButtonStyle.BAR",
                "Ti.UI.iPhone.SystemButtonStyle.BORDERED",
                "Ti.UI.iPhone.SystemButtonStyle.DONE",
                "Ti.UI.iPhone.SystemButtonStyle.PLAIN",
                "Ti.UI.iPhone.ListViewStyle.GROUPED",
                "Ti.UI.iPhone.ListViewStyle.PLAIN",
                "Ti.UI.Android.SWITCH_STYLE_CHECKBOX",
                "Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON",
                "Ti.UI.Android.SWITCH_STYLE_SWITCH",
                "Ti.UI.iPhone.TableViewStyle.GROUPED",
                "Ti.UI.iPhone.TableViewStyle.PLAIN",
                "Ti.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT",
                "Ti.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED",
                "Ti.UI.iOS.PREVIEW_ACTION_STYLE_DESTRUCTIVE",
                "Ti.UI.iPhone.SystemButtonStyle.BAR",
                "Ti.UI.iPhone.SystemButtonStyle.BORDERED",
                "Ti.UI.iPhone.SystemButtonStyle.DONE",
                "Ti.UI.iPhone.SystemButtonStyle.PLAIN"
            ]
        },
        "subject": {
            "description": "",
            "type": "String"
        },
        "submitEnabled": {
            "description": "Whether to display the submit button when necessary or never display.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "subscriptions": {
            "description": "Set of <code>subscription</code> objects, if any exist.",
            "type": "Array"
        },
        "subtitle": {
            "description": "",
            "type": "String"
        },
        "success": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "suiteName": {
            "description": "Sets the name of the suite to be used to access UserDefaults.",
            "type": "String"
        },
        "supported": {
            "description": "Determines if user activities are supported (<code>true</code>) or not (<code>false</code>) by the device. <strong>Deprecated since 5.1.0. Use the <a href=\"Titanium.App.iOS.UserActivity.isSupported\">Ti.App.iOS.UserActivity.isSupported()</a> method instead.</strong>",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "supportsNavigation": {
            "description": "Used to determine if navigation is supported.",
            "type": "Number"
        },
        "supportsPhoneCall": {
            "description": "Used to indicate that using the phone number is appropriate.",
            "type": "Number"
        },
        "suppressReturn": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "swipeable": {
            "description": "Boolean value indicating if tab navigation can be done by swipes, in addition to tab clicks.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "systemButton": {
            "description": "Specifies an iOS system button appearance, as defined in <a href=\"Titanium.UI.iPhone.SystemButton\">SystemButton</a>.",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.SystemButton.ACTION",
                "Ti.UI.iPhone.SystemButton.ACTIVITY",
                "Ti.UI.iPhone.SystemButton.ADD",
                "Ti.UI.iPhone.SystemButton.BOOKMARKS",
                "Ti.UI.iPhone.SystemButton.CAMERA",
                "Ti.UI.iPhone.SystemButton.CANCEL",
                "Ti.UI.iPhone.SystemButton.COMPOSE",
                "Ti.UI.iPhone.SystemButton.CONTACT_ADD",
                "Ti.UI.iPhone.SystemButton.DISCLOSURE",
                "Ti.UI.iPhone.SystemButton.DONE",
                "Ti.UI.iPhone.SystemButton.EDIT",
                "Ti.UI.iPhone.SystemButton.FAST_FORWARD",
                "Ti.UI.iPhone.SystemButton.FIXED_SPACE",
                "Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE",
                "Ti.UI.iPhone.SystemButton.INFO_DARK",
                "Ti.UI.iPhone.SystemButton.INFO_LIGHT",
                "Ti.UI.iPhone.SystemButton.ORGANIZE",
                "Ti.UI.iPhone.SystemButton.PAUSE",
                "Ti.UI.iPhone.SystemButton.PLAY",
                "Ti.UI.iPhone.SystemButton.REFRESH",
                "Ti.UI.iPhone.SystemButton.REPLY",
                "Ti.UI.iPhone.SystemButton.REWIND",
                "Ti.UI.iPhone.SystemButton.SAVE",
                "Ti.UI.iPhone.SystemButton.SPINNER",
                "Ti.UI.iPhone.SystemButton.STOP",
                "Ti.UI.iPhone.SystemButton.TRASH"
            ]
        },
        "tabBarHidden": {
            "description": "Boolean value indicating if the tab bar should be hidden. ",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "tabDividerColor": {
            "description": "Color of the divider between tabs, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "tabDividerWidth": {
            "description": "Width of the divider between tabs.",
            "type": "Number"
        },
        "tabHeight": {
            "description": "Height of the tabs.",
            "type": "Number"
        },
        "tabs": {
            "description": "Tabs managed by the tab group.",
            "type": "Array"
        },
        "tabsAtBottom": {
            "description": "Determines whether the tabs should be positioned at the top rather than the bottom of the \nscreen.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "tabsBackgroundColor": {
            "description": "Default background color for inactive tabs, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "tabsBackgroundDisabledColor": {
            "description": "Default background disabled color for tabs, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "tabsBackgroundDisabledImage": {
            "description": "Default background disabled image for tabs.",
            "type": "String"
        },
        "tabsBackgroundFocusedColor": {
            "description": "Default background focused color for tabs, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "tabsBackgroundFocusedImage": {
            "description": "Default background focused image for tabs.",
            "type": "String"
        },
        "tabsBackgroundImage": {
            "description": "Default background image for tabs.",
            "type": "String"
        },
        "tabsBackgroundSelectedColor": {
            "description": "Default background selected color for tabs, as a color name or hex triplet.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "tabsBackgroundSelectedImage": {
            "description": "Default background selected image for tabs.",
            "type": "String"
        },
        "tabsTintColor": {
            "description": "The tintColor to apply to the tabs. This property is applicable on iOS 7 and greater.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "template": {
            "description": "Template ID configured with the <a href=\"Titanium.UI.ListView.templates\">templates</a> property or\n<a href=\"Titanium.UI.LIST_ITEM_TEMPLATE_DEFAULT\">LIST_ITEM_TEMPLATE_DEFAULT</a>.",
            "type": "String"
        },
        "templates": {
            "description": "Contain key-value pairs mapping a style name (key) to an <a href=\"ItemTemplate\">ItemTemplate</a> (value).",
            "type": "Object"
        },
        "tempo": {
            "description": "The tempo of the music contained in the audio file in Beats Per Minute.",
            "type": "Number"
        },
        "text": {
            "description": "",
            "type": "String"
        },
        "textAlign": {
            "description": "",
            "type": "String",
            "values": [
                "Ti.UI.TEXT_ALIGNMENT_CENTER",
                "Ti.UI.TEXT_ALIGNMENT_LEFT",
                "Ti.UI.TEXT_ALIGNMENT_RIGHT",
                "Ti.UI.TEXT_ALIGNMENT_CENTER",
                "Ti.UI.TEXT_ALIGNMENT_LEFT",
                "Ti.UI.TEXT_ALIGNMENT_RIGHT"
            ]
        },
        "textStyle": {
            "description": "The text style for the font.",
            "type": "String",
            "values": [
                "Ti.UI.TEXT_STYLE_BODY",
                "Ti.UI.TEXT_STYLE_CAPTION1",
                "Ti.UI.TEXT_STYLE_CAPTION2",
                "Ti.UI.TEXT_STYLE_FOOTNOTE",
                "Ti.UI.TEXT_STYLE_HEADLINE",
                "Ti.UI.TEXT_STYLE_SUBHEADLINE"
            ]
        },
        "textid": {
            "description": "Key identifying a string from the locale file to use for the label text.",
            "type": "String"
        },
        "theme": {
            "description": "",
            "type": "String"
        },
        "thumbImage": {
            "description": "Image for the slider thumb.",
            "type": "String"
        },
        "thumbTintColor": {
            "description": "The color used to tint the appearance of the thumb.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "thumbnailData": {
            "description": "Image data for thumbnail for this item.",
            "type": "String"
        },
        "thumbnailURL": {
            "description": "File URL pointing to a thumbnail image for this item.",
            "type": "String"
        },
        "tickerText": {
            "description": "Text to scroll across the screen when this item is added to the status bar.",
            "type": "String"
        },
        "time": {
            "description": "",
            "type": "Number"
        },
        "timeSignature": {
            "description": "The time signature of the musical composition contained in the audio/MIDI file.",
            "type": "String"
        },
        "timeout": {
            "description": "",
            "type": "Number"
        },
        "timestamp": {
            "description": "",
            "type": "Number"
        },
        "timezone": {
            "description": "Timezone of the date configured for the notification. If not set, the system timezone is used.",
            "type": "String"
        },
        "tint": {
            "description": "Color to combine with the image, as a color name or hex triplet.",
            "type": "String"
        },
        "tintColor": {
            "description": "",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "title": {
            "description": "",
            "type": "String"
        },
        "titleAttributes": {
            "description": "",
            "type": "titleAttributesParams"
        },
        "titleColor": {
            "description": "Defines the color of the title of tab when it's inactive.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "titleCondensed": {
            "description": "Shortened version of the item's title.",
            "type": "String"
        },
        "titleControl": {
            "description": "View to show in the title area of the nav bar.",
            "type": "Titanium.UI.View"
        },
        "titleImage": {
            "description": "Image to show in the title area of the nav bar, specified as a local file path or URL.",
            "type": "String"
        },
        "titleOff": {
            "description": "Text to display on the switch in its \"off\" state, when the toggle button style is in use.",
            "type": "String"
        },
        "titleOn": {
            "description": "Text to display on the switch in its \"on\" state, when the toggle button style is in use.",
            "type": "String"
        },
        "titlePrompt": {
            "description": "Title prompt for the window.",
            "type": "String"
        },
        "titleid": {
            "description": "",
            "type": "String"
        },
        "titlepromptid": {
            "description": "Key identifying a string from the locale file to use for the window title prompt.",
            "type": "String"
        },
        "tlsVersion": {
            "description": "Sets the TLS version to use for handshakes.",
            "type": "Number",
            "values": [
                "Ti.Network.TLS_VERSION_1_0",
                "Ti.Network.TLS_VERSION_1_1",
                "Ti.Network.TLS_VERSION_1_2"
            ]
        },
        "toRecipients": {
            "description": "Recipients of the email included via the main <code>TO</code> field.",
            "type": "Array"
        },
        "toStream": {
            "description": "Stream being written to.",
            "type": "Titanium.IOStream"
        },
        "toolbar": {
            "description": "Array of button objects to show in the window's toolbar.",
            "type": "Array"
        },
        "top": {
            "description": "",
            "type": "Number"
        },
        "totalBitRate": {
            "description": "The total bit rate (audio and video combined) of the media.",
            "type": "Number"
        },
        "totalBytesProcessed": {
            "description": "Total number of bytes read from the stream so far, \nincluding the data passed to this current invocation of the handler.",
            "type": "Number"
        },
        "touchEnabled": {
            "description": "Determines whether view should receive touch events.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "trackSignificantLocationChange": {
            "description": "Indicates if the location changes should be updated only when a significant change \nin location occurs.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "tranistionTo": {
            "description": "Animation to show the new window.",
            "type": "Titanium.UI.Animation"
        },
        "transform": {
            "description": "",
            "type": "Titanium.UI._2DMatrix"
        },
        "transition": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.iPhone.AnimationStyle.CURL_DOWN",
                "Ti.UI.iPhone.AnimationStyle.CURL_UP",
                "Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT",
                "Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT",
                "Ti.UI.iPhone.AnimationStyle.NONE",
                "Ti.UI.iPhone.AnimationStyle.CURL_DOWN",
                "Ti.UI.iPhone.AnimationStyle.CURL_UP",
                "Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT",
                "Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT",
                "Ti.UI.iPhone.AnimationStyle.NONE"
            ]
        },
        "transitionAnimation": {
            "description": "Use a transition animation when opening or closing windows in a\n<a href=\"Titanium.UI.iOS.NavigationWindow\">NavigationWindow</a> or <a href=\"Titanium.UI.Tab\">Tab</a>.",
            "type": "Titanium.Proxy"
        },
        "transitionFrom": {
            "description": "Animation to hide the current window.",
            "type": "Titanium.UI.Animation"
        },
        "translationX": {
            "description": "Horizontal location of the view relative to its left position in pixels.",
            "type": "Number"
        },
        "translationY": {
            "description": "Vertical location of the view relative to its top position in pixels.",
            "type": "Number"
        },
        "translationZ": {
            "description": "Depth of the view relative to its elevation in pixels.",
            "type": "Number"
        },
        "translucent": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "treatReferenceAsBoundary": {
            "description": "Use the animator's reference view as the boundary.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "trueHeading": {
            "description": "Declination in degrees from true North.",
            "type": "Number"
        },
        "tx": {
            "description": "The entry at position [3,1] in the matrix.",
            "type": "Number"
        },
        "ty": {
            "description": "The entry at position [3,2] in the matrix.",
            "type": "Number"
        },
        "type": {
            "description": "",
            "type": "String",
            "values": [
                "Ti.Codec.TYPE_BYTE",
                "Ti.Codec.TYPE_SHORT",
                "Ti.Codec.TYPE_INT",
                "Ti.Codec.TYPE_FLOAT",
                "Ti.Codec.TYPE_LONG",
                "Ti.Codec.TYPE_DOUBLE",
                "Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT",
                "Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT",
                "Ti.UI.ATTRIBUTE_FONT",
                "Ti.UI.ATTRIBUTE_FOREGROUND_COLOR",
                "Ti.UI.ATTRIBUTE_BACKGROUND_COLOR",
                "Ti.UI.ATTRIBUTE_STRIKETHROUGH_STYLE",
                "Ti.UI.ATTRIBUTE_UNDERLINES_STYLE",
                "Ti.UI.ATTRIBUTE_LINK",
                "Ti.UI.ATTRIBUTE_UNDERLINE_COLOR",
                "Ti.UI.iOS.ATTRIBUTE_LIGATURE",
                "Ti.UI.ATTRIBUTE_KERN",
                "Ti.UI.ATTRIBUTE_STROKE_COLOR",
                "Ti.UI.ATTRIBUTE_STROKE_WIDTH",
                "Ti.UI.ATTRIBUTE_SHADOW",
                "Ti.UI.ATTRIBUTE_WRITING_DIRECTION",
                "Ti.UI.ATTRIBUTE_TEXT_EFFECT",
                "Ti.UI.ATTRIBUTE_BASELINE_OFFSET",
                "Ti.UI.ATTRIBUTE_STRIKETHROUGH_COLOR",
                "Ti.UI.ATTRIBUTE_OBLIQUENESS",
                "Ti.UI.ATTRIBUTE_EXPANSION",
                "Ti.UI.ATTRIBUTE_LINE_BREAK",
                "Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER",
                "Ti.UI.PICKER_TYPE_DATE",
                "Ti.UI.PICKER_TYPE_DATE_AND_TIME",
                "Ti.UI.PICKER_TYPE_PLAIN",
                "Ti.UI.PICKER_TYPE_TIME"
            ]
        },
        "types": {
            "description": "",
            "type": "Array",
            "values": [
                "Ti.App.iOS.USER_NOTIFICATION_TYPE_NONE",
                "Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE",
                "Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND",
                "Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT",
                "Ti.Network.NOTIFICATION_TYPE_ALERT",
                "Ti.Network.NOTIFICATION_TYPE_BADGE",
                "Ti.Network.NOTIFICATION_TYPE_SOUND",
                "Ti.Network.NOTIFICATION_TYPE_NEWSSTAND"
            ]
        },
        "uniqueIdentifier": {
            "description": "Unique identifier to your application group.",
            "type": "String"
        },
        "updateCurrentIntent": {
            "description": "If this property is true, flag <a href=\"Titanium.Android.FLAG_UPDATE_CURRENT\">FLAG_UPDATE_CURRENT</a> will be\nappended to <code>flags</code> automatically. Default value is true.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "uri": {
            "description": "URI to the file if it was scanned and added to the media library, or <code>null</code>\nif the file was not added.",
            "type": "String"
        },
        "url": {
            "description": "",
            "type": "String"
        },
        "useApplicationAudioSession": {
            "description": "Indicates if the movie player should inherit the application's audio session\ninstead of creating a new session.\n <strong>Deprecated since 3.5.0. There is no replacement for this property and its use is discouraged.</strong>",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "useSecure": {
            "description": "Indicates whether to use SSL when sending requests to ArrowDB. **Removed in 3.1.1. To disable SSL, set the <code>acs-base-url</code> and <code>acs-authbase-url</code> properties in the <code>tiapp.xml</code> using the HTTP URL.\nTo enable SSL, use the HTTPS URL.\n\n<pre><code>&lt;property name=\"acs-base-url\" type=\"string\"&gt;http://api.cloud.appcelerator.com&lt;/property&gt;**\n</code></pre>",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "useSpinner": {
            "description": "Determines whether the non-native Android control, with a spinning wheel that looks and \nbehaves like the iOS picker, is invoked rather than the default native \"dropdown\" style.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "userAgent": {
            "description": "",
            "type": "String"
        },
        "userInfo": {
            "description": "",
            "type": "Object"
        },
        "username": {
            "description": "Sets the username parameter for authentication credentials.",
            "type": "String"
        },
        "users": {
            "description": "",
            "type": "Array"
        },
        "validatesSecureCertificate": {
            "description": "Determines how SSL certification validation is performed on connection.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "value": {
            "description": "",
            "type": "Number",
            "values": [
                "true",
                "false"
            ]
        },
        "version": {
            "description": "",
            "type": "String"
        },
        "verticalAlign": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM",
                "Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER",
                "Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP",
                "Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM",
                "Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER",
                "Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP"
            ]
        },
        "verticalBounce": {
            "description": "Determines whether vertical scroll bounce of the scrollable region is enabled.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "verticalMargin": {
            "description": "Vertical placement of the notifcation, <em>as a fraction of the screen height</em>.",
            "type": "Number"
        },
        "videoBitRate": {
            "description": "The video bit rate.",
            "type": "Number"
        },
        "videoMaximumDuration": {
            "description": "Maximum duration (in milliseconds) to allow video capture before completing.",
            "type": "Number"
        },
        "videoQuality": {
            "description": "Constant to indicate the video quality during capture.",
            "type": "Number"
        },
        "view": {
            "description": "",
            "type": "Titanium.UI.View"
        },
        "viewShadowColor": {
            "description": "Determines the color of the shadow.",
            "type": "String",
            "values": [
                "\"transparent\"",
                "\"aqua\"",
                "\"black\"",
                "\"blue\"",
                "\"brown\"",
                "\"cyan\"",
                "\"darkgray\"",
                "\"fuchsia\"",
                "\"gray\"",
                "\"green\"",
                "\"lightgray\"",
                "\"lime\"",
                "\"magenta\"",
                "\"maroon\"",
                "\"navy\"",
                "\"olive\"",
                "\"orange\"",
                "\"pink\"",
                "\"purple\"",
                "\"red\"",
                "\"silver\"",
                "\"teal\"",
                "\"white\"",
                "\"yellow\""
            ]
        },
        "viewShadowOffset": {
            "description": "Determines the offset for the shadow of the view.",
            "type": "Point"
        },
        "viewShadowRadius": {
            "description": "Determines the blur radius used to create the shadow.",
            "type": "Number"
        },
        "views": {
            "description": "Sets the pages within this Scrollable View.",
            "type": "Array"
        },
        "visibility": {
            "description": "Allows user to conceal private information of the notification on the lockscreen.",
            "type": "Number",
            "values": [
                "Ti.Android.VISIBILITY_PRIVATE",
                "Ti.Android.VISIBILITY_PUBLIC",
                "Ti.Android.VISIBILITY_SECRET"
            ]
        },
        "visible": {
            "description": "",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "visibleItems": {
            "description": "Number of visible rows to display. This is only applicable to a plain picker and when the \n<code>useSpinner</code> is <code>true</code>.",
            "type": "Number"
        },
        "volume": {
            "description": "",
            "type": "Number"
        },
        "webpageURL": {
            "description": "When no suitable application is installed on a resuming device and the <code>webpageURL</code> property is set,\nthe user activity will instead be continued in a web browser by loading the specified URL.",
            "type": "String"
        },
        "week": {
            "description": "The week number of the day of the week.\nValues range from -53 to 53. A negative value indicates a value from the end of \nthe range. 0 indicates the week number is irrelevant.",
            "type": "Number"
        },
        "when": {
            "description": "The timestamp for the notification (defaults to the current time).",
            "type": "Date"
        },
        "width": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.FILL",
                "Ti.UI.SIZE",
                "Ti.UI.FILL",
                "Ti.UI.SIZE"
            ]
        },
        "willHandleTouches": {
            "description": "Explicitly specifies if this web view handles touches.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "willScrollOnStatusTap": {
            "description": "Controls the scroll-to-top gesture.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "window": {
            "description": "",
            "type": "Titanium.UI.Window"
        },
        "windowFlags": {
            "description": "Additional flags to set on the Activity Window.",
            "type": "Number"
        },
        "windowPixelFormat": {
            "description": "Set the pixel format for the Activity's Window.",
            "type": "Number",
            "values": [
                "Ti.UI.Android.PIXEL_FORMAT_A_8",
                "Ti.UI.Android.PIXEL_FORMAT_LA_88",
                "Ti.UI.Android.PIXEL_FORMAT_L_8",
                "Ti.UI.Android.PIXEL_FORMAT_OPAQUE",
                "Ti.UI.Android.PIXEL_FORMAT_RGBA_4444",
                "Ti.UI.Android.PIXEL_FORMAT_RGBA_5551",
                "Ti.UI.Android.PIXEL_FORMAT_RGBA_8888",
                "Ti.UI.Android.PIXEL_FORMAT_RGBX_8888",
                "Ti.UI.Android.PIXEL_FORMAT_RGB_332",
                "Ti.UI.Android.PIXEL_FORMAT_RGB_565",
                "Ti.UI.Android.PIXEL_FORMAT_RGB_888",
                "Ti.UI.Android.PIXEL_FORMAT_TRANSLUCENT",
                "Ti.UI.Android.PIXEL_FORMAT_TRANSPARENT",
                "Ti.UI.Android.PIXEL_FORMAT_UNKNOWN"
            ]
        },
        "windowSoftInputMode": {
            "description": "",
            "type": "Number",
            "values": [
                "Ti.UI.Android.SOFT_INPUT_ADJUST_PAN",
                "Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE",
                "Ti.UI.Android.SOFT_INPUT_ADJUST_UNSPECIFIED",
                "Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN",
                "Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE",
                "Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN",
                "Ti.UI.Android.SOFT_INPUT_STATE_UNSPECIFIED",
                "Ti.UI.Android.SOFT_INPUT_STATE_VISIBLE",
                "Ti.UI.Android.SOFT_INPUT_ADJUST_PAN",
                "Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE",
                "Ti.UI.Android.SOFT_INPUT_ADJUST_UNSPECIFIED"
            ]
        },
        "withCredentials": {
            "description": "Determines whether the request should include any cookies and HTTP authentication information.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "wobble": {
            "description": "Determines whether the wobble visual editing cue is enabled in edit mode.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "wordWrap": {
            "description": "Enable or disable word wrapping in the label.",
            "type": "Boolean",
            "values": [
                "true",
                "false"
            ]
        },
        "x": {
            "description": "",
            "type": "Number"
        },
        "xOffset": {
            "description": "X offset from the default position, in pixels.",
            "type": "Number"
        },
        "y": {
            "description": "",
            "type": "Number"
        },
        "yOffset": {
            "description": "Y offset from the default position, in pixels.",
            "type": "Number"
        },
        "z": {
            "description": "Raw geomagnetic data for the Z axis.",
            "type": "Number"
        },
        "zIndex": {
            "description": "",
            "type": "Number"
        },
        "zipcode": {
            "description": "Postal code. On Android, use <code>postalCode</code>.",
            "type": "String"
        },
        "zoomScale": {
            "description": "Scaling factor of the scroll view's content.",
            "type": "Number"
        }
    },
    "tags": {
        "ActionBar": {
            "apiName": "Ti.Android.ActionBar"
        },
        "ActionView": {
            "apiName": "_ProxyProperty.ActionView"
        },
        "ActivityIndicator": {
            "apiName": "Ti.UI.ActivityIndicator"
        },
        "AlertDialog": {
            "apiName": "Ti.UI.AlertDialog"
        },
        "Alloy": {},
        "AndroidView": {
            "apiName": "Ti.UI.AndroidView"
        },
        "Annotation": {
            "apiName": "Ti.Map.Annotation"
        },
        "AppBarButton": {
            "apiName": "Ti.UI.Windows.AppBarButton"
        },
        "AppBarSeparator": {
            "apiName": "Ti.UI.Windows.AppBarSeparator"
        },
        "AppBarToggleButton": {
            "apiName": "Ti.UI.Windows.AppBarToggleButton"
        },
        "AttributedString": {
            "apiName": "Ti.UI.AttributedString"
        },
        "BarItemType": {
            "apiName": "Alloy.Abstract.BarItemType"
        },
        "BarItemTypes": {
            "apiName": "Alloy.Abstract.BarItemTypes"
        },
        "Button": {
            "apiName": "Ti.UI.Button"
        },
        "ButtonBar": {
            "apiName": "Ti.UI.ButtonBar"
        },
        "ButtonName": {
            "apiName": "Alloy.Abstract.ButtonName"
        },
        "ButtonNames": {
            "apiName": "Alloy.Abstract.ButtonNames"
        },
        "Collection": {
            "apiName": "Alloy.Collection"
        },
        "CommandBar": {
            "apiName": "Ti.UI.Windows.CommandBar"
        },
        "ContentView": {
            "apiName": "Ti.UI.iPad.Popover.ContentView"
        },
        "CoverFlowImageType": {
            "apiName": "Alloy.Abstract.CoverFlowImageType"
        },
        "CoverFlowImageTypes": {
            "apiName": "Alloy.Abstract.CoverFlowImageTypes"
        },
        "CoverFlowView": {
            "apiName": "Ti.UI.iOS.CoverFlowView"
        },
        "DashboardView": {
            "apiName": "Ti.UI.DashboardView"
        },
        "FixedSpace": {
            "apiName": "Alloy.Abstract.FixedSpace"
        },
        "FlexSpace": {
            "apiName": "Alloy.Abstract.FlexSpace"
        },
        "FooterView": {},
        "HeaderView": {},
        "ImageView": {
            "apiName": "Ti.UI.ImageView"
        },
        "ItemTemplate": {
            "apiName": "Alloy.Abstract.ItemTemplate"
        },
        "Items": {
            "apiName": "Alloy.Abstract.Items"
        },
        "KeyboardToolbar": {
            "apiName": "_ProxyProperty.KeyboardToolbar"
        },
        "Label": {
            "apiName": "Ti.UI.Label"
        },
        "LeftButton": {
            "apiName": "_ProxyProperty.LeftButton"
        },
        "LeftNavButton": {
            "apiName": "Ti.UI.Window.LeftNavButton"
        },
        "LeftNavButtons": {
            "apiName": "Ti.UI.Window.LeftNavButtons"
        },
        "ListItem": {
            "apiName": "Ti.UI.ListItem"
        },
        "ListSection": {
            "apiName": "Ti.UI.ListSection"
        },
        "ListView": {
            "apiName": "Ti.UI.ListView"
        },
        "Menu": {
            "apiName": "Ti.Android.Menu"
        },
        "MenuItem": {
            "apiName": "Ti.Android.MenuItem"
        },
        "Model": {
            "apiName": "Alloy.Model"
        },
        "Module": {
            "apiName": "Alloy.Module"
        },
        "NavigationGroup": {
            "apiName": "Ti.UI.iPhone.NavigationGroup"
        },
        "NavigationWindow": {
            "apiName": "Ti.UI.iOS.NavigationWindow"
        },
        "Option": {
            "apiName": "Alloy.Abstract.Option"
        },
        "OptionDialog": {
            "apiName": "Ti.UI.OptionDialog"
        },
        "Options": {
            "apiName": "Alloy.Abstract.Options"
        },
        "Picker": {
            "apiName": "Ti.UI.Picker"
        },
        "PickerColumn": {
            "apiName": "Ti.UI.PickerColumn"
        },
        "Popover": {
            "apiName": "Ti.UI.iPad.Popover"
        },
        "README": {
            "apiName": "README.md"
        },
        "Require": {
            "apiName": "Alloy.Require"
        },
        "RightButton": {
            "apiName": "_ProxyProperty.RightButton"
        },
        "RightNavButton": {
            "apiName": "Ti.UI.Window.RightNavButton"
        },
        "RightNavButtons": {
            "apiName": "Ti.UI.Window.RightNavButtons"
        },
        "ScrollView": {
            "apiName": "Ti.UI.ScrollView"
        },
        "ScrollableView": {
            "apiName": "Ti.UI.ScrollableView"
        },
        "SplitWindow": {
            "apiName": "Ti.UI.iPad.SplitWindow"
        },
        "Switch": {
            "apiName": "Ti.UI.Switch"
        },
        "Tab": {
            "apiName": "Ti.UI.Tab"
        },
        "TabGroup": {
            "apiName": "Ti.UI.TabGroup"
        },
        "TabbedBar": {
            "apiName": "Ti.UI.iOS.TabbedBar"
        },
        "TableView": {
            "apiName": "Ti.UI.TableView"
        },
        "TableViewRow": {
            "apiName": "Ti.UI.TableViewRow"
        },
        "TableViewSection": {
            "apiName": "Ti.UI.TableViewSection"
        },
        "Templates": {},
        "TextArea": {
            "apiName": "Ti.UI.TextArea"
        },
        "TextField": {
            "apiName": "Ti.UI.TextField"
        },
        "TitleControl": {
            "apiName": "Ti.UI.Window.TitleControl"
        },
        "Toolbar": {
            "apiName": "Ti.UI.iOS.Toolbar"
        },
        "View": {
            "apiName": "Ti.UI.View"
        },
        "Widget": {
            "apiName": "Alloy.Widget"
        },
        "Window": {
            "apiName": "Ti.UI.Window"
        },
        "WindowToolbar": {
            "apiName": "Ti.UI.Window.WindowToolbar"
        }
    },
    "types": {
        "Alloy.Abstract.ItemTemplate": {
            "description": "Template that represents the basic appearance of a list item.",
            "functions": [],
            "properties": [
                "name",
                "height"
            ],
            "events": []
        },
        "Alloy.Widget": {
            "description": "Widgets are self-contained components that can be easily dropped into an Alloy project.",
            "functions": [],
            "properties": [
                "src"
            ],
            "events": []
        },
        "Alloy.Require": {
            "description": "Require alloy controller",
            "functions": [],
            "properties": [
                "src"
            ],
            "events": []
        },
        "Ti.Proxy": {
            "description": "The base for all Titanium objects.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Module": {
            "description": "Base type for all Titanium modules.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.UI.View": {
            "description": "An empty drawing surface or container",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout"
            ]
        },
        "Global": {
            "description": "The APIs that reside in the global scope, which may be called without a namespace prefix.",
            "functions": [
                "alert",
                "decodeURIComponent",
                "encodeURIComponent",
                "L",
                "require",
                "setTimeout",
                "clearTimeout",
                "setInterval",
                "clearInterval"
            ],
            "properties": [],
            "events": []
        },
        "JSON": {
            "description": "Global JSON object providing the <a href=\"Global.JSON.parse\">parse</a> and <a href=\"Global.JSON.stringify\">stringify</a> methods.",
            "functions": [
                "parse",
                "stringify"
            ],
            "properties": [],
            "events": []
        },
        "String": {
            "description": "The JavaScript built-in String type.",
            "functions": [
                "format",
                "formatCurrency",
                "formatDate",
                "formatDecimal",
                "formatTime"
            ],
            "properties": [],
            "events": []
        },
        "console": {
            "description": "Console logging facilities.",
            "functions": [
                "debug",
                "error",
                "info",
                "log",
                "warn"
            ],
            "properties": [],
            "events": []
        },
        "Modules.Cloud.ACLs": {
            "description": "Provides methods for accessing ArrowDB access control lists (ACLs).",
            "functions": [
                "applyProperties",
                "create",
                "update",
                "show",
                "remove",
                "addUser",
                "removeUser",
                "checkUser",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudACLsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "acls"
            ],
            "events": []
        },
        "CloudACLsCheckResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "permission"
            ],
            "events": []
        },
        "Modules.Cloud.Chats": {
            "description": "Provides methods for accessing ArrowDB chat messages.",
            "functions": [
                "applyProperties",
                "create",
                "remove",
                "getChatGroups",
                "queryChatGroups",
                "query",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudChatsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "chats"
            ],
            "events": []
        },
        "CloudChatGroupsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "chat_groups"
            ],
            "events": []
        },
        "Modules.Cloud.Checkins": {
            "description": "Provides methods for accessing ArrowDB checkins.",
            "functions": [
                "applyProperties",
                "create",
                "query",
                "remove",
                "show",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudCheckinsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "checkins"
            ],
            "events": []
        },
        "Modules.Cloud.Clients": {
            "description": "Provides methods for accessing ArrowDB clients.",
            "functions": [
                "applyProperties",
                "geolocate",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudClientsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "ip_address",
                "location"
            ],
            "events": []
        },
        "Modules.Cloud": {
            "description": "The top level Cloud module for making calls to ArrowDB and Arrow Push.",
            "functions": [
                "applyProperties",
                "hasStoredSession",
                "retrieveStoredSession",
                "sendRequest",
                "createX509CertificatePinningSecurityManager",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getDebug",
                "setDebug",
                "getOndatastream",
                "setOndatastream",
                "getOnsendstream",
                "setOnsendstream",
                "getUseSecure",
                "setUseSecure",
                "getSessionId",
                "setSessionId",
                "getAccessToken",
                "setAccessToken",
                "getExpiresIn"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "debug",
                "ondatastream",
                "onsendstream",
                "useSecure",
                "sessionId",
                "accessToken"
            ],
            "events": []
        },
        "CloudStreamProgress": {
            "description": "Argument passed to the callback as a request is transmitted or received.",
            "functions": [],
            "properties": [
                "progress",
                "url"
            ],
            "events": []
        },
        "CloudResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message"
            ],
            "events": []
        },
        "Modules.Cloud.Emails": {
            "description": "Provides methods for accessing ArrowDB Email service.",
            "functions": [
                "applyProperties",
                "send",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudEmailsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message"
            ],
            "events": []
        },
        "Modules.Cloud.Events": {
            "description": "Provides methods for accessing ArrowDB events.",
            "functions": [
                "applyProperties",
                "create",
                "show",
                "showOccurrences",
                "query",
                "queryOccurrences",
                "search",
                "searchOccurrences",
                "remove",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudEventsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "events"
            ],
            "events": []
        },
        "CloudEventOccurrencesResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "event_occurrences"
            ],
            "events": []
        },
        "Modules.Cloud.Files": {
            "description": "Provides methods for accessing ArrowDB files.",
            "functions": [
                "applyProperties",
                "create",
                "query",
                "remove",
                "show",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudFilesResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "files"
            ],
            "events": []
        },
        "Modules.Cloud.Friends": {
            "description": "Provides methods for accessing ArrowDB friends.",
            "functions": [
                "applyProperties",
                "add",
                "requests",
                "approve",
                "remove",
                "search",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudFriendsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "users"
            ],
            "events": []
        },
        "CloudFriendRequestsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "friend_requests"
            ],
            "events": []
        },
        "Modules.Cloud.GeoFences": {
            "description": "Provides methods for accessing ArrowDB geo-fence objects.",
            "functions": [
                "applyProperties",
                "create",
                "query",
                "remove",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudGeoFenceResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "geo_fences"
            ],
            "events": []
        },
        "Modules.Cloud.KeyValues": {
            "description": "Provides methods for accessing ArrowDB Key-Values storage.",
            "functions": [
                "applyProperties",
                "append",
                "get",
                "increment",
                "remove",
                "set",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudKeyValuesResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "keyvalues"
            ],
            "events": []
        },
        "Modules.Cloud.Likes": {
            "description": "Provides methods for accessing ArrowDB likes.",
            "functions": [
                "create",
                "remove",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudLikesResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "likes"
            ],
            "events": []
        },
        "Modules.Cloud.Messages": {
            "description": "Provides methods for accessing ArrowDB messages.",
            "functions": [
                "applyProperties",
                "create",
                "reply",
                "show",
                "showInbox",
                "showSent",
                "showThreads",
                "showThread",
                "remove",
                "removeThread",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudMessagesResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "messages"
            ],
            "events": []
        },
        "Modules.Cloud.Objects": {
            "description": "Provides methods for accessing ArrowDB custom objects.",
            "functions": [
                "applyProperties",
                "create",
                "query",
                "remove",
                "show",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudObjectsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "classname"
            ],
            "events": []
        },
        "Modules.Cloud.PhotoCollections": {
            "description": "Provides methods for ArrowDB photo collections.",
            "functions": [
                "applyProperties",
                "create",
                "remove",
                "search",
                "show",
                "showPhotos",
                "showSubCollections",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudPhotoCollectionsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "collections"
            ],
            "events": []
        },
        "CloudPhotoCollectionsPhotosResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "photos"
            ],
            "events": []
        },
        "Modules.Cloud.Photos": {
            "description": "Provides methods for accessing ArrowDB photos.",
            "functions": [
                "applyProperties",
                "create",
                "query",
                "remove",
                "search",
                "show",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudPhotosResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "photos"
            ],
            "events": []
        },
        "Modules.Cloud.Places": {
            "description": "Provides methods for accessing ArrowDB places.",
            "functions": [
                "applyProperties",
                "create",
                "query",
                "remove",
                "search",
                "show",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudPlacesResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "places"
            ],
            "events": []
        },
        "Modules.Cloud.Posts": {
            "description": "Provides methods for accessing ArrowDB posts.",
            "functions": [
                "applyProperties",
                "create",
                "query",
                "remove",
                "show",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudPostsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "posts"
            ],
            "events": []
        },
        "Modules.Cloud.PushNotifications": {
            "description": "Provides methods for accessing Arrow push notification channels.",
            "functions": [
                "applyProperties",
                "notify",
                "notifyTokens",
                "resetBadge",
                "setBadge",
                "subscribe",
                "subscribeToken",
                "unsubscribe",
                "unsubscribeToken",
                "updateSubscription",
                "queryChannels",
                "showChannels",
                "query",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudPushNotificationsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message"
            ],
            "events": []
        },
        "CloudPushNotificationsQueryChannelResponse": {
            "description": "Argument passed to the callback when a request finishes successfully.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "push_channels"
            ],
            "events": []
        },
        "CloudPushNotificationsShowChannelResponse": {
            "description": "Argument passed to the callback when a request finishes successfully.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "devices"
            ],
            "events": []
        },
        "CloudPushNotificationsQueryResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "subscriptions"
            ],
            "events": []
        },
        "Modules.Cloud.PushSchedules": {
            "description": "Provides methods for scheduling Arrow push notifications",
            "functions": [
                "applyProperties",
                "create",
                "remove",
                "query",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudPushSchedulesResponse": {
            "description": "Argument passed to the callback when a request finishes successfully.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "push_schedules"
            ],
            "events": []
        },
        "Modules.Cloud.Reviews": {
            "description": "Provides methods for accessing ArrowDB reviews.",
            "functions": [
                "applyProperties",
                "create",
                "query",
                "remove",
                "show",
                "update",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudReviewsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "reviews"
            ],
            "events": []
        },
        "Modules.Cloud.SocialIntegrations": {
            "description": "Provides methods for access ArrowDB social integrations.",
            "functions": [
                "applyProperties",
                "externalAccountLink",
                "externalAccountLogin",
                "externalAccountUnlink",
                "searchFacebookFriends",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudSocialIntegrationsResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "users"
            ],
            "events": []
        },
        "Modules.Cloud.Statuses": {
            "description": "Provides methods for accessing ArrowDB Statuses.",
            "functions": [
                "applyProperties",
                "create",
                "update",
                "show",
                "delete",
                "query",
                "search",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudStatusesResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "statuses"
            ],
            "events": []
        },
        "Modules.Cloud.Users": {
            "description": "Provides methods for accessing ArrowDB user objects.",
            "functions": [
                "applyProperties",
                "create",
                "login",
                "logout",
                "query",
                "search",
                "show",
                "showMe",
                "update",
                "remove",
                "requestResetPassword",
                "resendConfirmation",
                "secureCreate",
                "secureLogin",
                "secureStatus",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CloudUsersSecureDialog": {
            "description": "Properties for the modal dialog used in 3-Legged OAuth",
            "functions": [],
            "properties": [
                "title"
            ],
            "events": []
        },
        "CloudUsersResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "users"
            ],
            "events": []
        },
        "CloudUsersSecureResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "meta",
                "code",
                "message",
                "accessToken",
                "expiresIn"
            ],
            "events": []
        },
        "Modules.CloudPush": {
            "description": "Provides support for Android push notifications.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "retrieveDeviceToken",
                "clearStatus",
                "isGooglePlayServicesAvailable",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getEnabled",
                "setEnabled",
                "getShowTrayNotification",
                "setShowTrayNotification",
                "getShowAppOnTrayClick",
                "setShowAppOnTrayClick",
                "getShowTrayNotificationsWhenFocused",
                "setShowTrayNotificationsWhenFocused",
                "getFocusAppOnPush",
                "setFocusAppOnPush",
                "getSingleCallback",
                "setSingleCallback"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "enabled",
                "showTrayNotification",
                "showAppOnTrayClick",
                "showTrayNotificationsWhenFocused",
                "focusAppOnPush",
                "singleCallback"
            ],
            "events": [
                "trayClickLaunchedApp",
                "trayClickFocusedApp",
                "callback"
            ]
        },
        "CloudPushNotificationConfig": {
            "description": "Simple object for specifying token retrieval options to <a href=\"Modules.CloudPush.retrieveDeviceToken\">retrieveDeviceToken</a>.",
            "functions": [],
            "properties": [
                "success",
                "error"
            ],
            "events": []
        },
        "CloudPushNotificationSuccessArg": {
            "description": "A simple object passed to the <a href=\"Modules.CloudPush.retrieveDeviceToken\">retrieveDeviceToken</a> success callback.",
            "functions": [],
            "properties": [
                "deviceToken"
            ],
            "events": []
        },
        "CloudPushNotificationErrorArg": {
            "description": "A simple object passed to the <a href=\"Modules.CloudPush.retrieveDeviceToken\">retrieveDeviceToken</a> error callback.",
            "functions": [],
            "properties": [
                "error"
            ],
            "events": []
        },
        "Modules": {
            "description": "Optional Titanium modules.",
            "functions": [],
            "properties": [],
            "events": []
        },
        "Ti.API": {
            "description": "The top-level API module, containing methods to output messages to the system log.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "timestamp",
                "info",
                "warn",
                "error",
                "debug",
                "trace",
                "log",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Accelerometer": {
            "description": "The top-level Accelerometer module, used to determine the device's physical position.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": [
                "update"
            ]
        },
        "Ti.Analytics": {
            "description": "Used for transmitting developer-defined Analytics events to the Appcelerator Analytics product. ",
            "functions": [
                "addEvent",
                "filterEvents",
                "settingsEvent",
                "timedEvent",
                "userEvent",
                "featureEvent",
                "navEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getLastEvent"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Android.ActionBar": {
            "description": "An action bar is a window feature that identifies the application and user location,\nand provides user actions and navigation modes.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "hide",
                "setDisplayShowHomeEnabled",
                "setDisplayShowTitleEnabled",
                "show",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "setBackgroundImage",
                "setDisplayHomeAsUp",
                "setHomeButtonEnabled",
                "setIcon",
                "setLogo",
                "getNavigationMode",
                "setNavigationMode",
                "setOnHomeIconItemSelected",
                "getSubtitle",
                "setSubtitle",
                "getTitle",
                "setTitle"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "backgroundImage",
                "displayHomeAsUp",
                "homeButtonEnabled",
                "icon",
                "logo",
                "navigationMode",
                "onHomeIconItemSelected",
                "subtitle",
                "title"
            ],
            "events": []
        },
        "Ti.Android.Activity": {
            "description": "The Titanium binding of an Android Activity.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finish",
                "getString",
                "invalidateOptionsMenu",
                "setRequestedOrientation",
                "setResult",
                "startActivity",
                "startActivityForResult",
                "openOptionsMenu",
                "sendBroadcast",
                "sendBroadcastWithPermission",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getActionBar",
                "getIntent",
                "getOnCreate",
                "setOnCreate",
                "getOnCreateOptionsMenu",
                "setOnCreateOptionsMenu",
                "getOnDestroy",
                "setOnDestroy",
                "getOnPause",
                "setOnPause",
                "getOnPrepareOptionsMenu",
                "setOnPrepareOptionsMenu",
                "getOnRestart",
                "setOnRestart",
                "getOnResume",
                "setOnResume",
                "getOnStart",
                "setOnStart",
                "getOnStop",
                "setOnStop"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "onCreate",
                "onCreateOptionsMenu",
                "onDestroy",
                "onPause",
                "onPrepareOptionsMenu",
                "onRestart",
                "onResume",
                "onStart",
                "onStop",
                "requestedOrientation"
            ],
            "events": [
                "create",
                "destroy",
                "newIntent",
                "newintent",
                "pause",
                "resume",
                "start",
                "stop",
                "userleavehint"
            ]
        },
        "ActivityResult": {
            "description": "Simple object passed to the\n<a href=\"Titanium.Android.Activity.startActivityForResult\">startActivityForResult</a> callback.",
            "functions": [],
            "properties": [
                "requestCode",
                "resultCode",
                "intent"
            ],
            "events": []
        },
        "Ti.Android": {
            "description": "The top-level Android module.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createIntentChooser",
                "createPendingIntent",
                "createService",
                "createServiceIntent",
                "isServiceRunning",
                "registerBroadcastReceiver",
                "unregisterBroadcastReceiver",
                "startService",
                "stopService",
                "createBroadcastIntent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "createBroadcastReceiver",
                "createIntent",
                "createNotification",
                "createRemoteViews"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "ServiceIntentOptions": {
            "description": "Options passed to <a href=\"Titanium.Android.createServiceIntent\">createServiceIntent</a>.",
            "functions": [],
            "properties": [
                "url",
                "startMode"
            ],
            "events": []
        },
        "Ti.Android.BroadcastReceiver": {
            "description": "Monitor and handle Android system broadcasts.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getOnReceived",
                "setOnReceived",
                "getUrl",
                "setUrl"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "onReceived",
                "url"
            ],
            "events": []
        },
        "CalendarPermissionResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "Ti.Android.Intent": {
            "description": "Message objects passed between Android application components.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addCategory",
                "addFlags",
                "getBlobExtra",
                "getBooleanExtra",
                "getData",
                "getDoubleExtra",
                "getIntExtra",
                "getLongExtra",
                "getStringExtra",
                "hasExtra",
                "putExtra",
                "putExtraUri",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAction",
                "setAction",
                "getClassName",
                "setClassName",
                "getData",
                "getFlags",
                "setFlags",
                "getPackageName",
                "setPackageName",
                "getType",
                "getUrl",
                "setUrl"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "action",
                "className",
                "flags",
                "packageName",
                "url"
            ],
            "events": []
        },
        "Ti.Android.Menu": {
            "description": "The Titanium binding of an Android Options Menu.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "add",
                "clear",
                "close",
                "findItem",
                "getItem",
                "hasVisibleItems",
                "removeGroup",
                "removeItem",
                "setGroupEnabled",
                "setGroupVisible",
                "size",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getItems"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Android.MenuItem": {
            "description": "The Titanium binding of an Android menu item.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "collapseActionView",
                "expandActionView",
                "isActionViewExpanded",
                "isCheckable",
                "isChecked",
                "isEnabled",
                "isVisible",
                "setCheckable",
                "setChecked",
                "setEnabled",
                "setVisible",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getActionView",
                "setActionView",
                "getGroupId",
                "setIcon",
                "getItemId",
                "getOrder",
                "setShowAsAction",
                "getTitle",
                "setTitle",
                "getTitleCondensed",
                "setTitleCondensed"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "actionView",
                "checkable",
                "checked",
                "enabled",
                "icon",
                "showAsAction",
                "title",
                "titleCondensed",
                "visible"
            ],
            "events": [
                "click",
                "expand",
                "collapse"
            ]
        },
        "Ti.Android.Notification": {
            "description": "UI notifications that can be sent while the application is in the background.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "setLatestEventInfo",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAudioStreamType",
                "setAudioStreamType",
                "getCategory",
                "setCategory",
                "getContentIntent",
                "setContentIntent",
                "getContentText",
                "setContentText",
                "getContentTitle",
                "setContentTitle",
                "setContentView",
                "getDefaults",
                "setDefaults",
                "getDeleteIntent",
                "setDeleteIntent",
                "getFlags",
                "setFlags",
                "getIcon",
                "setIcon",
                "getLargeIcon",
                "setLargeIcon",
                "getLedARGB",
                "setLedARGB",
                "getLedOffMS",
                "setLedOffMS",
                "getLedOnMS",
                "setLedOnMS",
                "getNumber",
                "setNumber",
                "getPriority",
                "setPriority",
                "getSound",
                "setSound",
                "getTickerText",
                "setTickerText",
                "getVisibility",
                "setVisibility",
                "getWhen",
                "setWhen"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "audioStreamType",
                "category",
                "contentIntent",
                "contentText",
                "contentTitle",
                "contentView",
                "defaults",
                "deleteIntent",
                "flags",
                "icon",
                "largeIcon",
                "ledARGB",
                "ledOffMS",
                "ledOnMS",
                "number",
                "priority",
                "sound",
                "tickerText",
                "visibility",
                "when"
            ],
            "events": []
        },
        "Ti.Android.NotificationManager": {
            "description": "Module for managing notifications.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "cancel",
                "cancelAll",
                "notify",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Android.PendingIntent": {
            "description": "The Titanium binding of an Android <code>PendingIntent</code>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getFlags",
                "setFlags",
                "getIntent",
                "setIntent",
                "getUpdateCurrentIntent",
                "setUpdateCurrentIntent"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "flags",
                "intent",
                "updateCurrentIntent"
            ],
            "events": []
        },
        "Ti.Android.R": {
            "description": "The Titanium binding of the Android system-wide resources class.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Android.RemoteViews": {
            "description": "The Titanium binding of <a href=\"http://developer.android.com/reference/android/widget/RemoteViews.html\">Android RemoteViews</a>. ",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "setBoolean",
                "setChronometer",
                "setDouble",
                "setImageViewResource",
                "setImageViewUri",
                "setInt",
                "setOnClickPendingIntent",
                "setProgressBar",
                "setString",
                "setTextColor",
                "setTextViewText",
                "setUri",
                "setViewVisibility",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getLayoutId",
                "setLayoutId",
                "getPackageName",
                "setPackageName"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "layoutId",
                "packageName"
            ],
            "events": []
        },
        "Ti.Android.Service": {
            "description": "Android application component that executes in the background.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "start",
                "stop",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getIntent",
                "getServiceInstanceId"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": [
                "pause",
                "resume",
                "start",
                "stop",
                "taskremoved"
            ]
        },
        "Ti.App.Android": {
            "description": "A module used to access Android application resources.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAppVersionCode",
                "getAppVersionName",
                "getLaunchIntent"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.App.Android.R": {
            "description": "The Titanium binding of the native Android <code>R</code> class, giving access to application resources.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.App": {
            "description": "The top-level App module is mainly used for accessing information about the\napplication at runtime, and for sending or listening for system events.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getArguments",
                "fireSystemEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityEnabled",
                "getAnalytics",
                "getCopyright",
                "getDeployType",
                "getDescription",
                "getDisableNetworkActivityIndicator",
                "setDisableNetworkActivityIndicator",
                "getForceSplashAsSnapshot",
                "setForceSplashAsSnapshot",
                "getGuid",
                "getId",
                "getInstallId",
                "getIdleTimerDisabled",
                "setIdleTimerDisabled",
                "getKeyboardVisible",
                "getName",
                "getProximityDetection",
                "setProximityDetection",
                "getProximityState",
                "getPublisher",
                "getSessionId",
                "getUrl",
                "getVersion"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "disableNetworkActivityIndicator",
                "forceSplashAsSnapshot",
                "idleTimerDisabled",
                "proximityDetection"
            ],
            "events": [
                "accessibilitychanged",
                "memorywarning",
                "pause",
                "paused",
                "proximity",
                "uncaughtException",
                "resume",
                "resumed",
                "keyboardFrameChanged",
                "significanttimechange",
                "keyboardframechanged"
            ]
        },
        "launchOptions": {
            "description": "Dictionary describing the arguments passed to the application on startup.\nUse the <a href=\"Titanium.App.getArguments\">getArguments</a> method to retrieve the launch options.",
            "functions": [],
            "properties": [
                "url",
                "source",
                "launchOptionsLocationKey"
            ],
            "events": []
        },
        "Ti.App.Properties": {
            "description": "The App Properties module is used for storing application-related data in property/value pairs \nthat persist beyond application sessions and device power cycles.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBool",
                "getDouble",
                "getInt",
                "getList",
                "getObject",
                "getString",
                "hasProperty",
                "listProperties",
                "removeProperty",
                "setBool",
                "setDouble",
                "setInt",
                "setList",
                "setObject",
                "setString",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": [
                "change"
            ]
        },
        "Ti.App.iOS.BackgroundService": {
            "description": "A service that runs when the application is placed in the background.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "stop",
                "unregister",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getUrl",
                "setUrl"
            ],
            "properties": [
                "bubbleParent",
                "url"
            ],
            "events": []
        },
        "Ti.App.iOS.LocalNotification": {
            "description": "A local notification to alert the user of new or pending application information.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "cancel",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.App.iOS.SearchableIndex": {
            "description": "The SearchableIndex module is used to add or remove Ti.App.iOS.SearchableItem objects from the device search index.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "isSupported",
                "addToDefaultSearchableIndex",
                "deleteAllSearchableItems",
                "deleteAllSearchableItemByDomainIdenifiers",
                "deleteSearchableItemsByIdentifiers",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.App.iOS.SearchableItem": {
            "description": "Used to create a unique object containing all of the search information that will appear in the device search index.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getDomainIdentifier",
                "setDomainIdentifier",
                "getExpirationDate",
                "setExpirationDate",
                "getUniqueIdentifier",
                "setUniqueIdentifier"
            ],
            "properties": [
                "bubbleParent",
                "attributeSet",
                "domainIdentifier",
                "expirationDate",
                "uniqueIdentifier"
            ],
            "events": []
        },
        "Ti.App.iOS.SearchableItemAttributeSet": {
            "description": "The SearchableItemAttributeSet module defines metadata properties for SearchItem and UserActivity objects.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getDisplayName",
                "setDisplayName",
                "getAlternateNames",
                "setAlternateNames",
                "getPath",
                "setPath",
                "getContentURL",
                "setContentURL",
                "getThumbnailURL",
                "setThumbnailURL",
                "getThumbnailData",
                "setThumbnailData",
                "getRelatedUniqueIdentifier",
                "setRelatedUniqueIdentifier",
                "getMetadataModificationDate",
                "setMetadataModificationDate",
                "getContentType",
                "setContentType",
                "getContentTypeTree",
                "setContentTypeTree",
                "getKeywords",
                "setKeywords",
                "getTitle",
                "setTitle",
                "getSubject",
                "setSubject",
                "getTheme",
                "setTheme",
                "getContentDescription",
                "setContentDescription",
                "getIdentifier",
                "setIdentifier",
                "getAudiences",
                "setAudiences",
                "getFileSize",
                "setFileSize",
                "getPageCount",
                "setPageCount",
                "getPageWidth",
                "setPageWidth",
                "getPageHeight",
                "setPageHeight",
                "getSecurityMethod",
                "setSecurityMethod",
                "getCreator",
                "setCreator",
                "getEncodingApplications",
                "setEncodingApplications",
                "getKind",
                "setKind",
                "getFontNames",
                "setFontNames",
                "getAudioSampleRate",
                "setAudioSampleRate",
                "getAudioChannelCount",
                "setAudioChannelCount",
                "getTempo",
                "setTempo",
                "getKeySignature",
                "setKeySignature",
                "getTimeSignature",
                "setTimeSignature",
                "getAudioEncodingApplication",
                "setAudioEncodingApplication",
                "getComposer",
                "setComposer",
                "getLyricist",
                "setLyricist",
                "getAlbum",
                "setAlbum",
                "getArtist",
                "setArtist",
                "getAudioTrackNumber",
                "setAudioTrackNumber",
                "getRecordingDate",
                "setRecordingDate",
                "getMusicalGenre",
                "setMusicalGenre",
                "getGeneralMIDISequence",
                "setGeneralMIDISequence",
                "getMusicalInstrumentCategory",
                "setMusicalInstrumentCategory",
                "getMusicalInstrumentName",
                "setMusicalInstrumentName",
                "getSupportsPhoneCall",
                "setSupportsPhoneCall",
                "getSupportsNavigation",
                "setSupportsNavigation",
                "getContainerTitle",
                "setContainerTitle",
                "getContainerDisplayName",
                "setContainerDisplayName",
                "getContainerIdentifier",
                "setContainerIdentifier",
                "getContainerOrder",
                "setContainerOrder",
                "getEditors",
                "setEditors",
                "getParticipants",
                "setParticipants",
                "getProjects",
                "setProjects",
                "getDownloadedDate",
                "setDownloadedDate",
                "getLastUsedDate",
                "setLastUsedDate",
                "getContentCreationDate",
                "setContentCreationDate",
                "getContentModificationDate",
                "setContentModificationDate",
                "getAddedDate",
                "setAddedDate",
                "getContentSources",
                "setContentSources",
                "getComment",
                "setComment",
                "getCopyright",
                "setCopyright",
                "getDuration",
                "setDuration",
                "getContactKeywords",
                "setContactKeywords",
                "getCodecs",
                "setCodecs",
                "getOrganizations",
                "setOrganizations",
                "getMediaTypes",
                "setMediaTypes",
                "getVersion",
                "setVersion",
                "getRole",
                "setRole",
                "getStreamable",
                "setStreamable",
                "getTotalBitRate",
                "setTotalBitRate",
                "getVideoBitRate",
                "setVideoBitRate",
                "getAudioBitRate",
                "setAudioBitRate",
                "getDeliveryType",
                "setDeliveryType",
                "getLanguages",
                "setLanguages",
                "getRights",
                "setRights",
                "getPublishers",
                "setPublishers",
                "getContributors",
                "setContributors",
                "getCoverage",
                "setCoverage",
                "getRating",
                "setRating",
                "getRatingDescription",
                "setRatingDescription",
                "getPlayCount",
                "setPlayCount",
                "getInformation",
                "setInformation",
                "getDirector",
                "setDirector",
                "getProducer",
                "setProducer",
                "getGenre",
                "setGenre",
                "getPerformers",
                "setPerformers",
                "getOriginalFormat",
                "setOriginalFormat",
                "getOriginalSource",
                "setOriginalSource",
                "getLocal",
                "setLocal",
                "getContentRating",
                "setContentRating",
                "getUrl",
                "setUrl"
            ],
            "properties": [
                "bubbleParent",
                "itemContentType",
                "displayName",
                "alternateNames",
                "path",
                "contentURL",
                "thumbnailURL",
                "thumbnailData",
                "relatedUniqueIdentifier",
                "metadataModificationDate",
                "contentType",
                "contentTypeTree",
                "keywords",
                "title",
                "subject",
                "theme",
                "contentDescription",
                "identifier",
                "audiences",
                "fileSize",
                "pageCount",
                "pageWidth",
                "pageHeight",
                "securityMethod",
                "creator",
                "encodingApplications",
                "kind",
                "fontNames",
                "audioSampleRate",
                "audioChannelCount",
                "tempo",
                "keySignature",
                "timeSignature",
                "audioEncodingApplication",
                "composer",
                "lyricist",
                "album",
                "artist",
                "audioTrackNumber",
                "recordingDate",
                "musicalGenre",
                "generalMIDISequence",
                "musicalInstrumentCategory",
                "musicalInstrumentName",
                "supportsPhoneCall",
                "supportsNavigation",
                "containerTitle",
                "containerDisplayName",
                "containerIdentifier",
                "containerOrder",
                "editors",
                "participants",
                "projects",
                "downloadedDate",
                "lastUsedDate",
                "contentCreationDate",
                "contentModificationDate",
                "addedDate",
                "contentSources",
                "comment",
                "copyright",
                "duration",
                "contactKeywords",
                "codecs",
                "organizations",
                "mediaTypes",
                "version",
                "role",
                "streamable",
                "totalBitRate",
                "videoBitRate",
                "audioBitRate",
                "deliveryType",
                "languages",
                "rights",
                "publishers",
                "contributors",
                "coverage",
                "rating",
                "ratingDescription",
                "playCount",
                "information",
                "director",
                "producer",
                "genre",
                "performers",
                "originalFormat",
                "originalSource",
                "local",
                "contentRating",
                "url"
            ],
            "events": []
        },
        "Ti.App.iOS.UserActivity": {
            "description": "The UserActivity module is used to enable device Handoff and to create User Activities.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addContentAttributeSet",
                "becomeCurrent",
                "invalidate",
                "resignCurrent",
                "isSupported",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getActivityType",
                "setActivityType",
                "getEligibleForPublicIndexing",
                "setEligibleForPublicIndexing",
                "getEligibleForSearch",
                "setEligibleForSearch",
                "getEligibleForHandoff",
                "setEligibleForHandoff",
                "getExpirationDate",
                "setExpirationDate",
                "getKeywords",
                "setKeywords",
                "getNeedsSave",
                "setNeedsSave",
                "getRequiredUserInfoKeys",
                "setRequiredUserInfoKeys",
                "getSupported",
                "setSupported",
                "getTitle",
                "setTitle",
                "getUserInfo",
                "setUserInfo",
                "getWebpageURL",
                "setWebpageURL"
            ],
            "properties": [
                "bubbleParent",
                "activityType",
                "eligibleForPublicIndexing",
                "eligibleForSearch",
                "eligibleForHandoff",
                "expirationDate",
                "keywords",
                "needsSave",
                "requiredUserInfoKeys",
                "supported",
                "title",
                "userInfo",
                "webpageURL"
            ],
            "events": [
                "useractivitywillsave",
                "useractivitywascontinued"
            ]
        },
        "Ti.App.iOS.UserDefaults": {
            "description": "The UserDefaults module is used for storing application-related data in property/value pairs \nthat persist beyond application sessions and device power cycles. UserDefaults allows the suiteName\nof the UserDefaults to be specified at creation time.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBool",
                "getDouble",
                "getInt",
                "getList",
                "getObject",
                "getString",
                "hasProperty",
                "listProperties",
                "removeProperty",
                "setBool",
                "setDouble",
                "setInt",
                "setList",
                "setObject",
                "setString",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getSuiteName",
                "setSuiteName"
            ],
            "properties": [
                "bubbleParent",
                "suiteName"
            ],
            "events": [
                "change"
            ]
        },
        "Ti.App.iOS.UserNotificationAction": {
            "description": "An action the user selects in response to an interactive notification.",
            "functions": [
                "getApiName",
                "getActivationMode",
                "setActivationMode",
                "getBehavior",
                "setBehavior"
            ],
            "properties": [
                "activationMode",
                "behavior",
                "authenticationRequired",
                "destructive",
                "identifier",
                "title"
            ],
            "events": []
        },
        "Ti.App.iOS.UserNotificationCategory": {
            "description": "A set of notification actions to associate with a notification.",
            "functions": [
                "getApiName"
            ],
            "properties": [
                "actionsForDefaultContext",
                "actionsForMinimalContext",
                "identifier"
            ],
            "events": []
        },
        "Ti.App.iOS": {
            "description": "The top-level App iOS module, available only to iOS devices, that includes the facilities to\ncreate and manage local notifications and background services.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createUserDefaults",
                "cancelAllLocalNotifications",
                "cancelLocalNotification",
                "registerBackgroundService",
                "registerUserNotificationSettings",
                "scheduleLocalNotification",
                "setMinimumBackgroundFetchInterval",
                "endBackgroundHandler",
                "sendWatchExtensionReply",
                "createSearchableIndex",
                "createSearchableItem",
                "createSearchableItemAttributeSet",
                "createUserActivity",
                "createUserNotificationAction",
                "createUserNotificationCategory",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getCurrentUserNotificationSettings",
                "getSupportedUserActivityTypes",
                "getApplicationOpenSettingsURL"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": [
                "notification",
                "localnotificationaction",
                "remotenotificationaction",
                "backgroundfetch",
                "silentpush",
                "backgroundtransfer",
                "downloadprogress",
                "downloadcompleted",
                "sessioncompleted",
                "sessioneventscompleted",
                "usernotificationsettings",
                "watchkitextensionrequest",
                "continueactivity",
                "shortcutitemclick"
            ]
        },
        "NotificationParams": {
            "description": "Dictionary object of parameters used to create a notification using\n<a href=\"Titanium.App.iOS.scheduleLocalNotification\">scheduleLocalNotification</a>.",
            "functions": [],
            "properties": [
                "alertAction",
                "alertBody",
                "alertLaunchImage",
                "badge",
                "category",
                "date",
                "repeat",
                "sound",
                "timezone",
                "userInfo"
            ],
            "events": []
        },
        "UserNotificationSettings": {
            "description": "Dictionary object of parameters used to register the application with local notifications using\nthe <a href=\"Titanium.App.iOS.registerUserNotificationSettings\">registerUserNotificationSettings</a> method.\n\nTo retrieve the current notification settings, use the\n<a href=\"Titanium.App.iOS.currentUserNotificationSettings\">currentUserNotificationSettings</a> property.",
            "functions": [],
            "properties": [
                "types",
                "categories"
            ],
            "events": []
        },
        "Ti.Blob": {
            "description": "A container for binary data.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "imageAsCropped",
                "imageAsResized",
                "imageAsThumbnail",
                "imageWithAlpha",
                "imageWithRoundedCorner",
                "imageWithTransparentBorder",
                "append",
                "toString",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getFile",
                "getHeight",
                "getLength",
                "getMimeType",
                "getNativePath",
                "getSize",
                "getText",
                "getWidth"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "ImageAsCroppedDict": {
            "description": "Simple object used to specify options for <a href=\"Titanium.Blob.imageAsCropped\">imageAsCropped</a>.",
            "functions": [],
            "properties": [
                "width",
                "height",
                "x",
                "y"
            ],
            "events": []
        },
        "Ti.BlobStream": {
            "description": "Wrapper around <a href=\"Titanium.Blob\">Blob</a> that implements the <a href=\"Titanium.IOStream\">IOStream</a> interface.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "read",
                "write",
                "isWritable",
                "isReadable",
                "close",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Buffer": {
            "description": "Buffer is a mutable, resizable container for raw data.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "append",
                "insert",
                "copy",
                "clone",
                "fill",
                "clear",
                "release",
                "toString",
                "toBlob",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getLength",
                "setLength",
                "getValue",
                "setValue",
                "getType",
                "setType",
                "getByteOrder",
                "setByteOrder"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "length",
                "value",
                "type",
                "byteOrder"
            ],
            "events": []
        },
        "Ti.BufferStream": {
            "description": "Wrapper around <a href=\"Titanium.Buffer\">Buffer</a> that implements the <a href=\"Titanium.IOStream\">IOStream</a> interface.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "read",
                "write",
                "isWritable",
                "isReadable",
                "close",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Calendar.Alert": {
            "description": "An object that represents a single alert for an event in an calendar.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAbsoluteDate",
                "setAbsoluteDate",
                "getRelativeOffset",
                "setRelativeOffset",
                "getAlarmTime",
                "getBegin",
                "getEnd",
                "getEventId",
                "getId",
                "getMinutes",
                "getState"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "absoluteDate",
                "relativeOffset"
            ],
            "events": []
        },
        "Ti.Calendar": {
            "description": "The Calendar module provides an API for accessing the native calendar functionality.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getCalendarById",
                "hasCalendarPermissions",
                "requestCalendarPermissions",
                "requestEventsAuthorization",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getEventsAuthorization",
                "getAllAlerts",
                "getAllCalendars",
                "getAllEditableCalendars",
                "getSelectableCalendars",
                "getDefaultCalendar"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": [
                "change"
            ]
        },
        "EventsAuthorizationResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "Ti.Calendar.Calendar": {
            "description": "An object that represents a single calendar.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createEvent",
                "getEventById",
                "getEventsBetweenDates",
                "getEventsInDate",
                "getEventsInMonth",
                "getEventsInYear",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getHidden",
                "getId",
                "getName",
                "getSelected"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Calendar.Event": {
            "description": "An object that represents a single event in a calendar.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createAlert",
                "createReminder",
                "getExtendedProperty",
                "setExtendedProperty",
                "createRecurrenceRule",
                "save",
                "remove",
                "refresh",
                "addRecurrenceRule",
                "removeRecurrenceRule",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAlerts",
                "setAlerts",
                "getAllDay",
                "setAllDay",
                "getBegin",
                "setBegin",
                "getNotes",
                "setNotes",
                "getDescription",
                "getEnd",
                "setEnd",
                "getExtendedProperties",
                "getHasAlarm",
                "getId",
                "getLocation",
                "setLocation",
                "getReminders",
                "getStatus",
                "getAvailability",
                "getIsDetached",
                "getTitle",
                "setTitle",
                "getRecurrenceRule",
                "setRecurrenceRule",
                "getRecurrenceRules",
                "setRecurrenceRules",
                "getVisibility"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "alerts",
                "allDay",
                "begin",
                "notes",
                "end",
                "location",
                "title",
                "recurrenceRule",
                "recurrenceRules"
            ],
            "events": []
        },
        "Ti.Calendar.RecurrenceRule": {
            "description": "An object that is used to describe the recurrence pattern for a recurring event.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getCalendarID",
                "getFrequency",
                "getInterval",
                "getDaysOfTheWeek",
                "getDaysOfTheMonth",
                "getMonthsOfTheYear",
                "getWeeksOfTheYear",
                "getDaysOfTheYear",
                "getSetPositions",
                "getEnd"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "daysOfTheWeekDictionary": {
            "description": "Dictionary containing <code>daysOfWeek</code> and <code>week</code>.",
            "functions": [],
            "properties": [
                "daysOfWeek",
                "week"
            ],
            "events": []
        },
        "recurrenceEndDictionary": {
            "description": "Dictionary containing either <code>endDate</code> or <code>occurrenceCount</code> property.",
            "functions": [],
            "properties": [
                "endDate",
                "occurrenceCount"
            ],
            "events": []
        },
        "Ti.Calendar.Reminder": {
            "description": "An object that represents a single reminder for an event in a calendar.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getId",
                "getMethod",
                "getMinutes"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Codec": {
            "description": "A module for translating between primitive types and raw byte streams.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getNativeByteOrder",
                "encodeNumber",
                "decodeNumber",
                "encodeString",
                "decodeString",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "EncodeNumberDict": {
            "description": "Named parameters for <a href=\"Titanium.Codec.encodeNumber\">encodeNumber</a>.",
            "functions": [],
            "properties": [
                "source",
                "dest",
                "type",
                "position",
                "byteOrder"
            ],
            "events": []
        },
        "DecodeNumberDict": {
            "description": "Named parameters for <a href=\"Titanium.Codec.decodeNumber\">decodeNumber</a>.",
            "functions": [],
            "properties": [
                "source",
                "type",
                "position",
                "byteOrder"
            ],
            "events": []
        },
        "EncodeStringDict": {
            "description": "Named parameters for <a href=\"Titanium.Codec.encodeString\">encodeString</a>.",
            "functions": [],
            "properties": [
                "source",
                "dest",
                "destPosition",
                "sourcePosition",
                "sourceLength",
                "charset"
            ],
            "events": []
        },
        "DecodeStringDict": {
            "description": "Named parameters for <a href=\"Titanium.Codec.decodeString\">decodeString</a>.",
            "functions": [],
            "properties": [
                "source",
                "position",
                "length",
                "charset"
            ],
            "events": []
        },
        "Ti.Contacts": {
            "description": "The top-level Contacts module, used for accessing and modifying the system contacts address book.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "hasContactsPermissions",
                "requestContactsPermissions",
                "createGroup",
                "createPerson",
                "getAllGroups",
                "getAllPeople",
                "getGroupByID",
                "getGroupByIdentifier",
                "getPeopleWithName",
                "getPersonByID",
                "getPersonByIdentifier",
                "removeGroup",
                "removePerson",
                "requestAuthorization",
                "revert",
                "save",
                "showContacts",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getContactsAuthorization"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": [
                "reload"
            ]
        },
        "showContactsParams": {
            "description": "Dictionary of options for the <a href=\"Titanium.Contacts.showContacts\">showContacts</a> method.",
            "functions": [],
            "properties": [
                "animated",
                "fields",
                "cancel",
                "selectedPerson",
                "selectedProperty"
            ],
            "events": []
        },
        "ContactsAuthorizationResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "Ti.Contacts.Group": {
            "description": "An object which represents a group in the system contacts address book.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "add",
                "members",
                "remove",
                "sortedMembers",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getIdentifier",
                "getName",
                "setName",
                "getRecordId",
                "setRecordId"
            ],
            "properties": [
                "bubbleParent",
                "name",
                "recordId"
            ],
            "events": []
        },
        "Ti.Contacts.Person": {
            "description": "An object that represents a contact record for a person or organization in the system contacts \naddress book.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getIdentifier",
                "getAddress",
                "setAddress",
                "getAlternateBirthday",
                "setAlternateBirthday",
                "getBirthday",
                "setBirthday",
                "getCreated",
                "getDate",
                "setDate",
                "getDepartment",
                "setDepartment",
                "getEmail",
                "setEmail",
                "getFirstName",
                "setFirstName",
                "getFirstPhonetic",
                "setFirstPhonetic",
                "getFullName",
                "getId",
                "getImage",
                "setImage",
                "getInstantMessage",
                "setInstantMessage",
                "getJobTitle",
                "setJobTitle",
                "getKind",
                "setKind",
                "getLastName",
                "setLastName",
                "getLastPhonetic",
                "setLastPhonetic",
                "getMiddleName",
                "setMiddleName",
                "getMiddlePhonetic",
                "setMiddlePhonetic",
                "getModified",
                "getNickname",
                "setNickname",
                "getNote",
                "setNote",
                "getOrganization",
                "setOrganization",
                "getPhone",
                "setPhone",
                "getPrefix",
                "getRecordId",
                "setRecordId",
                "getRelatedNames",
                "setRelatedNames",
                "getSocialProfile",
                "setSocialProfile",
                "getSuffix",
                "getUrl",
                "setUrl"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "address",
                "alternateBirthday",
                "birthday",
                "date",
                "department",
                "email",
                "firstName",
                "firstPhonetic",
                "image",
                "instantMessage",
                "jobTitle",
                "kind",
                "lastName",
                "lastPhonetic",
                "middleName",
                "middlePhonetic",
                "nickname",
                "note",
                "organization",
                "phone",
                "recordId",
                "relatedNames",
                "socialProfile",
                "url"
            ],
            "events": []
        },
        "Ti.Database.DB": {
            "description": "The <code>Database</code> instance returned by <a href=\"Titanium.Database.open\">open</a> or <a href=\"Titanium.Database.install\">install</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "close",
                "execute",
                "remove",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getFile",
                "getLastInsertRowId",
                "setLastInsertRowId",
                "getName",
                "setName",
                "getRowsAffected",
                "setRowsAffected"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "lastInsertRowId",
                "name",
                "rowsAffected"
            ],
            "events": []
        },
        "Ti.Database": {
            "description": "The top-level <code>Database</code> module, used for creating and accessing the\nin-application SQLite database.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "install",
                "open",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Database.ResultSet": {
            "description": "The ResultSet instance returned by <a href=\"Titanium.Database.DB.execute\">execute</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "fieldCount",
                "close",
                "field",
                "fieldByName",
                "fieldName",
                "getFieldName",
                "isValidRow",
                "next",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getFieldCount",
                "getRowCount",
                "getValidRow"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "ErrorResponse": {
            "description": "Properties used in any event or callback which needs to report a success or failure.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "SuccessResponse": {
            "description": "Properties used in any event or callback which needs to report a success.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "FailureResponse": {
            "description": "Properties used in any event or callback which needs to report a failure.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "Ti.Event": {
            "description": "The base type for all Titanium events.",
            "functions": [],
            "properties": [
                "cancelBubble"
            ],
            "events": []
        },
        "FacebookGraphResponsev1": {
            "description": "Argument passed to the graph API callback, in response to a\n<a href=\"Titanium.Facebook.requestWithGraphPath\">requestWithGraphPath</a> call.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "path",
                "result"
            ],
            "events": []
        },
        "FacebookDialogResponsev1": {
            "description": "Argument passed to the dialog callback when a dialog is completed or canceled.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "cancelled",
                "result"
            ],
            "events": []
        },
        "FacebookRESTResponsev1": {
            "description": "Argument passed to the REST API callback when a request completes (successfully\nor unsuccessfully).",
            "functions": [],
            "properties": [
                "success",
                "error",
                "method",
                "result"
            ],
            "events": []
        },
        "Ti.Filesystem.File": {
            "description": "Object representing a path to a file or directory in the device's persistent storage.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getProtectionKey",
                "setProtectionKey",
                "getParent",
                "append",
                "copy",
                "createDirectory",
                "createFile",
                "createTimestamp",
                "deleteDirectory",
                "deleteFile",
                "exists",
                "extension",
                "getDirectoryListing",
                "isDirectory",
                "isFile",
                "modificationTimestamp",
                "move",
                "open",
                "read",
                "rename",
                "resolve",
                "spaceAvailable",
                "write",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getWriteable",
                "getExecutable",
                "getHidden",
                "setHidden",
                "getName",
                "getNativePath",
                "getParent",
                "getReadonly",
                "getRemoteBackup",
                "setRemoteBackup",
                "getSize",
                "getSymbolicLink",
                "getWritable"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "hidden",
                "remoteBackup"
            ],
            "events": []
        },
        "Ti.Filesystem.FileStream": {
            "description": "Wrapper around <code>Titanium.Filesystem.File</code> that implements the <code>Titanium.IOStream</code> interface",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "read",
                "write",
                "isWritable",
                "isReadable",
                "close",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Filesystem": {
            "description": "The top level filesystem module, used to access files and directories on the device.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "directoryForSuite",
                "getFile",
                "createTempDirectory",
                "createTempFile",
                "isExternalStoragePresent",
                "openStream",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getResRawDirectory",
                "getSeparator",
                "getLineEnding",
                "getApplicationCacheDirectory",
                "getApplicationDataDirectory",
                "getApplicationDirectory",
                "getApplicationSupportDirectory",
                "getExternalStorageDirectory",
                "getResourcesDirectory",
                "getTempDirectory"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Geolocation.Android": {
            "description": "Module for Android-specific geolocation functionality.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addLocationProvider",
                "removeLocationProvider",
                "addLocationRule",
                "removeLocationRule",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getManualMode",
                "setManualMode",
                "createLocationProvider",
                "createLocationRule"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "manualMode"
            ],
            "events": []
        },
        "Ti.Geolocation.Android.LocationProvider": {
            "description": "Represents a source of location information, such as GPS.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getName",
                "setName",
                "getMinUpdateTime",
                "setMinUpdateTime",
                "getMinUpdateDistance",
                "setMinUpdateDistance"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "name",
                "minUpdateTime",
                "minUpdateDistance"
            ],
            "events": []
        },
        "Ti.Geolocation.Android.LocationRule": {
            "description": "A location rule to filter the results returned by location providers.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getName",
                "setName",
                "getAccuracy",
                "setAccuracy",
                "getMinAge",
                "setMinAge",
                "getMaxAge",
                "setMaxAge"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "name",
                "accuracy",
                "minAge",
                "maxAge"
            ],
            "events": []
        },
        "Ti.Geolocation": {
            "description": "The top level Geolocation module. The Geolocation module is used for accessing device location based information.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "hasLocationPermissions",
                "requestLocationPermissions",
                "forwardGeocoder",
                "getCurrentHeading",
                "getCurrentPosition",
                "reverseGeocoder",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getFrequency",
                "setFrequency",
                "getPreferredProvider",
                "setPreferredProvider",
                "getPurpose",
                "setPurpose",
                "getShowCalibration",
                "setShowCalibration",
                "getTrackSignificantLocationChange",
                "setTrackSignificantLocationChange",
                "getAllowsBackgroundLocationUpdates",
                "setAllowsBackgroundLocationUpdates",
                "getPauseLocationUpdateAutomatically",
                "setPauseLocationUpdateAutomatically",
                "getAccuracy",
                "setAccuracy",
                "getActivityType",
                "setActivityType",
                "getDistanceFilter",
                "setDistanceFilter",
                "getHeadingFilter",
                "setHeadingFilter",
                "getHasCompass",
                "getLocationServicesAuthorization",
                "setLocationServicesAuthorization",
                "getLocationServicesEnabled",
                "getLastGeolocation"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "frequency",
                "preferredProvider",
                "purpose",
                "showCalibration",
                "trackSignificantLocationChange",
                "allowsBackgroundLocationUpdates",
                "pauseLocationUpdateAutomatically",
                "accuracy",
                "activityType",
                "distanceFilter",
                "headingFilter",
                "locationServicesAuthorization"
            ],
            "events": [
                "calibration",
                "locationupdatepaused",
                "locationupdateresumed",
                "authorization",
                "location",
                "heading"
            ]
        },
        "LocationResults": {
            "description": "Argument passed to the <a href=\"Titanium.Geolocation.getCurrentPosition\">getCurrentPosition</a> callback.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "provider",
                "coords"
            ],
            "events": []
        },
        "LocationCoordinates": {
            "description": "Simple object holding the data for a location update.",
            "functions": [],
            "properties": [
                "latitude",
                "longitude",
                "altitude",
                "accuracy",
                "altitudeAccuracy",
                "heading",
                "speed",
                "timestamp",
                "floor"
            ],
            "events": []
        },
        "LocationCoordinatesFloor": {
            "description": "Simple object holding floor of the building on which the user is located.\nIn places where floor information can be determined.",
            "functions": [],
            "properties": [
                "level"
            ],
            "events": []
        },
        "ForwardGeocodeResponse": {
            "description": "Simple object returned in the callback from the \n<a href=\"Titanium.Geolocation.forwardGeocoder\">forwardGeocoder</a> method.\n\nNote that Android includes a number of extra fields.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "accuracy",
                "longitude",
                "latitude",
                "street",
                "street1",
                "city",
                "region1",
                "region2",
                "postalCode",
                "country",
                "countryCode",
                "country_code",
                "displayAddress",
                "address"
            ],
            "events": []
        },
        "HeadingResponse": {
            "description": "Argument passed to the <a href=\"Titanium.Geolocation.getCurrentHeading\">getCurrentHeading</a> callback.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "heading"
            ],
            "events": []
        },
        "HeadingData": {
            "description": "Simple object holding compass heading data.",
            "functions": [],
            "properties": [
                "accuracy",
                "magneticHeading",
                "trueHeading",
                "timestamp",
                "x",
                "y",
                "z"
            ],
            "events": []
        },
        "LocationProviderDict": {
            "description": "Simple object describing a location provider.",
            "functions": [],
            "properties": [
                "accuracy",
                "name",
                "power"
            ],
            "events": []
        },
        "ReverseGeocodeResponse": {
            "description": "Simple object returned in the callback from the \n<a href=\"Titanium.Geolocation.reverseGeocoder\">reverseGeocoder</a> method.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "places"
            ],
            "events": []
        },
        "GeocodedAddress": {
            "description": "Simple object representing a place, returned in the callback from the \n<a href=\"Titanium.Geolocation.reverseGeocoder\">reverseGeocoder</a> method.",
            "functions": [],
            "properties": [
                "street",
                "street1",
                "city",
                "region1",
                "region2",
                "postalCode",
                "zipcode",
                "country",
                "countryCode",
                "country_code",
                "longitude",
                "latitude",
                "displayAddress",
                "address"
            ],
            "events": []
        },
        "LocationAuthorizationResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "Ti.Geolocation.MobileWeb": {
            "description": "The Mobile Web specific geolocation capabilities.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getApiName",
                "getLocationTimeout",
                "setLocationTimeout",
                "getMaximumLocationAge",
                "setMaximumLocationAge",
                "getMaximumHeadingAge",
                "setMaximumHeadingAge",
                "getForwardGeocoderTimeout",
                "setForwardGeocoderTimeout",
                "getReverseGeocoderTimeout",
                "setReverseGeocoderTimeout"
            ],
            "properties": [
                "locationTimeout",
                "maximumLocationAge",
                "maximumHeadingAge",
                "forwardGeocoderTimeout",
                "reverseGeocoderTimeout"
            ],
            "events": []
        },
        "Ti.Gesture": {
            "description": "The Gesture module is responsible for high-level device gestures such as orientation changes \nand shake gestures.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getLandscape",
                "getPortrait",
                "isLandscape",
                "isPortrait",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getOrientation"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": [
                "orientationchange",
                "shake"
            ]
        },
        "Ti.IOStream": {
            "description": "IOStream is the interface that all stream types implement.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "read",
                "write",
                "isWritable",
                "isReadable",
                "close",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Locale": {
            "description": "The top level Locale module.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "formatTelephoneNumber",
                "getCurrencyCode",
                "getCurrencySymbol",
                "getLocaleCurrencySymbol",
                "getString",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getCurrentCountry",
                "getCurrentLanguage",
                "getCurrentLocale"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "MapRegionType": {
            "description": "Simple object representing a map location and zoom level.",
            "functions": [],
            "properties": [
                "longitude",
                "latitude",
                "longitudeDelta",
                "latitudeDelta"
            ],
            "events": []
        },
        "MapLocationType": {
            "description": "Simple object used as an argument to <a href=\"Titanium.Map.View.setLocation\">setLocation</a>.",
            "functions": [],
            "properties": [
                "longitude",
                "latitude",
                "longitudeDelta",
                "latitudeDelta",
                "animate",
                "regionFit"
            ],
            "events": []
        },
        "MapRouteType": {
            "description": "Simple object defining a map route.",
            "functions": [],
            "properties": [
                "name",
                "points",
                "color",
                "width"
            ],
            "events": []
        },
        "MapPointType": {
            "description": "Simple object representing a point on the map.",
            "functions": [],
            "properties": [
                "longitude",
                "latitude"
            ],
            "events": []
        },
        "Ti.Media.Android": {
            "description": "Android-specific media-related functionality.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "scanMediaFiles",
                "setSystemWallpaper",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "MediaScannerResponse": {
            "description": "Simple object passed to the <a href=\"Titanium.Media.Android.scanMediaFiles\">scanMediaFiles</a> callback.",
            "functions": [],
            "properties": [
                "path",
                "uri"
            ],
            "events": []
        },
        "Ti.Media.AudioPlayer": {
            "description": "An audio player object used for streaming audio to the device, and low-level control of the audio playback.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "isPaused",
                "isPlaying",
                "pause",
                "play",
                "release",
                "start",
                "stateDescription",
                "stop",
                "getPaused",
                "setPaused",
                "getPlaying",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAllowBackground",
                "setAllowBackground",
                "getBitRate",
                "setBitRate",
                "getDuration",
                "getIdle",
                "getPaused",
                "setPaused",
                "getPlaying",
                "getProgress",
                "getState",
                "getUrl",
                "setUrl",
                "getVolume",
                "setVolume",
                "getWaiting",
                "getBufferSize",
                "setBufferSize",
                "getTime",
                "setTime"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "allowBackground",
                "bitRate",
                "paused",
                "url",
                "volume",
                "bufferSize",
                "time"
            ],
            "events": [
                "progress",
                "change",
                "complete",
                "error"
            ]
        },
        "Ti.Media.AudioRecorder": {
            "description": "An audio recorder object used for recording audio from the device microphone.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "pause",
                "resume",
                "start",
                "stop",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getCompression",
                "setCompression",
                "getFormat",
                "setFormat",
                "getPaused",
                "getRecording",
                "getStopped"
            ],
            "properties": [
                "bubbleParent",
                "compression",
                "format"
            ],
            "events": []
        },
        "Ti.Media.Item": {
            "description": "A representation of a media item returned by <a href=\"Titanium.Media.openMusicLibrary\">openMusicLibrary</a> or <a href=\"Titanium.Media.queryMusicLibrary\">queryMusicLibrary</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAlbumArtist",
                "getAlbumTitle",
                "getAlbumTrackCount",
                "getAlbumTrackNumber",
                "getArtist",
                "getArtwork",
                "getComposer",
                "getDiscCount",
                "getDiscNumber",
                "getGenre",
                "getIsCompilation",
                "getLyrics",
                "getMediaType",
                "getPlayCount",
                "getPlaybackDuration",
                "getPodcastTitle",
                "getRating",
                "getSkipCount",
                "getTitle"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.Media": {
            "description": "The top-level Media module.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "hasCameraPermissions",
                "requestCameraPermissions",
                "requestCameraAccess",
                "beep",
                "hideCamera",
                "hideMusicLibrary",
                "isMediaTypeSupported",
                "openMusicLibrary",
                "openPhotoGallery",
                "previewImage",
                "saveToPhotoGallery",
                "setOverrideAudioRoute",
                "showCamera",
                "queryMusicLibrary",
                "startMicrophoneMonitor",
                "stopMicrophoneMonitor",
                "takePicture",
                "startVideoCapture",
                "stopVideoCapture",
                "switchCamera",
                "takeScreenshot",
                "vibrate",
                "requestAuthorization",
                "createAudioPlayer",
                "createAudioRecorder",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAudioLineType",
                "getAudioSessionMode",
                "setAudioSessionMode",
                "getCameraAuthorizationStatus",
                "getAppMusicPlayer",
                "getAudioPlaying",
                "getAudioSessionCategory",
                "setAudioSessionCategory",
                "getAvailableCameras",
                "getAvailableCameraMediaTypes",
                "setAvailableCameraMediaTypes",
                "getAvailablePhotoGalleryMediaTypes",
                "setAvailablePhotoGalleryMediaTypes",
                "getAvailablePhotoMediaTypes",
                "setAvailablePhotoMediaTypes",
                "getAverageMicrophonePower",
                "setAverageMicrophonePower",
                "getCameraFlashMode",
                "setCameraFlashMode",
                "getCanRecord",
                "getCurrentRoute",
                "getIsCameraSupported",
                "getPeakMicrophonePower",
                "getSystemMusicPlayer",
                "getVolume",
                "createSound",
                "createVideoPlayer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "audioSessionMode",
                "audioSessionCategory",
                "availableCameraMediaTypes",
                "availablePhotoGalleryMediaTypes",
                "availablePhotoMediaTypes",
                "averageMicrophonePower",
                "cameraFlashMode"
            ],
            "events": [
                "linechange",
                "recordinginput",
                "routechange",
                "volume"
            ]
        },
        "MusicLibraryOptionsType": {
            "description": "Simple object for specifying options to <a href=\"Titanium.Media.openMusicLibrary\">openMusicLibrary</a>.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "cancel",
                "autohide",
                "animated",
                "mediaTypes",
                "allowMultipleSelections"
            ],
            "events": []
        },
        "MusicLibraryResponseType": {
            "description": "Simple object passed to the <a href=\"Titanium.Media.openMusicLibrary\">openMusicLibrary</a>\n<code>success</code> callback function.",
            "functions": [],
            "properties": [
                "representative",
                "items",
                "types"
            ],
            "events": []
        },
        "MediaQueryType": {
            "description": "A specifier for a media library query. By default, filters perform an exact match.",
            "functions": [],
            "properties": [
                "grouping",
                "mediaType",
                "title",
                "albumTitle",
                "artist",
                "albumArtist",
                "genre",
                "composer",
                "isCompilation"
            ],
            "events": []
        },
        "MediaQueryInfoType": {
            "description": "A full query descriptor for a filtering predicate.",
            "functions": [],
            "properties": [
                "value",
                "exact"
            ],
            "events": []
        },
        "CameraOptionsType": {
            "description": "Simple object for specifying options to <a href=\"Titanium.Media.showCamera\">showCamera</a>.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "cancel",
                "autohide",
                "animated",
                "saveToPhotoGallery",
                "allowEditing",
                "mediaTypes",
                "videoMaximumDuration",
                "videoQuality",
                "showControls",
                "overlay",
                "transform",
                "inPopOver",
                "popoverView",
                "arrowDirection",
                "autorotate"
            ],
            "events": []
        },
        "PhotoGalleryOptionsType": {
            "description": "Simple object for specifying options to \n<a href=\"Titanium.Media.openPhotoGallery\">openPhotoGallery</a>.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "cancel",
                "autohide",
                "animated",
                "allowEditing",
                "mediaTypes",
                "popoverView",
                "arrowDirection"
            ],
            "events": []
        },
        "CameraMediaItemType": {
            "description": "A media object from the camera or photo gallery.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "media",
                "mediaType",
                "cropRect"
            ],
            "events": []
        },
        "CropRectType": {
            "description": "Simple object for describing the crop rectangle for an image.",
            "functions": [],
            "properties": [
                "x",
                "y",
                "width",
                "height"
            ],
            "events": []
        },
        "PreviewImageOptions": {
            "description": "Options passed to <a href=\"Titanium.Media.previewImage\">previewImage</a>.",
            "functions": [],
            "properties": [
                "image",
                "success",
                "error"
            ],
            "events": []
        },
        "PreviewImageError": {
            "description": "The parameter passed to the <code>error</code> callback of <a href=\"PreviewImageOptions\">PreviewImageOptions</a>.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "message"
            ],
            "events": []
        },
        "ScreenshotResult": {
            "description": "The parameter passed to the <a href=\"Titanium.Media.takeScreenshot\">takeScreenshot</a> callback.",
            "functions": [],
            "properties": [
                "media"
            ],
            "events": []
        },
        "MediaAuthorizationResponse": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "RequestCameraAccessResult": {
            "description": "Argument passed to the callback when a request finishes successfully or erroneously.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "RouteDescription": {
            "description": "An Object describing the current audio route.",
            "functions": [],
            "properties": [
                "inputs",
                "outputs"
            ],
            "events": []
        },
        "Ti.Media.MusicPlayer": {
            "description": "This object represents a music controller.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "pause",
                "play",
                "seekBackward",
                "seekForward",
                "setQueue",
                "skipToBeginning",
                "skipToNext",
                "skipToPrevious",
                "stop",
                "stopSeeking",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getCurrentPlaybackTime",
                "setCurrentPlaybackTime",
                "getNowPlaying",
                "getPlaybackState",
                "getRepeatMode",
                "setRepeatMode",
                "getShuffleMode",
                "setShuffleMode",
                "getVolume",
                "setVolume"
            ],
            "properties": [
                "bubbleParent",
                "currentPlaybackTime",
                "repeatMode",
                "shuffleMode",
                "volume"
            ],
            "events": [
                "playingChange",
                "stateChange",
                "volumeChange",
                "playingchange",
                "statechange",
                "volumechange"
            ]
        },
        "PlayerQueue": {
            "description": "A simple object for specifying a queue of media items.",
            "functions": [],
            "properties": [
                "items"
            ],
            "events": []
        },
        "Ti.Media.Sound": {
            "description": "An object for playing basic audio resources.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "isLooping",
                "isPaused",
                "isPlaying",
                "pause",
                "play",
                "release",
                "reset",
                "setLooping",
                "setPaused",
                "stop",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getDuration",
                "getTime",
                "setTime",
                "getUrl",
                "setUrl",
                "getVolume",
                "setVolume"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "allowBackground",
                "looping",
                "paused",
                "time",
                "url",
                "volume"
            ],
            "events": [
                "interrupted",
                "resume",
                "change",
                "complete",
                "error"
            ]
        },
        "Ti.Media.VideoPlayer": {
            "description": "A native control for playing videos.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "cancelAllThumbnailImageRequests",
                "pause",
                "play",
                "release",
                "requestThumbnailImagesAtTimes",
                "setBackgroundView",
                "stop",
                "thumbnailImageAtTime",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getAllowsAirPlay",
                "setAllowsAirPlay",
                "getAutoplay",
                "setAutoplay",
                "getContentURL",
                "setContentURL",
                "getCurrentPlaybackTime",
                "setCurrentPlaybackTime",
                "getDuration",
                "setDuration",
                "getEndPlaybackTime",
                "setEndPlaybackTime",
                "getFullscreen",
                "setFullscreen",
                "getInitialPlaybackTime",
                "setInitialPlaybackTime",
                "getLoadState",
                "setMedia",
                "getMediaControlStyle",
                "setMediaControlStyle",
                "getMediaTypes",
                "setMediaTypes",
                "getMovieControlMode",
                "setMovieControlMode",
                "getNaturalSize",
                "setNaturalSize",
                "getPlayableDuration",
                "getPlaybackState",
                "getPlaying",
                "getRepeatMode",
                "setRepeatMode",
                "getScalingMode",
                "setScalingMode",
                "getSourceType",
                "setSourceType",
                "getUrl",
                "setUrl",
                "getUseApplicationAudioSession",
                "setUseApplicationAudioSession",
                "getVolume",
                "setVolume"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "allowsAirPlay",
                "autoplay",
                "contentURL",
                "currentPlaybackTime",
                "duration",
                "endPlaybackTime",
                "fullscreen",
                "initialPlaybackTime",
                "media",
                "mediaControlStyle",
                "mediaTypes",
                "movieControlMode",
                "naturalSize",
                "repeatMode",
                "scalingMode",
                "sourceType",
                "url",
                "useApplicationAudioSession",
                "volume"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longpress",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "touchmove",
                "postlayout",
                "durationAvailable",
                "durationavailable",
                "fullscreen",
                "load",
                "loadstate",
                "mediaTypesAvailable",
                "naturalSizeAvailable",
                "playbackState",
                "mediatypesavailable",
                "naturalsizeavailable",
                "playbackstate",
                "playing",
                "preload",
                "resize",
                "sourceChange",
                "sourcechange",
                "complete",
                "error"
            ]
        },
        "ThumbnailResponse": {
            "description": "Simple object passed to the thumbnail callback in response to the\n<a href=\"Titanium.Media.VideoPlayer.requestThumbnailImagesAtTimes\">requestThumbnailImagesAtTimes</a>\nmethod.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "image",
                "time"
            ],
            "events": []
        },
        "MovieSize": {
            "description": "Simple object used to describe the size of a movie.",
            "functions": [],
            "properties": [
                "width",
                "height"
            ],
            "events": []
        },
        "Ti.Network.BonjourBrowser": {
            "description": "A browser for the discovery and retrieval of Bonjour services available on the network.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "search",
                "stopSearch",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getDomain",
                "setDomain",
                "getIsSearching",
                "setIsSearching",
                "getServiceType",
                "setServiceType"
            ],
            "properties": [
                "bubbleParent",
                "domain",
                "isSearching",
                "serviceType"
            ],
            "events": [
                "updatedServices",
                "updatedservices"
            ]
        },
        "Ti.Network.BonjourService": {
            "description": "Describes a service on the network which is published by Bonjour.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "publish",
                "resolve",
                "stop",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getDomain",
                "setDomain",
                "getIsLocal",
                "setIsLocal",
                "getName",
                "setName",
                "getSocket",
                "setSocket",
                "getType",
                "setType"
            ],
            "properties": [
                "bubbleParent",
                "domain",
                "isLocal",
                "name",
                "socket",
                "type"
            ],
            "events": []
        },
        "Ti.Network.Cookie": {
            "description": "Cookie object used to manage the system cookie store and HTTP client cookie store.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "isValid",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getMaxAge",
                "setMaxAge",
                "getComment",
                "setComment",
                "getDomain",
                "setDomain",
                "getExpiryDate",
                "setExpiryDate",
                "getHttponly",
                "setHttponly",
                "getName",
                "getOriginalUrl",
                "setOriginalUrl",
                "getPath",
                "setPath",
                "getSecure",
                "setSecure",
                "getValue",
                "setValue",
                "getVersion",
                "setVersion"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "maxAge",
                "comment",
                "domain",
                "expiryDate",
                "httponly",
                "originalUrl",
                "path",
                "secure",
                "value",
                "version"
            ],
            "events": []
        },
        "Ti.Network.HTTPClient": {
            "description": "HTTP client object that (mostly) implements the XMLHttpRequest specification.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "abort",
                "addAuthFactory",
                "addKeyManager",
                "addTrustManager",
                "clearCookies",
                "getResponseHeader",
                "open",
                "send",
                "setRequestHeader",
                "setTimeout",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAutoEncodeUrl",
                "setAutoEncodeUrl",
                "getAutoRedirect",
                "setAutoRedirect",
                "getCache",
                "setCache",
                "getDomain",
                "setDomain",
                "getEnableKeepAlive",
                "setEnableKeepAlive",
                "getFile",
                "setFile",
                "getOndatastream",
                "setOndatastream",
                "getOnerror",
                "setOnerror",
                "getOnload",
                "setOnload",
                "getOnreadystatechange",
                "setOnreadystatechange",
                "getOnsendstream",
                "setOnsendstream",
                "getPassword",
                "setPassword",
                "getSecurityManager",
                "setSecurityManager",
                "getTimeout",
                "setTimeout",
                "getTlsVersion",
                "setTlsVersion",
                "getUsername",
                "setUsername",
                "getValidatesSecureCertificate",
                "setValidatesSecureCertificate",
                "getWithCredentials",
                "setWithCredentials",
                "getAllResponseHeaders",
                "getConnected",
                "getConnectionType",
                "getLocation",
                "getReadyState",
                "getResponseData",
                "getResponseText",
                "getResponseXML",
                "getStatus",
                "getStatusText"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "autoEncodeUrl",
                "autoRedirect",
                "cache",
                "domain",
                "enableKeepAlive",
                "file",
                "ondatastream",
                "onerror",
                "onload",
                "onreadystatechange",
                "onsendstream",
                "password",
                "securityManager",
                "timeout",
                "tlsVersion",
                "username",
                "validatesSecureCertificate",
                "withCredentials"
            ],
            "events": []
        },
        "SecurityManagerProtocol": {
            "description": "The protocol that the <a href=\"Titanium.Network.HTTPClient.securityManager\">securityManager</a> must implement.",
            "functions": [
                "willHandleURL",
                "connectionDelegateForUrl",
                "getTrustManagers",
                "getKeyManagers"
            ],
            "properties": [],
            "events": []
        },
        "APSConnectionDelegate": {
            "description": "An extension of the <a href=\"https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLConnectionDelegate_Protocol/Reference/Reference.html#//apple_ref/occ/intf/NSURLConnectionDelegate\">NSURLConnectionDelegate</a> protocol to allow users to participate in authentication and resource management for this HTTPClient.",
            "functions": [],
            "properties": [],
            "events": []
        },
        "ReadyStatePayload": {
            "description": "An Object describing the current ready state. See <a href=\"Titanium.Network.HTTPClient.onreadystatechange\">onreadystatechange</a> for more information.",
            "functions": [],
            "properties": [
                "readyState"
            ],
            "events": []
        },
        "Ti.Network": {
            "description": "The top level network module.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addConnectivityListener",
                "createTCPSocket",
                "decodeURIComponent",
                "encodeURIComponent",
                "removeConnectivityListener",
                "addHTTPCookie",
                "addSystemCookie",
                "createBonjourBrowser",
                "createBonjourService",
                "getHTTPCookies",
                "getHTTPCookiesForDomain",
                "getSystemCookies",
                "removeAllHTTPCookies",
                "removeAllSystemCookies",
                "removeHTTPCookie",
                "removeHTTPCookiesForDomain",
                "removeSystemCookie",
                "registerForPushNotifications",
                "unregisterForPushNotifications",
                "createCookie",
                "createHTTPClient",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAllHTTPCookies",
                "getNetworkType",
                "getNetworkTypeName",
                "getOnline",
                "getRemoteDeviceUUID",
                "getRemoteNotificationTypes",
                "getRemoteNotificationsEnabled",
                "getHttpURLFormatter",
                "setHttpURLFormatter"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "httpURLFormatter"
            ],
            "events": [
                "change"
            ]
        },
        "PushNotificationConfig": {
            "description": "Simple object for specifying push notification options to\n<a href=\"Titanium.Network.registerForPushNotifications\">registerForPushNotifications</a>.",
            "functions": [],
            "properties": [
                "types",
                "success",
                "error",
                "callback"
            ],
            "events": []
        },
        "PushNotificationSuccessArg": {
            "description": "A simple object passed to the \n<a href=\"Titanium.Network.registerForPushNotifications\">registerForPushNotifications</a> success callback.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "type",
                "deviceToken"
            ],
            "events": []
        },
        "PushNotificationErrorArg": {
            "description": "A simple object passed to the \n<a href=\"Titanium.Network.registerForPushNotifications\">registerForPushNotifications</a> error callback.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "type"
            ],
            "events": []
        },
        "PushNotificationData": {
            "description": "A simple object representing a push notification.",
            "functions": [],
            "properties": [
                "data",
                "inBackground"
            ],
            "events": []
        },
        "Ti.Network.Socket": {
            "description": "Socket module, used for creating sockets.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createTCP",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Network.Socket.TCP": {
            "description": "TCP socket that implements the <code>Titanium.IOStream</code> interface.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "read",
                "write",
                "isWritable",
                "isReadable",
                "close",
                "connect",
                "listen",
                "accept",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getHost",
                "setHost",
                "getPort",
                "setPort",
                "getListenQueueSize",
                "setListenQueueSize",
                "getTimeout",
                "setTimeout",
                "getConnected",
                "setConnected",
                "getError",
                "setError",
                "getAccepted",
                "setAccepted",
                "getState"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "host",
                "port",
                "listenQueueSize",
                "timeout",
                "connected",
                "error",
                "accepted"
            ],
            "events": []
        },
        "ConnectedCallbackArgs": {
            "description": "Argument object passed to the <a href=\"Titanium.Network.Socket.TCP.connected\">connected</a> callback when the socket connects.",
            "functions": [],
            "properties": [
                "socket"
            ],
            "events": []
        },
        "ErrorCallbackArgs": {
            "description": "Object passed to the error callback when the socket enters the <a href=\"Titanium.Network.Socket.ERROR\">ERROR</a> state.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "socket",
                "errorCode"
            ],
            "events": []
        },
        "AcceptedCallbackArgs": {
            "description": "Argument object passed to the <a href=\"Titanium.Network.Socket.TCP.accepted\">accepted</a>\ncallback when a listener accepts a connection.",
            "functions": [],
            "properties": [
                "socket",
                "inbound"
            ],
            "events": []
        },
        "AcceptDict": {
            "description": "Options object for the <a href=\"Titanium.Network.Socket.TCP.accept\">accept</a> method.",
            "functions": [],
            "properties": [
                "timeout",
                "error"
            ],
            "events": []
        },
        "Ti.Platform.Android": {
            "description": "The Android-specific Platform module, used to access the device's platform-related functionality.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getPhysicalSizeCategory"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Platform.DisplayCaps": {
            "description": "The Display Caps object returned by the <a href=\"Titanium.Platform.displayCaps\">displayCaps</a> property.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getDensity",
                "getDpi",
                "getLogicalDensityFactor",
                "getPlatformHeight",
                "getPlatformWidth",
                "getXdpi",
                "getYdpi"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Platform": {
            "description": "The top-level Platform module.  The Platform module is used to access the device's platform-related \nfunctionality.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createUUID",
                "canOpenURL",
                "openURL",
                "is24HourTimeFormat",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAddress",
                "getArchitecture",
                "getAvailableMemory",
                "getBatteryLevel",
                "getBatteryMonitoring",
                "setBatteryMonitoring",
                "getBatteryState",
                "getId",
                "getLocale",
                "getMacaddress",
                "getManufacturer",
                "getModel",
                "getName",
                "getNetmask",
                "getOsname",
                "getOstype",
                "getProcessorCount",
                "getRuntime",
                "getUsername",
                "getVersion",
                "getDisplayCaps"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "batteryMonitoring"
            ],
            "events": [
                "battery"
            ]
        },
        "Ti.Stream": {
            "description": "Stream module containing stream utility methods.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createStream",
                "read",
                "readAll",
                "write",
                "writeStream",
                "pump",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "CreateStreamArgs": {
            "description": "Argument passed to <a href=\"Titanium.Stream.createStream\">createStream</a>.",
            "functions": [],
            "properties": [
                "source",
                "mode"
            ],
            "events": []
        },
        "ReadCallbackArgs": {
            "description": "Argument passed to the read callback when an asynchronous <a href=\"Titanium.Stream.read\">read</a> operation\nfinishes.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "source",
                "bytesProcessed",
                "errorState",
                "errorDescription"
            ],
            "events": []
        },
        "WriteCallbackArgs": {
            "description": "Argument passed to the write callback when an asynchronous\n<a href=\"Titanium.Stream.write\">write</a> operation\nfinishes.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "source",
                "bytesProcessed",
                "errorState",
                "errorDescription"
            ],
            "events": []
        },
        "WriteStreamCallbackArgs": {
            "description": "Argument passed to the callback when an asynchronous\n<a href=\"Titanium.Stream.writeStream\">writeStream</a> operation finishes.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "fromStream",
                "toStream",
                "bytesProcessed",
                "errorState",
                "errorDescription"
            ],
            "events": []
        },
        "PumpCallbackArgs": {
            "description": "Argument passed to the callback each time the \n<a href=\"Titanium.Stream.pump\">pump</a> operation has new data to deliver.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "source",
                "buffer",
                "bytesProcessed",
                "totalBytesProcessed",
                "errorState",
                "errorDescription"
            ],
            "events": []
        },
        "Titanium": {
            "description": "The top-level Titanium module.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "include",
                "createBuffer",
                "createProxy",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getVersion",
                "getBuildDate",
                "getBuildHash",
                "getUserAgent",
                "setUserAgent"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "userAgent"
            ],
            "events": []
        },
        "CreateBufferArgs": {
            "description": "Arguments to be passed to createBuffer",
            "functions": [],
            "properties": [
                "value",
                "length",
                "type",
                "byteOrder"
            ],
            "events": []
        },
        "Ti.UI._2DMatrix": {
            "description": "The 2D Matrix is an object for holding values for an affine transformation matrix.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "invert",
                "multiply",
                "rotate",
                "scale",
                "translate",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getA",
                "setA",
                "getB",
                "setB",
                "getC",
                "setC",
                "getD",
                "setD",
                "getTx",
                "setTx",
                "getTy",
                "setTy"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "a",
                "b",
                "c",
                "d",
                "tx",
                "ty"
            ],
            "events": []
        },
        "MatrixCreationDict": {
            "description": "Simple object passed to <a href=\"Titanium.UI.create2DMatrix\">create2DMatrix</a> to initialize a matrix.",
            "functions": [],
            "properties": [
                "scale",
                "rotate",
                "anchorPoint"
            ],
            "events": []
        },
        "Ti.UI._3DMatrix": {
            "description": "The 3D Matrix is an object for holding values for a 3D affine transform.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "invert",
                "multiply",
                "rotate",
                "scale",
                "translate",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getM11",
                "setM11",
                "getM12",
                "setM12",
                "getM13",
                "setM13",
                "getM14",
                "setM14",
                "getM21",
                "setM21",
                "getM22",
                "setM22",
                "getM23",
                "setM23",
                "getM24",
                "setM24",
                "getM31",
                "setM31",
                "getM32",
                "setM32",
                "getM33",
                "setM33",
                "getM34",
                "setM34",
                "getM41",
                "setM41",
                "getM42",
                "setM42",
                "getM43",
                "setM43",
                "getM44",
                "setM44"
            ],
            "properties": [
                "bubbleParent",
                "m11",
                "m12",
                "m13",
                "m14",
                "m21",
                "m22",
                "m23",
                "m24",
                "m31",
                "m32",
                "m33",
                "m34",
                "m41",
                "m42",
                "m43",
                "m44"
            ],
            "events": []
        },
        "Ti.UI.ActivityIndicator": {
            "description": "An activity indicator that lets the user know an action is taking place.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "updateLayout",
                "add",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getElevation",
                "setElevation",
                "getPreviewContext",
                "setPreviewContext",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getBottom",
                "setBottom",
                "getHeight",
                "setHeight",
                "getLeft",
                "setLeft",
                "getRight",
                "setRight",
                "getTop",
                "setTop",
                "getWidth",
                "setWidth",
                "getColor",
                "setColor",
                "getFont",
                "setFont",
                "getMessage",
                "setMessage",
                "getMessageid",
                "setMessageid",
                "getStyle",
                "setStyle",
                "getIndicatorColor",
                "setIndicatorColor",
                "getIndicatorDiameter",
                "setIndicatorDiameter"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "elevation",
                "previewContext",
                "translationX",
                "translationY",
                "translationZ",
                "bottom",
                "height",
                "left",
                "right",
                "top",
                "width",
                "color",
                "font",
                "message",
                "messageid",
                "style",
                "indicatorColor",
                "indicatorDiameter"
            ],
            "events": []
        },
        "Ti.UI.ActivityIndicatorStyle": {
            "description": "A set of constants for the styles available for <a href=\"Titanium.UI.ActivityIndicator\">ActivityIndicator</a> objects.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.UI.AlertDialog": {
            "description": "An alert dialog is a modal view that includes an optional title, a message and buttons, \npositioned in the middle of the display.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "updateLayout",
                "hide",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getElevation",
                "setElevation",
                "getPreviewContext",
                "setPreviewContext",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getDestructive",
                "setDestructive",
                "getKeyboardType",
                "setKeyboardType",
                "getLoginPlaceholder",
                "setLoginPlaceholder",
                "getLoginReturnKeyType",
                "setLoginReturnKeyType",
                "getLoginKeyboardType",
                "setLoginKeyboardType",
                "getOk",
                "setOk",
                "getPasswordPlaceholder",
                "setPasswordPlaceholder",
                "getPasswordReturnKeyType",
                "setPasswordReturnKeyType",
                "getPasswordKeyboardType",
                "setPasswordKeyboardType",
                "getPlaceholder",
                "setPlaceholder",
                "getPersistent",
                "setPersistent",
                "getReturnKeyType",
                "setReturnKeyType",
                "getStyle",
                "setStyle",
                "getButtonNames",
                "setButtonNames",
                "getCancel",
                "setCancel",
                "getMessage",
                "setMessage",
                "getTitle",
                "setTitle"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "elevation",
                "previewContext",
                "translationX",
                "translationY",
                "translationZ",
                "androidView",
                "destructive",
                "keyboardType",
                "loginPlaceholder",
                "loginReturnKeyType",
                "loginKeyboardType",
                "messageid",
                "ok",
                "okid",
                "passwordPlaceholder",
                "passwordReturnKeyType",
                "passwordKeyboardType",
                "placeholder",
                "persistent",
                "returnKeyType",
                "style",
                "titleid",
                "buttonNames",
                "cancel",
                "message",
                "title"
            ],
            "events": [
                "click"
            ]
        },
        "Ti.UI.Android": {
            "description": "The Android-specific UI capabilities. All properties, methods and events in this namespace will \nonly work on Android systems.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "hideSoftKeyboard",
                "openPreferences",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "createCardView",
                "createProgressIndicator",
                "createSearchView"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.UI.Android.CardView": {
            "description": "An elevated view with rounded corners.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getCardBackgroundColor",
                "setCardBackgroundColor",
                "getCardCornerRadius",
                "setCardCornerRadius",
                "getCardElevation",
                "setCardElevation",
                "getCardMaxElevation",
                "setCardMaxElevation",
                "getCardPreventCornerOverlap",
                "setCardPreventCornerOverlap",
                "getCardUseCompatPadding",
                "setCardUseCompatPadding",
                "getContentPadding",
                "setContentPadding",
                "getContentPaddingBottom",
                "setContentPaddingBottom",
                "getContentPaddingLeft",
                "setContentPaddingLeft",
                "getContentPaddingRight",
                "setContentPaddingRight",
                "getContentPaddingTop",
                "setContentPaddingTop"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "cardBackgroundColor",
                "cardCornerRadius",
                "cardElevation",
                "cardMaxElevation",
                "cardPreventCornerOverlap",
                "cardUseCompatPadding",
                "contentPadding",
                "contentPaddingBottom",
                "contentPaddingLeft",
                "contentPaddingRight",
                "contentPaddingTop"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout"
            ]
        },
        "Ti.UI.Android.ProgressIndicator": {
            "description": "A progress dialog or a horizontal progress bar in the title of the window.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "updateLayout",
                "hide",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getElevation",
                "setElevation",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getCancelable",
                "setCancelable",
                "getCanceledOnTouchOutside",
                "setCanceledOnTouchOutside",
                "getMessage",
                "setMessage",
                "getMessageid",
                "setMessageid",
                "getMin",
                "setMin",
                "getMax",
                "setMax",
                "getLocation",
                "setLocation",
                "getType",
                "setType"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "elevation",
                "translationX",
                "translationY",
                "translationZ",
                "cancelable",
                "canceledOnTouchOutside",
                "message",
                "messageid",
                "min",
                "max",
                "location",
                "type"
            ],
            "events": [
                "cancel"
            ]
        },
        "Ti.UI.Android.SearchView": {
            "description": "A specialized text field for entering search text.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "blur",
                "focus",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getColor",
                "setColor",
                "getHintText",
                "setHintText",
                "getValue",
                "setValue",
                "getIconified",
                "setIconified",
                "getIconifiedByDefault",
                "setIconifiedByDefault",
                "getSubmitEnabled",
                "setSubmitEnabled"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "color",
                "hintText",
                "value",
                "iconified",
                "iconifiedByDefault",
                "submitEnabled"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "blur",
                "cancel",
                "change",
                "submit"
            ]
        },
        "Ti.UI.Animation": {
            "description": "The <code>Animation</code> object defines an animation that can be applied to a view.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAutoreverse",
                "setAutoreverse",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getColor",
                "setColor",
                "getCurve",
                "setCurve",
                "getDelay",
                "setDelay",
                "getDuration",
                "setDuration",
                "getHeight",
                "setHeight",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getOpaque",
                "setOpaque",
                "getRepeat",
                "setRepeat",
                "getRight",
                "setRight",
                "getTop",
                "setTop",
                "getTransform",
                "setTransform",
                "getTransition",
                "setTransition",
                "getView",
                "setView",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "anchorPoint",
                "autoreverse",
                "backgroundColor",
                "bottom",
                "center",
                "color",
                "curve",
                "delay",
                "duration",
                "height",
                "left",
                "opacity",
                "opaque",
                "repeat",
                "right",
                "top",
                "transform",
                "transition",
                "view",
                "visible",
                "width",
                "zIndex"
            ],
            "events": [
                "complete",
                "start"
            ]
        },
        "Attribute": {
            "description": "An abstract datatype for specifying an attributed string attribute.",
            "functions": [],
            "properties": [
                "type",
                "value",
                "range"
            ],
            "events": []
        },
        "Ti.UI.AttributedString": {
            "description": "An attributed string proxy manages character strings and associated sets of attributes (for example,\nfont and foregroundcolor) that apply to individual characters or ranges of characters in the string.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addAttribute",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getText",
                "setText",
                "getAttributes",
                "setAttributes"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "text",
                "attributes"
            ],
            "events": []
        },
        "Ti.UI.Button": {
            "description": "A button widget that has four states: normal, disabled, focused and selected.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getDisabledColor",
                "setDisabledColor",
                "getEnabled",
                "setEnabled",
                "getSelectedColor",
                "setSelectedColor",
                "getShadowColor",
                "setShadowColor",
                "getShadowOffset",
                "setShadowOffset",
                "getShadowRadius",
                "setShadowRadius",
                "getStyle",
                "setStyle",
                "getSystemButton",
                "setSystemButton",
                "getTitleid",
                "setTitleid",
                "getColor",
                "setColor",
                "getFont",
                "setFont",
                "getImage",
                "setImage",
                "getTextAlign",
                "setTextAlign",
                "getTitle",
                "setTitle",
                "getVerticalAlign",
                "setVerticalAlign"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "disabledColor",
                "enabled",
                "selectedColor",
                "shadowColor",
                "shadowOffset",
                "shadowRadius",
                "style",
                "systemButton",
                "titleid",
                "color",
                "font",
                "image",
                "textAlign",
                "title",
                "verticalAlign"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout"
            ]
        },
        "Ti.UI.ButtonBar": {
            "description": "An iOS button bar component.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getIndex",
                "setIndex",
                "getLabels",
                "setLabels",
                "getStyle",
                "setStyle"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "index",
                "labels",
                "style"
            ],
            "events": [
                "click",
                "longpress",
                "pinch",
                "postlayout"
            ]
        },
        "Ti.UI.Clipboard": {
            "description": "A module used for accessing clipboard data.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "clearData",
                "clearText",
                "getData",
                "getText",
                "hasData",
                "hasText",
                "setData",
                "setText",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.UI.DashboardItem": {
            "description": "A dashboard item is a view that is displayed as an icon in a <a href=\"Titanium.UI.DashboardView\">DashboardView</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getBadge",
                "setBadge",
                "getCanDelete",
                "setCanDelete",
                "getImage",
                "setImage",
                "getSelectedImage",
                "setSelectedImage"
            ],
            "properties": [
                "bubbleParent",
                "badge",
                "canDelete",
                "image",
                "selectedImage"
            ],
            "events": [
                "click",
                "delete",
                "move"
            ]
        },
        "Ti.UI.DashboardView": {
            "description": "A dashboard view is an iOS Springboard-like view of <a href=\"Titanium.UI.DashboardItem\">DashboardItem</a> items that may \nbe deleted and reordered by the user using its built-in edit mode.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "startEditing",
                "stopEditing",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getColumnCount",
                "setColumnCount",
                "getRowCount",
                "setRowCount",
                "getData",
                "setData",
                "getEditable",
                "setEditable",
                "getWobble",
                "setWobble"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "columnCount",
                "rowCount",
                "data",
                "editable",
                "wobble"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "twofingertap",
                "postlayout",
                "commit",
                "delete",
                "dragEnd",
                "dragStart",
                "dragend",
                "dragstart",
                "edit",
                "move",
                "pagechanged"
            ]
        },
        "Ti.UI.EmailDialog": {
            "description": "An email dialog is a modal window that allows users to compose and send an email.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "updateLayout",
                "hide",
                "show",
                "insertAt",
                "replaceAt",
                "addAttachment",
                "isSupported",
                "open",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getElevation",
                "setElevation",
                "getPreviewContext",
                "setPreviewContext",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getBarColor",
                "setBarColor",
                "getBccRecipients",
                "setBccRecipients",
                "getCcRecipients",
                "setCcRecipients",
                "getHtml",
                "setHtml",
                "getMessageBody",
                "setMessageBody",
                "getSubject",
                "setSubject",
                "getToRecipients",
                "setToRecipients"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "elevation",
                "previewContext",
                "translationX",
                "translationY",
                "translationZ",
                "barColor",
                "bccRecipients",
                "ccRecipients",
                "html",
                "messageBody",
                "subject",
                "toRecipients"
            ],
            "events": [
                "complete"
            ]
        },
        "Font": {
            "description": "An abstract datatype for specifying a text font.",
            "functions": [],
            "properties": [
                "fontFamily",
                "fontSize",
                "fontWeight",
                "fontStyle",
                "textStyle"
            ],
            "events": []
        },
        "Ti.UI.ImageView": {
            "description": "A view to display a single image or series of animated images. ",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "pause",
                "resume",
                "start",
                "stop",
                "toBlob",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getUrl",
                "setUrl",
                "getAnimating",
                "getAutorotate",
                "setAutorotate",
                "getDecodeRetries",
                "setDecodeRetries",
                "getDefaultImage",
                "setDefaultImage",
                "getDuration",
                "setDuration",
                "getEnableZoomControls",
                "setEnableZoomControls",
                "getHires",
                "setHires",
                "getImage",
                "setImage",
                "getImages",
                "setImages",
                "getPaused",
                "getPreventDefaultImage",
                "setPreventDefaultImage",
                "getRepeatCount",
                "setRepeatCount",
                "getReverse",
                "setReverse"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "url",
                "autorotate",
                "decodeRetries",
                "defaultImage",
                "duration",
                "enableZoomControls",
                "hires",
                "image",
                "images",
                "preventDefaultImage",
                "repeatCount",
                "reverse"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "change",
                "start",
                "stop",
                "error",
                "pause",
                "load"
            ]
        },
        "Ti.UI.Label": {
            "description": "A text label, with optional background image.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getAttributedString",
                "setAttributedString",
                "getAutoLink",
                "setAutoLink",
                "getBackgroundPaddingBottom",
                "setBackgroundPaddingBottom",
                "getBackgroundPaddingLeft",
                "setBackgroundPaddingLeft",
                "getBackgroundPaddingRight",
                "setBackgroundPaddingRight",
                "getBackgroundPaddingTop",
                "setBackgroundPaddingTop",
                "getHighlightedColor",
                "setHighlightedColor",
                "getHtml",
                "setHtml",
                "getIncludeFontPadding",
                "setIncludeFontPadding",
                "getLines",
                "setLines",
                "getMaxLines",
                "setMaxLines",
                "getMinimumFontSize",
                "setMinimumFontSize",
                "getShadowColor",
                "setShadowColor",
                "getShadowOffset",
                "setShadowOffset",
                "getShadowRadius",
                "setShadowRadius",
                "getTextid",
                "setTextid",
                "getColor",
                "setColor",
                "getEllipsize",
                "setEllipsize",
                "getFont",
                "setFont",
                "getText",
                "setText",
                "getTextAlign",
                "setTextAlign",
                "getVerticalAlign",
                "setVerticalAlign",
                "getWordWrap",
                "setWordWrap"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "attributedString",
                "autoLink",
                "backgroundPaddingBottom",
                "backgroundPaddingLeft",
                "backgroundPaddingRight",
                "backgroundPaddingTop",
                "highlightedColor",
                "html",
                "includeFontPadding",
                "lines",
                "maxLines",
                "minimumFontSize",
                "shadowColor",
                "shadowOffset",
                "shadowRadius",
                "textid",
                "color",
                "ellipsize",
                "font",
                "text",
                "textAlign",
                "verticalAlign",
                "wordWrap"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "link"
            ]
        },
        "Ti.UI.ListItem": {
            "description": "A list item is an individual item in a list section.",
            "functions": [
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getEditActions",
                "setEditActions"
            ],
            "properties": [
                "lifecycleContainer",
                "itemId",
                "accessoryType",
                "backgroundColor",
                "backgroundImage",
                "backgroundGradient",
                "selectedBackgroundColor",
                "selectedBackgroundImage",
                "selectedBackgroundGradient",
                "canEdit",
                "canMove",
                "editActions",
                "searchableText",
                "color",
                "font",
                "height",
                "image",
                "title",
                "selectionStyle",
                "subtitle"
            ],
            "events": []
        },
        "ItemTemplate": {
            "description": "Template that represents the basic appearance of a list item.",
            "functions": [],
            "properties": [
                "properties",
                "events",
                "childTemplates"
            ],
            "events": []
        },
        "ViewTemplate": {
            "description": "Template that represents a view subcomponent of an <a href=\"ItemTemplate\">ItemTemplate</a>.",
            "functions": [],
            "properties": [
                "type",
                "bindId",
                "properties",
                "events",
                "childTemplates"
            ],
            "events": []
        },
        "ListDataItem": {
            "description": "Represents displayed item data.",
            "functions": [],
            "properties": [
                "template",
                "properties"
            ],
            "events": []
        },
        "RowActionType": {
            "description": "Represents the custom edit action for a ListItem.",
            "functions": [],
            "properties": [
                "title",
                "style",
                "color"
            ],
            "events": []
        },
        "Ti.UI.ListSection": {
            "description": "A list section is a container within a list view used to organize list items.",
            "functions": [
                "applyProperties",
                "appendItems",
                "insertItemsAt",
                "replaceItemsAt",
                "deleteItemsAt",
                "getItemAt",
                "updateItemAt",
                "setItems",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getFooterTitle",
                "setFooterTitle",
                "getHeaderTitle",
                "setHeaderTitle",
                "getFooterView",
                "setFooterView",
                "getHeaderView",
                "setHeaderView",
                "getItems"
            ],
            "properties": [
                "lifecycleContainer",
                "footerTitle",
                "headerTitle",
                "footerView",
                "headerView",
                "items"
            ],
            "events": []
        },
        "Ti.UI.ListView": {
            "description": "A list view is used to present information, organized in to sections and items,\nin a vertically-scrolling view.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "deselectItem",
                "selectItem",
                "setContentInsets",
                "setContentOffset",
                "addMarker",
                "scrollToItem",
                "appendSection",
                "deleteSectionAt",
                "insertSectionAt",
                "replaceSectionAt",
                "setMarker",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getAllowsSelection",
                "setAllowsSelection",
                "getCanScroll",
                "setCanScroll",
                "getEditing",
                "setEditing",
                "getLazyLoadingEnabled",
                "setLazyLoadingEnabled",
                "getPruneSectionsOnEdit",
                "setPruneSectionsOnEdit",
                "getTemplates",
                "setTemplates",
                "getSeparatorHeight",
                "setSeparatorHeight",
                "getFooterDividersEnabled",
                "setFooterDividersEnabled",
                "getHeaderDividersEnabled",
                "setHeaderDividersEnabled",
                "getPullView",
                "setPullView",
                "getRefreshControl",
                "setRefreshControl",
                "getKeepSectionsInSearch",
                "setKeepSectionsInSearch",
                "getSectionIndexTitles",
                "setSectionIndexTitles",
                "getScrollIndicatorStyle",
                "setScrollIndicatorStyle",
                "getWillScrollOnStatusTap",
                "setWillScrollOnStatusTap",
                "getSeparatorInsets",
                "setSeparatorInsets",
                "getSeparatorStyle",
                "setSeparatorStyle",
                "getStyle",
                "setStyle",
                "getSections",
                "setSections",
                "getFooterTitle",
                "setFooterTitle",
                "getHeaderTitle",
                "setHeaderTitle",
                "getSearchText",
                "setSearchText",
                "getFooterView",
                "setFooterView",
                "getHeaderView",
                "setHeaderView",
                "getSearchView",
                "setSearchView",
                "getCaseInsensitiveSearch",
                "setCaseInsensitiveSearch",
                "getSectionCount",
                "getShowVerticalScrollIndicator",
                "setShowVerticalScrollIndicator",
                "getSeparatorColor",
                "setSeparatorColor",
                "getDefaultItemTemplate",
                "setDefaultItemTemplate"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "allowsSelection",
                "canScroll",
                "editing",
                "lazyLoadingEnabled",
                "pruneSectionsOnEdit",
                "templates",
                "separatorHeight",
                "footerDividersEnabled",
                "headerDividersEnabled",
                "pullView",
                "refreshControl",
                "keepSectionsInSearch",
                "sectionIndexTitles",
                "scrollIndicatorStyle",
                "willScrollOnStatusTap",
                "separatorInsets",
                "separatorStyle",
                "style",
                "sections",
                "footerTitle",
                "headerTitle",
                "searchText",
                "footerView",
                "headerView",
                "searchView",
                "caseInsensitiveSearch",
                "showVerticalScrollIndicator",
                "separatorColor",
                "defaultItemTemplate"
            ],
            "events": [
                "indexclick",
                "delete",
                "marker",
                "move",
                "noresults",
                "pull",
                "pullend",
                "editaction",
                "rowAction",
                "scrollstart",
                "scrollend",
                "itemclick"
            ]
        },
        "ListViewAnimationProperties": {
            "description": "A simple object for specifying the animation properties to use when inserting or deleting\nsections or cells, or scrolling the list.",
            "functions": [],
            "properties": [
                "animated",
                "animationStyle",
                "position"
            ],
            "events": []
        },
        "ListViewIndexEntry": {
            "description": "A simple object that represents an index entry in a <code>ListView</code>.",
            "functions": [],
            "properties": [
                "title",
                "index"
            ],
            "events": []
        },
        "ListViewContentInsetOption": {
            "description": "Optional parameter for <a href=\"Titanium.UI.ListView.setContentInsets\">setContentInsets</a> method.",
            "functions": [],
            "properties": [
                "animated",
                "duration"
            ],
            "events": []
        },
        "ListViewMarkerProps": {
            "description": "The parameter for <a href=\"Titanium.UI.ListView.setMarker\">setMarker</a> and <a href=\"Titanium.UI.ListView.addMarker\">addMarker</a> methods.",
            "functions": [],
            "properties": [
                "sectionIndex",
                "itemIndex"
            ],
            "events": []
        },
        "ListViewEdgeInsets": {
            "description": "The parameter for <a href=\"Titanium.UI.TableView.setContentInsets\">setContentInsets</a> method.",
            "functions": [],
            "properties": [
                "top",
                "left",
                "right",
                "bottom"
            ],
            "events": []
        },
        "Ti.UI.MaskedImage": {
            "description": "A control that displays an image composited with a background image or color.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getMask",
                "setMask",
                "getImage",
                "setImage",
                "getMode",
                "setMode",
                "getTint",
                "setTint"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "mask",
                "image",
                "mode",
                "tint"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "postlayout"
            ]
        },
        "Ti.UI.MobileWeb": {
            "description": "The UI capabilities specific to Mobile Web. All events, methods and properties in this namespace \nwill only work on this platform.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getApiName",
                "createNavigationGroup"
            ],
            "properties": [],
            "events": []
        },
        "Ti.UI.MobileWeb.NavigationGroup": {
            "description": "A Navigation Group implements a specialized view that manages the navigation of hierarchical \ncontent.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "close",
                "open",
                "getApiName",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getTransform",
                "setTransform",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getWindow",
                "setWindow",
                "getNavBarAtTop",
                "setNavBarAtTop"
            ],
            "properties": [
                "backgroundGradient",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "transform",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "window",
                "navBarAtTop"
            ],
            "events": [
                "click",
                "dblclick",
                "longpress",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "postlayout"
            ]
        },
        "Ti.UI.MobileWeb.TableViewSeparatorStyle": {
            "description": "A set of constants for the style that can be used for the <code>separatorStyle</code> property of \n<a href=\"Titanium.UI.TableView\">TableView</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getApiName"
            ],
            "properties": [],
            "events": []
        },
        "Ti.UI.Notification": {
            "description": "A toast notification.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getMessage",
                "setMessage",
                "getDuration",
                "setDuration",
                "getXOffset",
                "setXOffset",
                "getYOffset",
                "setYOffset",
                "getHorizontalMargin",
                "setHorizontalMargin",
                "getVerticalMargin",
                "setVerticalMargin"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "message",
                "duration",
                "xOffset",
                "yOffset",
                "horizontalMargin",
                "verticalMargin"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout"
            ]
        },
        "Ti.UI.OptionDialog": {
            "description": "An option dialog is a modal view that includes a message and one or more option items positioned \nin the middle of the display on Android and at the bottom edge on iOS. On Android, buttons may \nbe added below the options.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "updateLayout",
                "hide",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getElevation",
                "setElevation",
                "getPreviewContext",
                "setPreviewContext",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getAndroidView",
                "setAndroidView",
                "getButtonNames",
                "setButtonNames",
                "getCancel",
                "setCancel",
                "getDestructive",
                "setDestructive",
                "getOptions",
                "setOptions",
                "getOpaquebackground",
                "setOpaquebackground",
                "getPersistent",
                "setPersistent",
                "getSelectedIndex",
                "setSelectedIndex",
                "getTitle",
                "setTitle",
                "getTitleid",
                "setTitleid"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "elevation",
                "previewContext",
                "translationX",
                "translationY",
                "translationZ",
                "androidView",
                "buttonNames",
                "cancel",
                "destructive",
                "options",
                "opaquebackground",
                "persistent",
                "selectedIndex",
                "title",
                "titleid"
            ],
            "events": [
                "click"
            ]
        },
        "hideParams": {
            "description": "Dictionary of options for the <a href=\"Titanium.UI.OptionDialog.hide\">hide</a> method.",
            "functions": [],
            "properties": [
                "animated"
            ],
            "events": []
        },
        "showParams": {
            "description": "Dictionary of options for the <a href=\"Titanium.UI.OptionDialog.show\">show</a> method.",
            "functions": [],
            "properties": [
                "animated",
                "view",
                "rect"
            ],
            "events": []
        },
        "Ti.UI.Picker": {
            "description": "A control used to select one or more fixed values.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "show",
                "insertAt",
                "replaceAt",
                "reloadColumn",
                "getSelectedRow",
                "setSelectedRow",
                "showDatePickerDialog",
                "showTimePickerDialog",
                "setValue",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnimatedCenter",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getColumns",
                "setColumns",
                "getCountDownDuration",
                "setCountDownDuration",
                "getFormat24",
                "setFormat24",
                "getLocale",
                "setLocale",
                "getMaxDate",
                "setMaxDate",
                "getMinDate",
                "setMinDate",
                "getMinuteInterval",
                "setMinuteInterval",
                "getSelectionIndicator",
                "setSelectionIndicator",
                "getSelectionOpens",
                "setSelectionOpens",
                "getUseSpinner",
                "setUseSpinner",
                "getValue",
                "setValue",
                "getVisibleItems",
                "setVisibleItems",
                "getCalendarViewShown",
                "setCalendarViewShown",
                "getFont",
                "setFont",
                "getType",
                "setType"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "height",
                "left",
                "opacity",
                "right",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "columns",
                "countDownDuration",
                "format24",
                "locale",
                "maxDate",
                "minDate",
                "minuteInterval",
                "selectionIndicator",
                "selectionOpens",
                "useSpinner",
                "value",
                "visibleItems",
                "calendarViewShown",
                "font",
                "type"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "change"
            ]
        },
        "Ti.UI.PickerColumn": {
            "description": "A picker column, representing a selectable group of items in a <a href=\"Titanium.UI.Picker\">Picker</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "addRow",
                "removeRow",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getRowCount",
                "getRows",
                "getSelectedRow",
                "setSelectedRow",
                "getFont",
                "setFont"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "selectedRow",
                "font"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout"
            ]
        },
        "Ti.UI.PickerRow": {
            "description": "A picker row, representing a selectable item in a <a href=\"Titanium.UI.Picker\">Picker</a>. ",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getColor",
                "setColor",
                "getFont",
                "setFont",
                "getTitle",
                "setTitle"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "color",
                "font",
                "title"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout"
            ]
        },
        "Ti.UI.ProgressBar": {
            "description": "A progress bar.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getColor",
                "setColor",
                "getFont",
                "setFont",
                "getMax",
                "setMax",
                "getMessage",
                "setMessage",
                "getMin",
                "setMin",
                "getStyle",
                "setStyle",
                "getValue",
                "setValue"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "color",
                "font",
                "max",
                "message",
                "min",
                "style",
                "value"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout"
            ]
        },
        "Ti.UI.RefreshControl": {
            "description": "The RefreshControl is a representation of the native <a href=\"https://developer.apple.com/library/ios/documentation/uikit/reference/UIRefreshControl_class/Reference/Reference.html\">UIRefreshControl</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "beginRefreshing",
                "endRefreshing",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getTitle",
                "setTitle",
                "getTintColor",
                "setTintColor"
            ],
            "properties": [
                "bubbleParent",
                "title",
                "tintColor"
            ],
            "events": [
                "refreshstart"
            ]
        },
        "Ti.UI.ScrollView": {
            "description": "A view that contains a horizontally and/or vertically-scrollable region of content.  ",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "scrollTo",
                "scrollToBottom",
                "setContentOffset",
                "setZoomScale",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getCanCancelEvents",
                "setCanCancelEvents",
                "getContentOffset",
                "setContentOffset",
                "getDisableBounce",
                "setDisableBounce",
                "getHorizontalBounce",
                "setHorizontalBounce",
                "getMaxZoomScale",
                "setMaxZoomScale",
                "getMinZoomScale",
                "setMinZoomScale",
                "getScrollsToTop",
                "setScrollsToTop",
                "getScrollType",
                "setScrollType",
                "getVerticalBounce",
                "setVerticalBounce",
                "getZoomScale",
                "setZoomScale",
                "getContentWidth",
                "setContentWidth",
                "getContentHeight",
                "setContentHeight",
                "getScrollingEnabled",
                "setScrollingEnabled",
                "getShowHorizontalScrollIndicator",
                "setShowHorizontalScrollIndicator",
                "getShowVerticalScrollIndicator",
                "setShowVerticalScrollIndicator",
                "getDecelerationRate",
                "setDecelerationRate",
                "getOverScrollMode",
                "setOverScrollMode",
                "getScrollIndicatorStyle",
                "setScrollIndicatorStyle"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "canCancelEvents",
                "contentOffset",
                "disableBounce",
                "horizontalBounce",
                "maxZoomScale",
                "minZoomScale",
                "scrollsToTop",
                "scrollType",
                "verticalBounce",
                "zoomScale",
                "contentWidth",
                "contentHeight",
                "scrollingEnabled",
                "showHorizontalScrollIndicator",
                "showVerticalScrollIndicator",
                "decelerationRate",
                "overScrollMode",
                "scrollIndicatorStyle"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "scale",
                "scroll",
                "scrollEnd",
                "dragStart",
                "dragEnd",
                "scrollend",
                "dragstart",
                "dragend"
            ]
        },
        "contentOffsetOption": {
            "description": "Optional parameter for <a href=\"Titanium.UI.ScrollView.setContentOffset\">setContentOffset</a> method.",
            "functions": [],
            "properties": [
                "animated"
            ],
            "events": []
        },
        "zoomScaleOption": {
            "description": "Optional parameter for <a href=\"Titanium.UI.ScrollView.setZoomScale\">setZoomScale</a> method.",
            "functions": [],
            "properties": [
                "animated"
            ],
            "events": []
        },
        "Ti.UI.ScrollableView": {
            "description": "A view that encapsulates a horizontally-scrolling set of child views, known as pages, navigable \nusing its built-in horizontal swipe gestures.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "addView",
                "moveNext",
                "movePrevious",
                "removeView",
                "scrollToView",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getCacheSize",
                "setCacheSize",
                "getCurrentPage",
                "setCurrentPage",
                "getDisableBounce",
                "setDisableBounce",
                "getOverScrollMode",
                "setOverScrollMode",
                "getPagingControlColor",
                "setPagingControlColor",
                "getPagingControlHeight",
                "setPagingControlHeight",
                "getShowPagingControl",
                "setShowPagingControl",
                "getPagingControlTimeout",
                "setPagingControlTimeout",
                "getPagingControlAlpha",
                "setPagingControlAlpha",
                "getPagingControlOnTop",
                "setPagingControlOnTop",
                "getOverlayEnabled",
                "setOverlayEnabled",
                "getScrollingEnabled",
                "setScrollingEnabled",
                "getViews",
                "setViews",
                "getClipViews",
                "setClipViews",
                "getHitRect",
                "setHitRect"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "cacheSize",
                "currentPage",
                "disableBounce",
                "overScrollMode",
                "pagingControlColor",
                "pagingControlHeight",
                "showPagingControl",
                "pagingControlTimeout",
                "pagingControlAlpha",
                "pagingControlOnTop",
                "overlayEnabled",
                "scrollingEnabled",
                "views",
                "clipViews",
                "hitRect"
            ],
            "events": [
                "dblclick",
                "doubletap",
                "keypressed",
                "longpress",
                "singletap",
                "touchcancel",
                "touchstart",
                "twofingertap",
                "focus",
                "postlayout",
                "scroll",
                "scrollEnd",
                "dragStart",
                "dragEnd",
                "scrollend",
                "dragstart",
                "dragend"
            ]
        },
        "Ti.UI.SearchBar": {
            "description": "A specialized text field for entering search text.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "blur",
                "focus",
                "setShowCancel",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getAutocapitalization",
                "setAutocapitalization",
                "getAutocorrect",
                "setAutocorrect",
                "getBarColor",
                "setBarColor",
                "getHintText",
                "setHintText",
                "getHinttextid",
                "setHinttextid",
                "getKeyboardType",
                "setKeyboardType",
                "getPrompt",
                "setPrompt",
                "getPromptid",
                "setPromptid",
                "getShowBookmark",
                "setShowBookmark",
                "getShowCancel",
                "setShowCancel",
                "getValue",
                "setValue"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "autocapitalization",
                "autocorrect",
                "barColor",
                "hintText",
                "hinttextid",
                "keyboardType",
                "prompt",
                "promptid",
                "showBookmark",
                "showCancel",
                "value"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "blur",
                "bookmark",
                "cancel",
                "change",
                "return"
            ]
        },
        "Ti.UI.Slider": {
            "description": "A slider component with a draggable thumb.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "setValue",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getDisabledLeftTrackImage",
                "setDisabledLeftTrackImage",
                "getDisabledRightTrackImage",
                "setDisabledRightTrackImage",
                "getDisabledThumbImage",
                "setDisabledThumbImage",
                "getEnabled",
                "setEnabled",
                "getHighlightedLeftTrackImage",
                "setHighlightedLeftTrackImage",
                "getHighlightedRightTrackImage",
                "setHighlightedRightTrackImage",
                "getHighlightedThumbImage",
                "setHighlightedThumbImage",
                "getLeftTrackImage",
                "setLeftTrackImage",
                "getLeftTrackLeftCap",
                "setLeftTrackLeftCap",
                "getLeftTrackTopCap",
                "setLeftTrackTopCap",
                "getMaxRange",
                "setMaxRange",
                "getMinRange",
                "setMinRange",
                "getRightTrackImage",
                "setRightTrackImage",
                "getRightTrackLeftCap",
                "setRightTrackLeftCap",
                "getRightTrackTopCap",
                "setRightTrackTopCap",
                "getSelectedLeftTrackImage",
                "setSelectedLeftTrackImage",
                "getSelectedRightTrackImage",
                "setSelectedRightTrackImage",
                "getSelectedThumbImage",
                "setSelectedThumbImage",
                "getThumbImage",
                "setThumbImage",
                "getMax",
                "setMax",
                "getMin",
                "setMin",
                "getValue"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "disabledLeftTrackImage",
                "disabledRightTrackImage",
                "disabledThumbImage",
                "enabled",
                "highlightedLeftTrackImage",
                "highlightedRightTrackImage",
                "highlightedThumbImage",
                "leftTrackImage",
                "leftTrackLeftCap",
                "leftTrackTopCap",
                "maxRange",
                "minRange",
                "rightTrackImage",
                "rightTrackLeftCap",
                "rightTrackTopCap",
                "selectedLeftTrackImage",
                "selectedRightTrackImage",
                "selectedThumbImage",
                "thumbImage",
                "max",
                "min",
                "value"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "start",
                "stop",
                "change"
            ]
        },
        "Ti.UI.Switch": {
            "description": "An on/off switch control.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getFont",
                "setFont",
                "getStyle",
                "setStyle",
                "getTextAlign",
                "setTextAlign",
                "getTitle",
                "setTitle",
                "getOnTintColor",
                "setOnTintColor",
                "getThumbTintColor",
                "setThumbTintColor",
                "getVerticalAlign",
                "setVerticalAlign",
                "getColor",
                "setColor",
                "getEnabled",
                "setEnabled",
                "getTitleOff",
                "setTitleOff",
                "getTitleOn",
                "setTitleOn",
                "getValue",
                "setValue"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "font",
                "style",
                "textAlign",
                "title",
                "onTintColor",
                "thumbTintColor",
                "verticalAlign",
                "color",
                "enabled",
                "titleOff",
                "titleOn",
                "value"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "change"
            ]
        },
        "Ti.UI.Tab": {
            "description": "A tab instance for a <a href=\"Titanium.UI.TabGroup\">TabGroup</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "insertAt",
                "replaceAt",
                "setWindow",
                "open",
                "close",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getTintColor",
                "setTintColor",
                "getTouchEnabled",
                "setTouchEnabled",
                "getTitleColor",
                "setTitleColor",
                "getActiveTitleColor",
                "setActiveTitleColor",
                "getActive",
                "setActive",
                "getActiveIcon",
                "setActiveIcon",
                "getBadge",
                "setBadge",
                "getIconIsMask",
                "setIconIsMask",
                "getActiveIconIsMask",
                "setActiveIconIsMask",
                "getTitleid",
                "setTitleid",
                "getWindow",
                "setWindow",
                "getTitle",
                "setTitle",
                "getIcon",
                "setIcon"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "clipMode",
                "elevation",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "backgroundImage",
                "backgroundColor",
                "tintColor",
                "touchEnabled",
                "titleColor",
                "activeTitleColor",
                "active",
                "activeIcon",
                "badge",
                "iconIsMask",
                "activeIconIsMask",
                "titleid",
                "window",
                "title",
                "icon"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "longpress",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "touchmove",
                "focus",
                "postlayout",
                "blur",
                "selected",
                "unselected"
            ]
        },
        "Ti.UI.TabGroup": {
            "description": "A tabbed group of windows.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "animate",
                "hide",
                "show",
                "insertAt",
                "replaceAt",
                "close",
                "disableTabNavigation",
                "removeTab",
                "getActiveTab",
                "getTabs",
                "setActiveTab",
                "open",
                "addTab",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getCenter",
                "setCenter",
                "getRect",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getActiveTab",
                "setActiveTab",
                "getActivity",
                "getAllowUserCustomization",
                "setAllowUserCustomization",
                "getBarColor",
                "setBarColor",
                "getTranslucent",
                "setTranslucent",
                "getTitleAttributes",
                "setTitleAttributes",
                "getNavTintColor",
                "setNavTintColor",
                "getEditButtonTitle",
                "setEditButtonTitle",
                "getExitOnClose",
                "setExitOnClose",
                "getNavBarHidden",
                "setNavBarHidden",
                "getSwipeable",
                "setSwipeable",
                "getSmoothScrollOnTabClick",
                "setSmoothScrollOnTabClick",
                "getTabs",
                "setTabs",
                "getWindowSoftInputMode",
                "setWindowSoftInputMode",
                "getTabsBackgroundColor",
                "setTabsBackgroundColor",
                "getTabsTintColor",
                "setTabsTintColor",
                "getTitle",
                "setTitle",
                "getTabsBackgroundImage",
                "setTabsBackgroundImage",
                "getShadowImage",
                "setShadowImage",
                "getActiveTabIconTint",
                "setActiveTabIconTint",
                "getTabsBackgroundDisabledColor",
                "setTabsBackgroundDisabledColor",
                "getTabsBackgroundDisabledImage",
                "setTabsBackgroundDisabledImage",
                "getTabsBackgroundFocusedColor",
                "setTabsBackgroundFocusedColor",
                "getTabsBackgroundFocusedImage",
                "setTabsBackgroundFocusedImage",
                "getTabsBackgroundSelectedColor",
                "setTabsBackgroundSelectedColor",
                "getTabsBackgroundSelectedImage",
                "setTabsBackgroundSelectedImage",
                "getActiveTabBackgroundColor",
                "setActiveTabBackgroundColor",
                "getActiveTabBackgroundImage",
                "setActiveTabBackgroundImage",
                "getActiveTabBackgroundDisabledColor",
                "setActiveTabBackgroundDisabledColor",
                "getActiveTabBackgroundDisabledImage",
                "setActiveTabBackgroundDisabledImage",
                "getActiveTabBackgroundFocusedColor",
                "setActiveTabBackgroundFocusedColor",
                "getActiveTabBackgroundFocusedImage",
                "setActiveTabBackgroundFocusedImage",
                "getActiveTabBackgroundSelectedColor",
                "setActiveTabBackgroundSelectedColor",
                "getActiveTabBackgroundSelectedImage",
                "setActiveTabBackgroundSelectedImage",
                "getTabDividerColor",
                "setTabDividerColor",
                "getTabDividerWidth",
                "setTabDividerWidth",
                "getTabHeight",
                "setTabHeight",
                "getTabsAtBottom",
                "setTabsAtBottom"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "clipMode",
                "elevation",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "keepScreenOn",
                "center",
                "tintColor",
                "touchEnabled",
                "visible",
                "activeTab",
                "allowUserCustomization",
                "barColor",
                "translucent",
                "titleAttributes",
                "navTintColor",
                "editButtonTitle",
                "exitOnClose",
                "navBarHidden",
                "swipeable",
                "smoothScrollOnTabClick",
                "tabs",
                "windowSoftInputMode",
                "tabsBackgroundColor",
                "tabsTintColor",
                "title",
                "tabsBackgroundImage",
                "shadowImage",
                "activeTabIconTint",
                "tabsBackgroundDisabledColor",
                "tabsBackgroundDisabledImage",
                "tabsBackgroundFocusedColor",
                "tabsBackgroundFocusedImage",
                "tabsBackgroundSelectedColor",
                "tabsBackgroundSelectedImage",
                "activeTabBackgroundColor",
                "activeTabBackgroundImage",
                "activeTabBackgroundDisabledColor",
                "activeTabBackgroundDisabledImage",
                "activeTabBackgroundFocusedColor",
                "activeTabBackgroundFocusedImage",
                "activeTabBackgroundSelectedColor",
                "activeTabBackgroundSelectedImage",
                "tabDividerColor",
                "tabDividerWidth",
                "tabHeight",
                "tabsAtBottom"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "androidback",
                "androidcamera",
                "androidfocus",
                "androidsearch",
                "androidvoldown",
                "androidvolup",
                "blur",
                "close",
                "open",
                "selected",
                "unselected"
            ]
        },
        "Ti.UI.TableView": {
            "description": "A table view is used to present information, organized in sections and rows, in a \nvertically-scrolling view.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "deselectRow",
                "setContentInsets",
                "setContentOffset",
                "setHeaderPullView",
                "setData",
                "appendRow",
                "appendSection",
                "deleteRow",
                "deleteSection",
                "insertRowAfter",
                "insertSectionAfter",
                "insertRowBefore",
                "insertSectionBefore",
                "scrollToIndex",
                "scrollToTop",
                "selectRow",
                "updateRow",
                "updateSection",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getAllowsSelection",
                "setAllowsSelection",
                "getAllowsSelectionDuringEditing",
                "setAllowsSelectionDuringEditing",
                "getEditable",
                "setEditable",
                "getEditing",
                "setEditing",
                "getFooterDividersEnabled",
                "setFooterDividersEnabled",
                "getHeaderPullView",
                "setHeaderPullView",
                "getRefreshControl",
                "setRefreshControl",
                "getHideSearchOnSelection",
                "setHideSearchOnSelection",
                "getHeaderDividersEnabled",
                "setHeaderDividersEnabled",
                "getIndex",
                "setIndex",
                "getMoveable",
                "setMoveable",
                "getMoving",
                "setMoving",
                "getOverScrollMode",
                "setOverScrollMode",
                "getScrollable",
                "setScrollable",
                "getScrollIndicatorStyle",
                "setScrollIndicatorStyle",
                "getScrollsToTop",
                "setScrollsToTop",
                "getSearchAsChild",
                "setSearchAsChild",
                "getSearchHidden",
                "setSearchHidden",
                "getSeparatorInsets",
                "setSeparatorInsets",
                "getSeparatorStyle",
                "setSeparatorStyle",
                "getShowVerticalScrollIndicator",
                "setShowVerticalScrollIndicator",
                "getStyle",
                "setStyle",
                "getData",
                "setData",
                "getFilterAttribute",
                "setFilterAttribute",
                "getFilterAnchored",
                "setFilterAnchored",
                "getFilterCaseInsensitive",
                "setFilterCaseInsensitive",
                "getFooterTitle",
                "setFooterTitle",
                "getFooterView",
                "setFooterView",
                "getHeaderTitle",
                "setHeaderTitle",
                "getHeaderView",
                "setHeaderView",
                "getMaxRowHeight",
                "setMaxRowHeight",
                "getMinRowHeight",
                "setMinRowHeight",
                "getRowHeight",
                "setRowHeight",
                "getSearch",
                "setSearch",
                "getSectionCount",
                "getSections",
                "setSections",
                "getSeparatorColor",
                "setSeparatorColor"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "allowsSelection",
                "allowsSelectionDuringEditing",
                "editable",
                "editing",
                "footerDividersEnabled",
                "headerPullView",
                "refreshControl",
                "hideSearchOnSelection",
                "headerDividersEnabled",
                "index",
                "moveable",
                "moving",
                "overScrollMode",
                "scrollable",
                "scrollIndicatorStyle",
                "scrollsToTop",
                "searchAsChild",
                "searchHidden",
                "separatorInsets",
                "separatorStyle",
                "showVerticalScrollIndicator",
                "style",
                "data",
                "filterAttribute",
                "filterAnchored",
                "filterCaseInsensitive",
                "footerTitle",
                "footerView",
                "headerTitle",
                "headerView",
                "maxRowHeight",
                "minRowHeight",
                "rowHeight",
                "search",
                "sections",
                "separatorColor"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "postlayout",
                "delete",
                "indexclick",
                "move",
                "scroll",
                "scrollEnd",
                "scrollend",
                "dragStart",
                "dragEnd",
                "dragstart",
                "dragend"
            ]
        },
        "TableViewAnimationProperties": {
            "description": "A simple object for specifying the animation properties to use when inserting or deleting rows, or scrolling the table.",
            "functions": [],
            "properties": [
                "animated",
                "animationStyle",
                "position"
            ],
            "events": []
        },
        "TableViewIndexEntry": {
            "description": "A simple object that represents an index entry in a <code>TableView</code>.",
            "functions": [],
            "properties": [
                "title",
                "index"
            ],
            "events": []
        },
        "TableViewContentInsetOption": {
            "description": "Optional parameter for <a href=\"Titanium.UI.TableView.setContentInsets\">setContentInsets</a> method.",
            "functions": [],
            "properties": [
                "animated",
                "duration"
            ],
            "events": []
        },
        "TableViewEdgeInsets": {
            "description": "The parameter for <a href=\"Titanium.UI.TableView.setContentInsets\">setContentInsets</a> method.",
            "functions": [],
            "properties": [
                "top",
                "left",
                "right",
                "bottom"
            ],
            "events": []
        },
        "Ti.UI.TableViewRow": {
            "description": "A table view row is an individual item in a table, organized into table view sections.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getClassName",
                "setClassName",
                "getEditable",
                "setEditable",
                "getFooter",
                "setFooter",
                "getHasDetail",
                "setHasDetail",
                "getHeader",
                "setHeader",
                "getIndentionLevel",
                "setIndentionLevel",
                "getLeftImage",
                "setLeftImage",
                "getMoveable",
                "setMoveable",
                "getRightImage",
                "setRightImage",
                "getSelectedBackgroundColor",
                "setSelectedBackgroundColor",
                "getSelectedBackgroundImage",
                "setSelectedBackgroundImage",
                "getSelectedColor",
                "setSelectedColor",
                "getSelectionStyle",
                "setSelectionStyle",
                "getColor",
                "setColor",
                "getFont",
                "setFont",
                "getHasCheck",
                "setHasCheck",
                "getHasChild",
                "setHasChild",
                "getTitle",
                "setTitle"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "className",
                "editable",
                "footer",
                "hasDetail",
                "header",
                "indentionLevel",
                "leftImage",
                "moveable",
                "rightImage",
                "selectedBackgroundColor",
                "selectedBackgroundImage",
                "selectedColor",
                "selectionStyle",
                "color",
                "font",
                "hasCheck",
                "hasChild",
                "title"
            ],
            "events": [
                "click",
                "keypressed",
                "longclick",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "postlayout"
            ]
        },
        "Ti.UI.TableViewSection": {
            "description": "A table view section is a container within a table used to organize table view rows.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "add",
                "remove",
                "rowAtIndex",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getFooterTitle",
                "setFooterTitle",
                "getFooterView",
                "setFooterView",
                "getHeaderTitle",
                "setHeaderTitle",
                "getHeaderView",
                "setHeaderView",
                "getRowCount",
                "getRows"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "footerTitle",
                "footerView",
                "headerTitle",
                "headerView"
            ],
            "events": []
        },
        "Ti.UI.TextArea": {
            "description": "A multiline text field that supports editing and scrolling.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "setSelection",
                "blur",
                "focus",
                "hasText",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getHintTextColor",
                "setHintTextColor",
                "getShowUndoRedoActions",
                "setShowUndoRedoActions",
                "getAppearance",
                "setAppearance",
                "getAttributedString",
                "setAttributedString",
                "getAutocapitalization",
                "setAutocapitalization",
                "getAutocorrect",
                "setAutocorrect",
                "getAutoLink",
                "setAutoLink",
                "getClearOnEdit",
                "setClearOnEdit",
                "getColor",
                "setColor",
                "getEditable",
                "setEditable",
                "getEllipsize",
                "setEllipsize",
                "getEnableReturnKey",
                "setEnableReturnKey",
                "getFont",
                "setFont",
                "getHintText",
                "setHintText",
                "getHandleLinks",
                "setHandleLinks",
                "getKeyboardToolbar",
                "setKeyboardToolbar",
                "getKeyboardToolbarColor",
                "setKeyboardToolbarColor",
                "getKeyboardToolbarHeight",
                "setKeyboardToolbarHeight",
                "getKeyboardType",
                "setKeyboardType",
                "getMaxLength",
                "setMaxLength",
                "getReturnKeyType",
                "setReturnKeyType",
                "getScrollsToTop",
                "setScrollsToTop",
                "getSuppressReturn",
                "setSuppressReturn",
                "getScrollable",
                "setScrollable",
                "getSelection",
                "getTextAlign",
                "setTextAlign",
                "getValue",
                "setValue",
                "getVerticalAlign",
                "setVerticalAlign"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "hintTextColor",
                "showUndoRedoActions",
                "appearance",
                "attributedString",
                "autocapitalization",
                "autocorrect",
                "autoLink",
                "clearOnEdit",
                "color",
                "editable",
                "ellipsize",
                "enableReturnKey",
                "font",
                "hintText",
                "handleLinks",
                "keyboardToolbar",
                "keyboardToolbarColor",
                "keyboardToolbarHeight",
                "keyboardType",
                "maxLength",
                "returnKeyType",
                "scrollsToTop",
                "suppressReturn",
                "scrollable",
                "textAlign",
                "value",
                "verticalAlign"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "blur",
                "change",
                "link",
                "return",
                "selected"
            ]
        },
        "textAreaSelectedParams": {
            "description": "Dictionary object of parameters for the <a href=\"Titanium.UI.TextArea.selected\">selected</a> event and <a href=\"Titanium.UI.TextArea.selection\">selection</a> property that describes \nposition and length of the selected text.",
            "functions": [],
            "properties": [
                "location",
                "length"
            ],
            "events": []
        },
        "Ti.UI.TextField": {
            "description": "A single line text field.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "setSelection",
                "blur",
                "focus",
                "hasText",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getAppearance",
                "setAppearance",
                "getAttributedString",
                "setAttributedString",
                "getAttributedHintText",
                "setAttributedHintText",
                "getAutocorrect",
                "setAutocorrect",
                "getAutoLink",
                "setAutoLink",
                "getClearOnEdit",
                "setClearOnEdit",
                "getFont",
                "setFont",
                "getHintTextColor",
                "setHintTextColor",
                "getKeyboardToolbar",
                "setKeyboardToolbar",
                "getKeyboardToolbarColor",
                "setKeyboardToolbarColor",
                "getKeyboardToolbarHeight",
                "setKeyboardToolbarHeight",
                "getLeftButton",
                "setLeftButton",
                "getLeftButtonPadding",
                "setLeftButtonPadding",
                "getMinimumFontSize",
                "setMinimumFontSize",
                "getPaddingLeft",
                "setPaddingLeft",
                "getPaddingRight",
                "setPaddingRight",
                "getRightButton",
                "setRightButton",
                "getRightButtonPadding",
                "setRightButtonPadding",
                "getSelection",
                "getShowUndoRedoActions",
                "setShowUndoRedoActions",
                "getAutocapitalization",
                "setAutocapitalization",
                "getBorderStyle",
                "setBorderStyle",
                "getClearButtonMode",
                "setClearButtonMode",
                "getColor",
                "setColor",
                "getEditable",
                "setEditable",
                "getEllipsize",
                "setEllipsize",
                "getEnableReturnKey",
                "setEnableReturnKey",
                "getHintText",
                "setHintText",
                "getKeyboardType",
                "setKeyboardType",
                "getLeftButtonMode",
                "setLeftButtonMode",
                "getMaxLength",
                "setMaxLength",
                "getPasswordMask",
                "setPasswordMask",
                "getReturnKeyType",
                "setReturnKeyType",
                "getRightButtonMode",
                "setRightButtonMode",
                "getSuppressReturn",
                "setSuppressReturn",
                "getTextAlign",
                "setTextAlign",
                "getValue",
                "setValue",
                "getVerticalAlign",
                "setVerticalAlign"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "appearance",
                "attributedString",
                "attributedHintText",
                "autocorrect",
                "autoLink",
                "clearOnEdit",
                "font",
                "hintTextColor",
                "keyboardToolbar",
                "keyboardToolbarColor",
                "keyboardToolbarHeight",
                "leftButton",
                "leftButtonPadding",
                "minimumFontSize",
                "paddingLeft",
                "paddingRight",
                "rightButton",
                "rightButtonPadding",
                "showUndoRedoActions",
                "autocapitalization",
                "borderStyle",
                "clearButtonMode",
                "color",
                "editable",
                "ellipsize",
                "enableReturnKey",
                "hintText",
                "keyboardType",
                "leftButtonMode",
                "maxLength",
                "passwordMask",
                "returnKeyType",
                "rightButtonMode",
                "suppressReturn",
                "textAlign",
                "value",
                "verticalAlign"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "blur",
                "change",
                "return"
            ]
        },
        "textFieldSelectedParams": {
            "description": "Dictionary object of parameters for the <a href=\"Titanium.UI.TextField.selection\">selection</a> property that describes \nposition and length of the selected text.",
            "functions": [],
            "properties": [
                "location",
                "length"
            ],
            "events": []
        },
        "Ti.UI": {
            "description": "The main <a href=\"Titanium.UI\">UI</a> module.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "convertUnits",
                "create2DMatrix",
                "createView",
                "create3DMatrix",
                "createActivityIndicator",
                "createAlertDialog",
                "createAnimation",
                "createAttributedString",
                "createButton",
                "createButtonBar",
                "createCoverFlowView",
                "createDashboardItem",
                "createDashboardView",
                "createEmailDialog",
                "createImageView",
                "createLabel",
                "createListSection",
                "createListView",
                "createMaskedImage",
                "createNotification",
                "createOptionDialog",
                "createPicker",
                "createPickerColumn",
                "createPickerRow",
                "createProgressBar",
                "createRefreshControl",
                "createScrollView",
                "createScrollableView",
                "createSearchBar",
                "createSlider",
                "createSwitch",
                "createTab",
                "createTabGroup",
                "createTabbedBar",
                "createTableView",
                "createTableViewRow",
                "createTableViewSection",
                "createTextArea",
                "createTextField",
                "createToolbar",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBackgroundImage",
                "setBackgroundImage",
                "getOrientation",
                "setOrientation",
                "getCurrentTab",
                "setCurrentTab",
                "getCurrentWindow",
                "createWebView",
                "createWindow"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "backgroundColor",
                "backgroundImage",
                "orientation",
                "currentTab"
            ],
            "events": []
        },
        "Point": {
            "description": "A pair of coordinates used to describe the location of a <a href=\"Titanium.UI.View\">View</a>.",
            "functions": [],
            "properties": [
                "x",
                "y"
            ],
            "events": []
        },
        "Gradient": {
            "description": "A simple object defining a color gradient.",
            "functions": [],
            "properties": [
                "type",
                "startPoint",
                "endPoint",
                "startRadius",
                "endRadius",
                "colors",
                "backfillStart",
                "backfillEnd"
            ],
            "events": []
        },
        "GradientColorRef": {
            "description": "A simple object consisting of a color and an offset.",
            "functions": [],
            "properties": [
                "color",
                "offset"
            ],
            "events": []
        },
        "Dimension": {
            "description": "A simple object consisting of the position and size measurements.",
            "functions": [],
            "properties": [
                "height",
                "width",
                "x",
                "y"
            ],
            "events": []
        },
        "AnimationOption": {
            "description": "Optional parameter to enable animation to <a href=\"Titanium.UI.View.hide\">hide</a> and <a href=\"Titanium.UI.View.show\">show</a>.",
            "functions": [],
            "properties": [
                "animated"
            ],
            "events": []
        },
        "Ti.UI.WebView": {
            "description": "The web view allows you to open an HTML5 based view which can load either local or remote content. ",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "pause",
                "repaint",
                "release",
                "resume",
                "canGoBack",
                "canGoForward",
                "evalJS",
                "goBack",
                "goForward",
                "reload",
                "setBasicAuthentication",
                "stopLoading",
                "setHtml",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getDisableBounce",
                "setDisableBounce",
                "getEnableJavascriptInterface",
                "setEnableJavascriptInterface",
                "getHandlePlatformUrl",
                "setHandlePlatformUrl",
                "getHideLoadIndicator",
                "setHideLoadIndicator",
                "getIgnoreSslError",
                "setIgnoreSslError",
                "getOnCreateWindow",
                "setOnCreateWindow",
                "getOverScrollMode",
                "setOverScrollMode",
                "getCacheMode",
                "setCacheMode",
                "getPluginState",
                "setPluginState",
                "getScrollsToTop",
                "setScrollsToTop",
                "getShowScrollbars",
                "setShowScrollbars",
                "getEnableZoomControls",
                "setEnableZoomControls",
                "getUserAgent",
                "setUserAgent",
                "getWillHandleTouches",
                "setWillHandleTouches",
                "getLightTouchEnabled",
                "setLightTouchEnabled",
                "getData",
                "setData",
                "getHtml",
                "setHtml",
                "getLoading",
                "setLoading",
                "getScalesPageToFit",
                "setScalesPageToFit",
                "getUrl",
                "setUrl"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "disableBounce",
                "enableJavascriptInterface",
                "handlePlatformUrl",
                "hideLoadIndicator",
                "ignoreSslError",
                "onCreateWindow",
                "overScrollMode",
                "cacheMode",
                "pluginState",
                "scrollsToTop",
                "showScrollbars",
                "enableZoomControls",
                "userAgent",
                "willHandleTouches",
                "lightTouchEnabled",
                "data",
                "html",
                "loading",
                "scalesPageToFit",
                "url"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "onLoadResource",
                "sslerror",
                "load",
                "error",
                "beforeload"
            ]
        },
        "Ti.UI.Window": {
            "description": "The Window is an empty drawing surface or container.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "hideNavBar",
                "hideTabBar",
                "setToolbar",
                "showNavBar",
                "close",
                "open",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundDisabledColor",
                "setBackgroundDisabledColor",
                "getBackgroundDisabledImage",
                "setBackgroundDisabledImage",
                "getBackgroundFocusedColor",
                "setBackgroundFocusedColor",
                "getBackgroundFocusedImage",
                "setBackgroundFocusedImage",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundSelectedColor",
                "setBackgroundSelectedColor",
                "getBackgroundSelectedImage",
                "setBackgroundSelectedImage",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getElevation",
                "setElevation",
                "getFocusable",
                "setFocusable",
                "getOverrideCurrentAnimation",
                "setOverrideCurrentAnimation",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getSoftKeyboardOnFocus",
                "setSoftKeyboardOnFocus",
                "getTransform",
                "setTransform",
                "getTranslationX",
                "setTranslationX",
                "getTranslationY",
                "setTranslationY",
                "getTranslationZ",
                "setTranslationZ",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getKeepScreenOn",
                "setKeepScreenOn",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getActivity",
                "getBackButtonTitle",
                "setBackButtonTitle",
                "getBackButtonTitleImage",
                "setBackButtonTitleImage",
                "getBarImage",
                "setBarImage",
                "getFlagSecure",
                "setFlagSecure",
                "getIncludeOpaqueBars",
                "setIncludeOpaqueBars",
                "getAutoAdjustScrollViewInsets",
                "setAutoAdjustScrollViewInsets",
                "getLeftNavButton",
                "setLeftNavButton",
                "getLeftNavButtons",
                "setLeftNavButtons",
                "getOrientation",
                "getRightNavButton",
                "setRightNavButton",
                "getRightNavButtons",
                "setRightNavButtons",
                "getShadowImage",
                "setShadowImage",
                "getSplitActionBar",
                "setSplitActionBar",
                "getStatusBarStyle",
                "setStatusBarStyle",
                "getTabBarHidden",
                "setTabBarHidden",
                "getTitle",
                "setTitle",
                "getTitleControl",
                "setTitleControl",
                "getTitleImage",
                "setTitleImage",
                "getTitlePrompt",
                "setTitlePrompt",
                "getTitleid",
                "setTitleid",
                "getTitlepromptid",
                "setTitlepromptid",
                "getToolbar",
                "setToolbar",
                "getTransitionAnimation",
                "setTransitionAnimation",
                "getUrl",
                "setUrl",
                "getWindowFlags",
                "setWindowFlags",
                "getWindowSoftInputMode",
                "setWindowSoftInputMode",
                "getWindowPixelFormat",
                "setWindowPixelFormat",
                "getBarColor",
                "setBarColor",
                "getExitOnClose",
                "setExitOnClose",
                "getExtendEdges",
                "setExtendEdges",
                "getFullscreen",
                "setFullscreen",
                "getHideShadow",
                "setHideShadow",
                "getModal",
                "setModal",
                "getNavBarHidden",
                "setNavBarHidden",
                "getNavTintColor",
                "setNavTintColor",
                "getOrientationModes",
                "setOrientationModes",
                "getTheme",
                "setTheme",
                "getTitleAttributes",
                "setTitleAttributes",
                "getTranslucent",
                "setTranslucent"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundDisabledColor",
                "backgroundDisabledImage",
                "backgroundFocusedColor",
                "backgroundFocusedImage",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundSelectedColor",
                "backgroundSelectedImage",
                "backgroundTopCap",
                "clipMode",
                "elevation",
                "focusable",
                "overrideCurrentAnimation",
                "pullBackgroundColor",
                "previewContext",
                "softKeyboardOnFocus",
                "transform",
                "translationX",
                "translationY",
                "translationZ",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "keepScreenOn",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "backButtonTitle",
                "backButtonTitleImage",
                "barImage",
                "flagSecure",
                "includeOpaqueBars",
                "autoAdjustScrollViewInsets",
                "leftNavButton",
                "leftNavButtons",
                "rightNavButton",
                "rightNavButtons",
                "shadowImage",
                "splitActionBar",
                "statusBarStyle",
                "tabBarHidden",
                "title",
                "titleControl",
                "titleImage",
                "titlePrompt",
                "titleid",
                "titlepromptid",
                "toolbar",
                "transitionAnimation",
                "url",
                "windowFlags",
                "windowSoftInputMode",
                "windowPixelFormat",
                "barColor",
                "exitOnClose",
                "extendEdges",
                "fullscreen",
                "hideShadow",
                "modal",
                "navBarHidden",
                "navTintColor",
                "orientationModes",
                "theme",
                "titleAttributes",
                "translucent"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "keypressed",
                "longclick",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "android:back",
                "android:camera",
                "android:focus",
                "android:search",
                "android:voldown",
                "android:volup",
                "androidback",
                "androidcamera",
                "androidfocus",
                "androidsearch",
                "androidvoldown",
                "androidvolup",
                "blur",
                "close",
                "open"
            ]
        },
        "openWindowParams": {
            "description": "Dictionary of options for the <a href=\"Titanium.UI.Window.open\">open</a> method.",
            "functions": [],
            "properties": [
                "animated",
                "bottom",
                "fullscreen",
                "height",
                "left",
                "modal",
                "modalStyle",
                "modalTransitionStyle",
                "navBarHidden",
                "right",
                "top",
                "transition",
                "width",
                "activityEnterAnimation",
                "activityExitAnimation"
            ],
            "events": []
        },
        "windowToolbarParam": {
            "description": "Dictionary of options for the <a href=\"Titanium.UI.Window.setToolbar\">setToolbar</a> method.",
            "functions": [],
            "properties": [
                "translucent",
                "animated",
                "barColor",
                "tintColor"
            ],
            "events": []
        },
        "closeWindowParams": {
            "description": "Dictionary of options for the <a href=\"Titanium.UI.Window.close\">close</a> method.",
            "functions": [],
            "properties": [
                "animated",
                "activityEnterAnimation",
                "activityExitAnimation"
            ],
            "events": []
        },
        "titleAttributesParams": {
            "description": "Dictionary of options for the <a href=\"Titanium.UI.Window.titleAttributes\">titleAttributes</a> property.",
            "functions": [],
            "properties": [
                "color",
                "font",
                "shadow"
            ],
            "events": []
        },
        "shadowDict": {
            "description": "Dictionary describing the shadow effect for text.",
            "functions": [],
            "properties": [
                "blurRadius",
                "color",
                "offset"
            ],
            "events": []
        },
        "Ti.UI.iOS.AdView": {
            "description": "The AdView is a view for display Apple iAds.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "cancelAction",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getAdSize",
                "setAdSize"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "adSize"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "postlayout",
                "action",
                "error",
                "load"
            ]
        },
        "Ti.UI.iOS.AnchorAttachmentBehavior": {
            "description": "Dynamic behavior to support connections between an anchor point and an item.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAnchor",
                "setAnchor",
                "getDamping",
                "setDamping",
                "getDistance",
                "setDistance",
                "getFrequency",
                "setFrequency",
                "getItem",
                "setItem",
                "getOffset",
                "setOffset"
            ],
            "properties": [
                "bubbleParent",
                "anchor",
                "damping",
                "distance",
                "frequency",
                "item",
                "offset"
            ],
            "events": []
        },
        "Ti.UI.iOS.Animator": {
            "description": "Provides support for the built-in iOS dynamic animations",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addBehavior",
                "removeAllBehaviors",
                "removeBehavior",
                "startAnimator",
                "stopAnimator",
                "updateItemUsingCurrentState",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getBehaviors",
                "setBehaviors",
                "getReferenceView",
                "setReferenceView",
                "getRunning"
            ],
            "properties": [
                "bubbleParent",
                "behaviors",
                "referenceView"
            ],
            "events": [
                "pause",
                "resume"
            ]
        },
        "Ti.UI.iOS.ApplicationShortcuts": {
            "description": "The Home screen quick action API is for adding shortcuts to your app icon that anticipate and accelerate a user's interaction with your app.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "listDynamicShortcuts",
                "listStaticShortcuts",
                "removeAllDynamicShortcuts",
                "dynamicShortcutExists",
                "addDynamicShortcut",
                "removeDynamicShortcut",
                "getDynamicShortcut",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "ShortcutParams": {
            "description": "Dictionary of options for <a href=\"Titanium.UI.iOS.ApplicationShortcuts.addDynamicShortcut\">addDynamicShortcut</a>.",
            "functions": [],
            "properties": [
                "itemtype",
                "title",
                "subtitle",
                "icon"
            ],
            "events": []
        },
        "Ti.UI.iOS.CollisionBehavior": {
            "description": "Dynamic behavior to support collisions between items and boundaries.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addBoundary",
                "addItem",
                "removeAllBoundaries",
                "removeBoundary",
                "removeItem",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getBoundaryIdentifiers",
                "getCollisionMode",
                "setCollisionMode",
                "getItems",
                "getReferenceInsets",
                "setReferenceInsets",
                "getTreatReferenceAsBoundary",
                "setTreatReferenceAsBoundary"
            ],
            "properties": [
                "bubbleParent",
                "collisionMode",
                "referenceInsets",
                "treatReferenceAsBoundary"
            ],
            "events": [
                "boundarycollision",
                "itemcollision"
            ]
        },
        "BoundaryIdentifier": {
            "description": "Dictionary to specify a boundary identifier for <a href=\"Titanium.UI.iOS.CollisionBehavior.addBoundary\">addBoundary</a>.",
            "functions": [],
            "properties": [
                "identifier",
                "point1",
                "point2"
            ],
            "events": []
        },
        "ReferenceInsets": {
            "description": "Dictionary to specify edge insets for <a href=\"Titanium.UI.iOS.CollisionBehavior.referenceInsets\">referenceInsets</a>.",
            "functions": [],
            "properties": [
                "top",
                "left",
                "right",
                "bottom"
            ],
            "events": []
        },
        "Ti.UI.iOS.CoverFlowView": {
            "description": "The cover flow view is a container showing animated three-dimensional images in a style \nconsistent with the cover flow presentation style used for iPod, iTunes, and file browsing.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "setImage",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getImages",
                "setImages",
                "getSelected",
                "setSelected"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "images",
                "selected"
            ],
            "events": [
                "click",
                "postlayout",
                "change"
            ]
        },
        "CoverFlowImageType": {
            "description": "Simple object for defining a single image in a cover flow view.",
            "functions": [],
            "properties": [
                "image",
                "width",
                "height"
            ],
            "events": []
        },
        "Ti.UI.iOS.DocumentViewer": {
            "description": "A DocumentViewer provides in-app support for managing user interactions with files on the\nlocal system.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getName",
                "getUrl",
                "setUrl"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "url"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "postlayout",
                "load",
                "menu",
                "unload"
            ]
        },
        "DocumentViewerOptions": {
            "description": "A simple object for specifying options when showing or dismissing a <a href=\"Titanium.UI.iOS.DocumentViewer\">DocumentViewer</a>.",
            "functions": [],
            "properties": [
                "animated",
                "view"
            ],
            "events": []
        },
        "Ti.UI.iOS.DynamicItemBehavior": {
            "description": "Base dynamic configuration for an item.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addAngularVelocityForItem",
                "addItem",
                "addLinearVelocityForItem",
                "angularVelocityForItem",
                "linearVelocityForItem",
                "removeItem",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAllowsRotation",
                "setAllowsRotation",
                "getAngularResistance",
                "setAngularResistance",
                "getDensity",
                "setDensity",
                "getElasticity",
                "setElasticity",
                "getFriction",
                "setFriction",
                "getItems",
                "getResistance",
                "setResistance"
            ],
            "properties": [
                "bubbleParent",
                "allowsRotation",
                "angularResistance",
                "density",
                "elasticity",
                "friction",
                "resistance"
            ],
            "events": []
        },
        "Ti.UI.iOS.GravityBehavior": {
            "description": "Gravitational force to apply to an item.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addItem",
                "removeItem",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAngle",
                "setAngle",
                "getGravityDirection",
                "setGravityDirection",
                "getItems",
                "getMagnitude",
                "setMagnitude"
            ],
            "properties": [
                "bubbleParent",
                "angle",
                "gravityDirection",
                "magnitude"
            ],
            "events": []
        },
        "Ti.UI.iOS.NavigationWindow": {
            "description": "A <code>NavigationWindow</code> implements a specialized view that manages the navigation of hierarchical \ncontent. ",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "hideNavBar",
                "showNavBar",
                "close",
                "open",
                "closeWindow",
                "openWindow",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getIncludeOpaqueBars",
                "setIncludeOpaqueBars",
                "getAutoAdjustScrollViewInsets",
                "setAutoAdjustScrollViewInsets",
                "getLeftNavButtons",
                "setLeftNavButtons",
                "getOrientation",
                "getRightNavButtons",
                "setRightNavButtons",
                "getStatusBarStyle",
                "setStatusBarStyle",
                "getExtendEdges",
                "setExtendEdges",
                "getFullscreen",
                "setFullscreen",
                "getModal",
                "setModal",
                "getOrientationModes",
                "setOrientationModes",
                "getTitleAttributes",
                "setTitleAttributes",
                "getWindow",
                "setWindow"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "includeOpaqueBars",
                "autoAdjustScrollViewInsets",
                "leftNavButtons",
                "rightNavButtons",
                "statusBarStyle",
                "extendEdges",
                "fullscreen",
                "modal",
                "orientationModes",
                "titleAttributes",
                "window"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "blur",
                "close",
                "open"
            ]
        },
        "Ti.UI.iOS.PreviewAction": {
            "description": "A PreviewAction provides options to configure actions used by the iOS 9 3D-Touch \"Peek and Pop\"\nfeature.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getTitle",
                "setTitle",
                "getStyle",
                "setStyle"
            ],
            "properties": [
                "bubbleParent",
                "title",
                "style"
            ],
            "events": [
                "click"
            ]
        },
        "Ti.UI.iOS.PreviewActionGroup": {
            "description": "A PreviewActionGroup provides options to configure a group of actions used by the iOS9 3D-Touch\nfeature \"Peek and Pop\".",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getTitle",
                "setTitle",
                "getStyle",
                "setStyle",
                "getActions",
                "setActions"
            ],
            "properties": [
                "bubbleParent",
                "title",
                "style",
                "actions"
            ],
            "events": []
        },
        "Ti.UI.iOS.PreviewContext": {
            "description": "A PreviewContext provides options to configure the iOS 9 3D-Touch \"Peek and Pop\" feature.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getActions",
                "setActions",
                "getContentHeight",
                "setContentHeight",
                "getPreview",
                "setPreview"
            ],
            "properties": [
                "bubbleParent",
                "actions",
                "contentHeight",
                "preview"
            ],
            "events": [
                "peek",
                "pop"
            ]
        },
        "Ti.UI.iOS.PushBehavior": {
            "description": "Continuous or instantaneous force to apply to an item.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "addItem",
                "removeItem",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getActive",
                "setActive",
                "getAngle",
                "setAngle",
                "getItems",
                "getMagnitude",
                "setMagnitude",
                "getPushDirection",
                "setPushDirection",
                "getPushMode",
                "setPushMode"
            ],
            "properties": [
                "bubbleParent",
                "active",
                "angle",
                "magnitude",
                "pushDirection",
                "pushMode"
            ],
            "events": []
        },
        "Ti.UI.iOS.SnapBehavior": {
            "description": "Dynamic behavior defining an item's movement to a specific point.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getDamping",
                "setDamping",
                "getItem",
                "setItem",
                "getSnapPoint",
                "setSnapPoint"
            ],
            "properties": [
                "bubbleParent",
                "damping",
                "item",
                "snapPoint"
            ],
            "events": []
        },
        "Ti.UI.iOS.SplitWindow": {
            "description": "A SplitWindow is a window that manages the presentation of two side-by-side view \ncontrollers. ",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "hideNavBar",
                "hideTabBar",
                "setToolbar",
                "showNavBar",
                "close",
                "open",
                "setShowMasterInPortrait",
                "setMasterIsOverlayed",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getBackButtonTitle",
                "setBackButtonTitle",
                "getBackButtonTitleImage",
                "setBackButtonTitleImage",
                "getBarImage",
                "setBarImage",
                "getIncludeOpaqueBars",
                "setIncludeOpaqueBars",
                "getAutoAdjustScrollViewInsets",
                "setAutoAdjustScrollViewInsets",
                "getLeftNavButton",
                "setLeftNavButton",
                "getLeftNavButtons",
                "setLeftNavButtons",
                "getOrientation",
                "getRightNavButton",
                "setRightNavButton",
                "getRightNavButtons",
                "setRightNavButtons",
                "getShadowImage",
                "setShadowImage",
                "getStatusBarStyle",
                "setStatusBarStyle",
                "getTabBarHidden",
                "setTabBarHidden",
                "getTitle",
                "setTitle",
                "getTitleControl",
                "setTitleControl",
                "getTitleImage",
                "setTitleImage",
                "getTitlePrompt",
                "setTitlePrompt",
                "getTitleid",
                "setTitleid",
                "getTitlepromptid",
                "setTitlepromptid",
                "getToolbar",
                "setToolbar",
                "getUrl",
                "setUrl",
                "getBarColor",
                "setBarColor",
                "getExtendEdges",
                "setExtendEdges",
                "getFullscreen",
                "setFullscreen",
                "getHideShadow",
                "setHideShadow",
                "getModal",
                "setModal",
                "getNavBarHidden",
                "setNavBarHidden",
                "getNavTintColor",
                "setNavTintColor",
                "getOrientationModes",
                "setOrientationModes",
                "getTitleAttributes",
                "setTitleAttributes",
                "getTranslucent",
                "setTranslucent",
                "getDetailView",
                "setDetailView",
                "getMasterView",
                "setMasterView",
                "getShowMasterInPortrait",
                "setShowMasterInPortrait",
                "getMasterIsOverlayed",
                "setMasterIsOverlayed",
                "getPortraitSplit",
                "setPortraitSplit",
                "getLandscapeSplit",
                "setLandscapeSplit"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "backButtonTitle",
                "backButtonTitleImage",
                "barImage",
                "includeOpaqueBars",
                "autoAdjustScrollViewInsets",
                "leftNavButton",
                "leftNavButtons",
                "rightNavButton",
                "rightNavButtons",
                "shadowImage",
                "statusBarStyle",
                "tabBarHidden",
                "title",
                "titleControl",
                "titleImage",
                "titlePrompt",
                "titleid",
                "titlepromptid",
                "toolbar",
                "url",
                "barColor",
                "extendEdges",
                "fullscreen",
                "hideShadow",
                "modal",
                "navBarHidden",
                "navTintColor",
                "orientationModes",
                "titleAttributes",
                "translucent",
                "detailView",
                "masterView",
                "showMasterInPortrait",
                "masterIsOverlayed",
                "portraitSplit",
                "landscapeSplit"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "twofingertap",
                "touchmove",
                "focus",
                "postlayout",
                "blur",
                "close",
                "open"
            ]
        },
        "animationOption": {
            "description": "Optional parameter for <a href=\"Titanium.UI.iOS.SplitWindow.setShowMasterInPortrait\">setShowMasterInPortrait</a> and\n<a href=\"Titanium.UI.iOS.SplitWindow.setMasterIsOverlayed\">setMasterIsOverlayed</a> methods.",
            "functions": [],
            "properties": [
                "animated"
            ],
            "events": []
        },
        "Ti.UI.iOS.TabbedBar": {
            "description": "A button bar that maintains a selected state.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getBackgroundRepeat",
                "setBackgroundRepeat",
                "getBackgroundLeftCap",
                "setBackgroundLeftCap",
                "getBackgroundTopCap",
                "setBackgroundTopCap",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBackgroundColor",
                "setBackgroundColor",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLayout",
                "setLayout",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getIndex",
                "setIndex",
                "getLabels",
                "setLabels",
                "getStyle",
                "setStyle"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "backgroundRepeat",
                "backgroundLeftCap",
                "backgroundTopCap",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "backgroundColor",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "layout",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "index",
                "labels",
                "style"
            ],
            "events": [
                "click",
                "longpress",
                "pinch",
                "postlayout"
            ]
        },
        "BarItemType": {
            "description": "Object describing a button bar or tabbed bar item.",
            "functions": [],
            "properties": [
                "title",
                "image",
                "width",
                "enabled",
                "accessibilityLabel"
            ],
            "events": []
        },
        "Ti.UI.iOS.Toolbar": {
            "description": "An iOS toolbar, which can contain buttons and certain other controls.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "removeAllChildren",
                "startLayout",
                "toImage",
                "updateLayout",
                "convertPointToView",
                "add",
                "animate",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAccessibilityHidden",
                "setAccessibilityHidden",
                "getAccessibilityHint",
                "setAccessibilityHint",
                "getAccessibilityLabel",
                "setAccessibilityLabel",
                "getAccessibilityValue",
                "setAccessibilityValue",
                "getAnchorPoint",
                "setAnchorPoint",
                "getAnimatedCenter",
                "getBackgroundGradient",
                "setBackgroundGradient",
                "getClipMode",
                "setClipMode",
                "getPullBackgroundColor",
                "setPullBackgroundColor",
                "getPreviewContext",
                "setPreviewContext",
                "getTransform",
                "setTransform",
                "getViewShadowRadius",
                "setViewShadowRadius",
                "getViewShadowColor",
                "setViewShadowColor",
                "getViewShadowOffset",
                "setViewShadowOffset",
                "getHorizontalWrap",
                "setHorizontalWrap",
                "getBackgroundImage",
                "setBackgroundImage",
                "getBorderColor",
                "setBorderColor",
                "getBorderRadius",
                "setBorderRadius",
                "getBorderWidth",
                "setBorderWidth",
                "getBottom",
                "setBottom",
                "getCenter",
                "setCenter",
                "getChildren",
                "getHeight",
                "setHeight",
                "getLeft",
                "setLeft",
                "getOpacity",
                "setOpacity",
                "getRect",
                "getRight",
                "setRight",
                "getSize",
                "getTintColor",
                "setTintColor",
                "getTop",
                "setTop",
                "getTouchEnabled",
                "setTouchEnabled",
                "getVisible",
                "setVisible",
                "getWidth",
                "setWidth",
                "getZIndex",
                "setZIndex",
                "getBarColor",
                "setBarColor",
                "getItems",
                "setItems",
                "getBorderTop",
                "setBorderTop",
                "getBorderBottom",
                "setBorderBottom",
                "getExtendBackground",
                "setExtendBackground",
                "getTranslucent",
                "setTranslucent"
            ],
            "properties": [
                "bubbleParent",
                "accessibilityHidden",
                "accessibilityHint",
                "accessibilityLabel",
                "accessibilityValue",
                "anchorPoint",
                "backgroundGradient",
                "clipMode",
                "pullBackgroundColor",
                "previewContext",
                "transform",
                "viewShadowRadius",
                "viewShadowColor",
                "viewShadowOffset",
                "horizontalWrap",
                "backgroundImage",
                "borderColor",
                "borderRadius",
                "borderWidth",
                "bottom",
                "center",
                "height",
                "left",
                "opacity",
                "right",
                "tintColor",
                "top",
                "touchEnabled",
                "visible",
                "width",
                "zIndex",
                "barColor",
                "items",
                "borderTop",
                "borderBottom",
                "extendBackground",
                "translucent"
            ],
            "events": [
                "click",
                "dblclick",
                "doubletap",
                "longpress",
                "pinch",
                "singletap",
                "swipe",
                "touchcancel",
                "touchend",
                "touchstart",
                "touchmove",
                "postlayout"
            ]
        },
        "Ti.UI.iOS.ViewAttachmentBehavior": {
            "description": "Dynamic behavior to support connections between two items.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAnchorItem",
                "setAnchorItem",
                "getAnchorOffset",
                "setAnchorOffset",
                "getDamping",
                "setDamping",
                "getDistance",
                "setDistance",
                "getFrequency",
                "setFrequency",
                "getItem",
                "setItem",
                "getItemOffset",
                "setItemOffset"
            ],
            "properties": [
                "bubbleParent",
                "anchorItem",
                "anchorOffset",
                "damping",
                "distance",
                "frequency",
                "item",
                "itemOffset"
            ],
            "events": []
        },
        "Ti.UI.iOS": {
            "description": "Apple iOS specific UI capabilities.  All properties, methods and events in this namespace will \nonly work on Apple iOS devices.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createTransitionAnimation",
                "create3DMatrix",
                "createAdView",
                "createAnchorAttachmentBehavior",
                "createAnimator",
                "createApplicationShortcuts",
                "createAttribute",
                "createAttributedString",
                "createCollisionBehavior",
                "createCoverFlowView",
                "createDocumentViewer",
                "createDynamicItemBehavior",
                "createGravityBehavior",
                "createNavigationWindow",
                "createPreviewAction",
                "createPreviewActionGroup",
                "createPreviewContext",
                "createPushBehavior",
                "createSnapBehavior",
                "createSplitWindow",
                "createTabbedBar",
                "createToolbar",
                "createViewAttachmentBehavior",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getForceTouchSupported",
                "setForceTouchSupported"
            ],
            "properties": [
                "bubbleParent",
                "forceTouchSupported"
            ],
            "events": []
        },
        "transitionAnimationParam": {
            "description": "Dictionary specifying the transition animation used with the <a href=\"Titanium.UI.iOS.createTransitionAnimation\">createTransitionAnimation</a> method.\nOnly supported on iOS 7 and later.",
            "functions": [],
            "properties": [
                "duration",
                "transitionFrom",
                "tranistionTo"
            ],
            "events": []
        },
        "Ti.UI.iPad.Popover": {
            "description": "A Popover is used to manage the presentation of content in a popover.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "finishLayout",
                "startLayout",
                "updateLayout",
                "add",
                "hide",
                "remove",
                "show",
                "insertAt",
                "replaceAt",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getHeight",
                "setHeight",
                "getWidth",
                "setWidth",
                "getArrowDirection",
                "setArrowDirection",
                "getContentView",
                "setContentView",
                "getLeftNavButton",
                "setLeftNavButton",
                "getPassthroughViews",
                "setPassthroughViews",
                "getRightNavButton",
                "setRightNavButton",
                "getTitle",
                "setTitle"
            ],
            "properties": [
                "bubbleParent",
                "height",
                "width",
                "arrowDirection",
                "contentView",
                "leftNavButton",
                "passthroughViews",
                "rightNavButton",
                "title"
            ],
            "events": [
                "hide"
            ]
        },
        "PopoverParams": {
            "description": "Dictionary of options for <a href=\"Titanium.UI.iPad.Popover.show\">show</a> and <a href=\"Titanium.UI.iPad.Popover.hide\">hide</a>.",
            "functions": [],
            "properties": [
                "animated",
                "rect",
                "view"
            ],
            "events": []
        },
        "Ti.UI.iPad": {
            "description": "iPad specific UI capabilities.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "createDocumentViewer",
                "createPopover",
                "createSplitWindow",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.AlertDialogStyle": {
            "description": "A set of constants for the style that can be used for the <code>style</code> property of \n<a href=\"Titanium.UI.AlertDialog\">AlertDialog</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.AnimationStyle": {
            "description": "A set of constants for the animation styles used for view transitions.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.ListViewCellSelectionStyle": {
            "description": "A set of constants for the style that can be used for the <code>selectionStyle</code> property of a\nListItem, which is set in the <code>properties</code> dictionary of either the <a href=\"ListDataItem\">ListDataItem</a> or\n<a href=\"ItemTemplate\">ItemTemplate</a>.",
            "functions": [
                "getApiName"
            ],
            "properties": [],
            "events": []
        },
        "Ti.UI.iPhone.ListViewScrollPosition": {
            "description": "A set of constants for the position value that can be used for the <code>position</code> property of \n<a href=\"ListViewAnimationProperties\">ListViewAnimationProperties</a> when invoking the ListView's <code>scrollToItem</code>, <code>appendSection</code>,\n<code>deleteSectionAt</code>, <code>insertSectionAt</code> and <code>replaceSectionAt</code> methods.",
            "functions": [
                "getApiName"
            ],
            "properties": [],
            "events": []
        },
        "Ti.UI.iPhone.ListViewSeparatorStyle": {
            "description": "A set of constants for the style that can be used for the <code>separatorStyle</code> property of \n<a href=\"Titanium.UI.ListView\">ListView</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.ListViewStyle": {
            "description": "A set of constants for the style that can be used for the <code>style</code> property of \n<a href=\"Titanium.UI.ListView\">ListView</a>.",
            "functions": [
                "getApiName"
            ],
            "properties": [],
            "events": []
        },
        "Ti.UI.iPhone.ProgressBarStyle": {
            "description": "A set of constants for the bar styles used on the <code>style</code> property of <a href=\"Titanium.UI.ProgressBar\">ProgressBar</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.RowAnimationStyle": {
            "description": "A set of constants for the Animation Styles used for transition on table view rows.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.ScrollIndicatorStyle": {
            "description": "A set of constants for the styles available for scrollbars used with <a href=\"Titanium.UI.ScrollView.scrollIndicatorStyle\">scrollIndicatorStyle</a> and <a href=\"Titanium.UI.TableView.scrollIndicatorStyle\">scrollIndicatorStyle</a> properties.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.StatusBar": {
            "description": "A set of constants for the status bar style.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.SystemButton": {
            "description": "A set of constants for creating standard iOS system buttons.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.SystemButtonStyle": {
            "description": "A set of constants for the system button styles that can be used for the button <code>style</code> property.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.SystemIcon": {
            "description": "A set of constants for the system icon styles that can be used on a tab group tab.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.TableViewCellSelectionStyle": {
            "description": "A set of constants for the style that can be used for the <code>selectionStyle</code> property of \n<a href=\"Titanium.UI.TableViewRow\">TableViewRow</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.TableViewScrollPosition": {
            "description": "A set of constants for the position value that can be used for the <code>position</code> property of \n<a href=\"Titanium.UI.TableView\">TableView</a> when invoking <code>scrollToIndex</code>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.TableViewSeparatorStyle": {
            "description": "A set of constants for the style that can be used for the <code>separatorStyle</code> property of \n<a href=\"Titanium.UI.TableView\">TableView</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone.TableViewStyle": {
            "description": "A set of constants for the style that can be used for the button <code>style</code> property of \n<a href=\"Titanium.UI.TableView\">TableView</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": []
        },
        "Ti.UI.iPhone": {
            "description": "The iPhone/iPad-specific UI capabilities.  All properties, methods and events in this namespace \nwill only work on Apple iOS systems.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "hideStatusBar",
                "showStatusBar",
                "createNavigationGroup",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getAppBadge",
                "setAppBadge",
                "getAppSupportsShakeToEdit",
                "setAppSupportsShakeToEdit",
                "getStatusBarHidden",
                "getStatusBarStyle"
            ],
            "properties": [
                "bubbleParent",
                "appBadge",
                "appSupportsShakeToEdit"
            ],
            "events": []
        },
        "hideStatusBarParams": {
            "description": "Dictionary of options for the <a href=\"Titanium.UI.iPhone.hideStatusBar\">hideStatusBar</a> method.",
            "functions": [],
            "properties": [
                "animated",
                "animationStyle"
            ],
            "events": []
        },
        "showStatusBarParams": {
            "description": "Dictionary of options for the <a href=\"Titanium.UI.iPhone.showStatusBar\">showStatusBar</a> method.",
            "functions": [],
            "properties": [
                "animated",
                "animationStyle"
            ],
            "events": []
        },
        "Ti.Utils": {
            "description": "The top-level Utils module, containing a set of JavaScript methods that are often useful when \nbuilding applications.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "base64decode",
                "base64encode",
                "md5HexDigest",
                "sha1",
                "sha256",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.WatchSession": {
            "description": "Used to enable data and file transfers between a watchOS and iOS application.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "activateSession",
                "sendMessage",
                "updateApplicationContext",
                "transferUserInfo",
                "transferFile",
                "transferCurrentComplication",
                "cancelAllUserInfoTransfers",
                "cancelAllFileTransfers",
                "cancelAllTransfers",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getIsSupported",
                "getIsPaired",
                "getIsWatchAppInstalled",
                "getIsComplicationEnabled",
                "getIsReachable",
                "getRecentApplicationContext"
            ],
            "properties": [
                "bubbleParent"
            ],
            "events": [
                "receivemessage",
                "receiveapplicationcontext",
                "receiveuserinfo",
                "receivefile",
                "watchstatechanged",
                "reachabilitychanged",
                "finishuserinfotransfer",
                "finishfiletransfer"
            ]
        },
        "MessageReply": {
            "description": "Reply message received from watch app.",
            "functions": [],
            "properties": [
                "message",
                "success",
                "error",
                "code"
            ],
            "events": []
        },
        "Ti.XML.Attr": {
            "description": "Represents an attribute of an <a href=\"Titanium.XML.Element\">Element</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getValue",
                "setValue",
                "getName",
                "getSpecified",
                "getOwnerElement"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName",
                "value"
            ],
            "events": []
        },
        "Ti.XML.CDATASection": {
            "description": "Used to include blocks of literal text containing characters that would otherwise need\nto be escaped.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "substringData",
                "appendData",
                "insertData",
                "deleteData",
                "replaceData",
                "splitText",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getData",
                "setData",
                "getLength"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName",
                "data"
            ],
            "events": []
        },
        "Ti.XML.CharacterData": {
            "description": "An interface extending <a href=\"Titanium.XML.Node\">Node</a> with a set of attributes and methods for accessing character data in the DOM.\nImplements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-FF21A306\">DOM Level 2 API</a> on Android and iOS. For reasons of compatibility with the javascript engine, text is represented by UTF-8 instead of UTF-16 on Android and iOS. Exposes the <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-FF21A306\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "substringData",
                "appendData",
                "insertData",
                "deleteData",
                "replaceData",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getData",
                "setData",
                "getLength"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName",
                "data"
            ],
            "events": []
        },
        "Ti.XML.Comment": {
            "description": "Represents the contents of an XML comment.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "substringData",
                "appendData",
                "insertData",
                "deleteData",
                "replaceData",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getData",
                "setData",
                "getLength"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName",
                "data"
            ],
            "events": []
        },
        "Ti.XML.DOMImplementation": {
            "description": "The <a href=\"Titanium.XML.DOMImplementation\">DOMImplementation</a> interface provides a number of methods for performing operations that are independent of any particular instance of the document object model.Implements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490\">DOM Level 2 API</a> on Android and iOS. Exposes the <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "hasFeature",
                "createDocumentType",
                "createDocument",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.XML.Document": {
            "description": "The DOM Document returned from <a href=\"Titanium.XML.parseString\">parseString</a>.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "createElement",
                "createDocumentFragment",
                "createTextNode",
                "createComment",
                "createCDATASection",
                "createProcessingInstruction",
                "createAttribute",
                "createEntityReference",
                "getElementsByTagName",
                "importNode",
                "createElementNS",
                "createAttributeNS",
                "getElementsByTagNameNS",
                "getElementById",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getDoctype",
                "getImplementation",
                "getDocumentElement"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName"
            ],
            "events": []
        },
        "Ti.XML.DocumentFragment": {
            "description": "A lightweight document object used as a container for a group of nodes.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName"
            ],
            "events": []
        },
        "Ti.XML.DocumentType": {
            "description": "Each <a href=\"Titanium.XML.Document\">Document</a> has a <code>doctype</code> attribute whose value is either 'null' or a <a href=\"Titanium.XML.DocumentType\">DocumentType</a> object.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getName",
                "getEntities",
                "getNotations",
                "getPublicId",
                "getSystemId",
                "getInternalSubset"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName"
            ],
            "events": []
        },
        "Ti.XML.Element": {
            "description": "Represents an element in a DOM document, a <a href=\"Titanium.XML.Node\">Node</a>  defined by a start-tag and end-tag (or an empty tag). Elements may have <a href=\"Titanium.XML.Attr\">attributes</a> associated with them.\nImplements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614\">DOM Level 2 API</a>  on Android and iOS with some non-standard extensions. Exposes the  <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-745549614\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "getAttribute",
                "setAttribute",
                "removeAttribute",
                "getAttributeNode",
                "setAttributeNode",
                "removeAttributeNode",
                "getElementsByTagName",
                "getAttributeNS",
                "setAttributeNS",
                "removeAttributeNS",
                "getAttributeNodeNS",
                "setAttributeNodeNS",
                "getElementsByTagNameNS",
                "hasAttribute",
                "hasAttributeNS",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getTagName"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName"
            ],
            "events": []
        },
        "Ti.XML.Entity": {
            "description": "This interface represents an entity, either parsed or unparsed, in an XML document. Note that this models the entity itself not the entity declaration. The nodeName attribute that is inherited from Node contains the name of the entity. An Entity node does not have any parent.\nImplements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-527DCFF2\">DOM Level 2 API</a> on Android and iOS. Exposes the <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-527DCFF2\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getPublicId",
                "getSystemId",
                "getNotationName"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName"
            ],
            "events": []
        },
        "Ti.XML.EntityReference": {
            "description": "Represents an XML entity reference.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName"
            ],
            "events": []
        },
        "Ti.XML.NamedNodeMap": {
            "description": "A key-value paired map that maps String objects to  <a href=\"Titanium.XML.Node\">Node</a> objects. \nImplements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1780488922\">DOM Level 2 API</a>  on Android and iOS. Exposes the  <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1780488922\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getNamedItem",
                "setNamedItem",
                "removeNamedItem",
                "item",
                "getNamedItemNS",
                "setNamedItemNS",
                "removeNamedItemNS",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getLength"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.XML.Node": {
            "description": "A single node in the <a href=\"Titanium.XML.Document\">Document</a> tree.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName"
            ],
            "events": []
        },
        "Ti.XML.NodeList": {
            "description": "A list of <a href=\"Titanium.XML.Node\">Node</a> objects. Implements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-536297177\">DOM Level 2 API</a> on Android and iOS. Exposes the <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-536297177\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "item",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getLength"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.XML.Notation": {
            "description": "Represents a notation declared in the DTD.  Implements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-5431D1B9\">DOM Level 2 API</a> on Android and iOS. Exposes the <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-5431D1B9\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getPublicId",
                "getSystemId"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.XML.ProcessingInstruction": {
            "description": "A way to keep processor-specific information in the text of the document. Implements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1004215813\">DOM Level 2 API</a> on Android and iOS. Exposes the <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1004215813\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getData",
                "setData",
                "getTarget"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "data"
            ],
            "events": []
        },
        "Ti.XML.Text": {
            "description": "Represents the textual content of an <a href=\"Titanium.XML.Element\">Element</a> or <a href=\"Titanium.XML.Attr\">Attr</a> Implements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1312295772\">DOM Level 2 API</a> on Android and iOS. Exposes the <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1312295772\">DOM Level 3 API</a> implementation on Mobile Web.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "insertBefore",
                "replaceChild",
                "removeChild",
                "appendChild",
                "hasChildNodes",
                "cloneNode",
                "normalize",
                "isSupported",
                "hasAttributes",
                "substringData",
                "appendData",
                "insertData",
                "deleteData",
                "replaceData",
                "splitText",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer",
                "getTextContent",
                "getText",
                "getNodeValue",
                "setNodeValue",
                "getPrefix",
                "setPrefix",
                "getNodeName",
                "getNodeType",
                "getParentNode",
                "getChildNodes",
                "getFirstChild",
                "getLastChild",
                "getPreviousSibling",
                "getNextSibling",
                "getAttributes",
                "getOwnerDocument",
                "getNamespaceURI",
                "getLocalName",
                "setLocalName",
                "getData",
                "setData",
                "getLength"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer",
                "nodeValue",
                "prefix",
                "localName",
                "data"
            ],
            "events": []
        },
        "Ti.XML": {
            "description": "The top level XML module.  The XML module is used for parsing and processing XML-based content.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "parseString",
                "serializeToString",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "Ti.Yahoo": {
            "description": "The top level Yahoo module.  The Yahoo module is used for accessing Yahoo related API services.",
            "functions": [
                "addEventListener",
                "removeEventListener",
                "applyProperties",
                "fireEvent",
                "yql",
                "getBubbleParent",
                "setBubbleParent",
                "getApiName",
                "getLifecycleContainer",
                "setLifecycleContainer"
            ],
            "properties": [
                "bubbleParent",
                "lifecycleContainer"
            ],
            "events": []
        },
        "YQLResponse": {
            "description": "Properties passed to a yql callback to report a success or failure.",
            "functions": [],
            "properties": [
                "success",
                "error",
                "code",
                "message",
                "data"
            ],
            "events": []
        },
        "Dictionary": {
            "description": "Plain JavaScript object.",
            "functions": [],
            "properties": [],
            "events": []
        },
        "Ti.Codec.Codec": {
            "description": "",
            "functions": [
                "getNativeByteOrder",
                "encodeNumber",
                "decodeNumber",
                "encodeString",
                "decodeString"
            ],
            "properties": [
                "CHARSET_ASCII",
                "CHARSET_ISO_LATIN_1",
                "CHARSET_UTF8",
                "CHARSET_UTF16",
                "CHARSET_UTF16BE",
                "CHARSET_UTF16LE",
                "TYPE_BYTE",
                "TYPE_SHORT",
                "TYPE_INT",
                "TYPE_FLOAT",
                "TYPE_LONG",
                "TYPE_DOUBLE",
                "BIG_ENDIAN",
                "LITTLE_ENDIAN"
            ],
            "events": []
        },
        "Ti.GlobalString": {
            "description": "",
            "functions": [
                "formatCurrency",
                "formatDate",
                "formatDecimal",
                "formatTime"
            ],
            "properties": [],
            "events": []
        },
        "Ti.Network.Socket.UDP": {
            "description": "",
            "functions": [
                "start",
                "stop",
                "sendString",
                "sendBytes",
                "getPort",
                "setPort",
                "getStarted",
                "setStarted",
                "getData",
                "setData",
                "getError",
                "setError"
            ],
            "properties": [
                "port",
                "started",
                "data",
                "error"
            ],
            "events": []
        }
    }
}