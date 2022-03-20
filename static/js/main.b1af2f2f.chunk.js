(this.webpackJsonptypingtutor = this.webpackJsonptypingtutor || []).push([
    [0],
    [, , , , , , , , , , , , , , , , , function(e, t, a) {
        "use strict";
        (function(e) {
            function n() {
                return "undefined" !== typeof window && "object" === typeof window.process && "renderer" === window.process.type || (!("undefined" === typeof e || "object" !== typeof e.versions || !e.versions.electron) || "object" === typeof navigator && "string" === typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0)
            }
            a.d(t, "a", (function() {
                return n
            }))
        }).call(this, a(63))
    }, , , , , , , , , , function(e, t, a) {
        e.exports = a.p + "static/media/ravanfire.be3bf4ba.png"
    }, , , , function(e, t, a) {
        e.exports = a.p + "static/media/yi-akshyar-logo.76946b81.png"
    }, , , , function(e, t, a) {
        e.exports = a.p + "static/media/country-platform.93ccfa4a.png"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/country-platform-ground.1baccf27.png"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/Ravan.a718839a.png"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/Ram.94a59130.png"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/arrow.3b61455b.png"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/arrow-left.93537a69.png"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/explode.309567cf.png"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/fire.6554dd2d.m4a"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/blast.0f03e381.m4a"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/arrowhit.9a8498d9.m4a"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/gameicon.c2f6ebd5.png"
    }, , , , function(e, t, a) {
        e.exports = a(68)
    }, , , , , , , , , , , , , , , function(e, t, a) {
        e.exports = a.p + "static/media/wrongkey.84eb084b.mp3"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/keypress.67ddd641.mp3"
    }, function(e, t, a) {
        e.exports = a.p + "static/media/splashscreen.be0e523a.mp3"
    }, function(e, t, a) {}, function(e, t, a) {
        "use strict";
        a.r(t);
        var n = {};
        a.r(n), a.d(n, "keyPressed", (function() {
            return qe
        })), a.d(n, "resetKeyPressed", (function() {
            return _e
        })), a.d(n, "setLoggerMemory", (function() {
            return Ve
        })), a.d(n, "resetLoggerMemory", (function() {
            return Je
        }));
        var f = {};
        a.r(f), a.d(f, "switchToClassic", (function() {
            return Ze
        })), a.d(f, "switchToRamayan", (function() {
            return Xe
        })), a.d(f, "switchToCredit", (function() {
            return Ye
        })), a.d(f, "switchToAbout", (function() {
            return Be
        })), a.d(f, "switchToSchools", (function() {
            return We
        })), a.d(f, "changeLanguage", (function() {
            return Pe
        })), a.d(f, "changeKeyRange", (function() {
            return Qe
        })), a.d(f, "changeDifficultyLevel", (function() {
            return $e
        })), a.d(f, "setActiveUser", (function() {
            return et
        }));
        var r = {};
        a.r(r), a.d(r, "archiveStrings", (function() {
            return ra
        })), a.d(r, "addTimeSpentOnClassicTutor", (function() {
            return sa
        })), a.d(r, "changeChallengeString", (function() {
            return oa
        }));
        var s = {};
        a.r(s), a.d(s, "addNewUser", (function() {
            return ga
        })), a.d(s, "updateUserData", (function() {
            return ua
        }));
        var o = {};
        a.r(o), a.d(o, "init", (function() {
            return Oa
        })), a.d(o, "register_once", (function() {
            return wa
        })), a.d(o, "track", (function() {
            return Sa
        }));
        var i = a(0),
            l = a.n(i),
            c = a(25),
            d = a.n(c),
            h = a(32),
            g = a.n(h),
            u = a(47),
            p = a(14),
            y = a(8),
            m = a(22),
            k = a(34),
            b = a.n(k),
            v = a(1),
            x = {
                currentKey: null,
                currentKeyCode: null,
                loggerMemory: ""
            },
            C = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "SET_KEY_PRESSED":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            currentKey: t.currentKey,
                            currentKeyCode: t.currentKeyCode
                        });
                    case "RESET_KEY_PRESSED":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            currentKey: null,
                            currentKeyCode: null
                        });
                    case "SET_LOGGER_MEMORY":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            loggerMemory: t.memoryString
                        });
                    case "RESET_LOGGER_MEMORY":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            loggerMemory: ""
                        });
                    default:
                        return e
                }
            },
            L = {
                traditional: {
                    numRow: {
                        easy: ["`` 11 22 33 44 55 `` 11 22 33 44 55 ``", "11 22 33 44 55 `` 11 22 33 44 55 `` 11", "``` 111 222 333 444 555 ``` 111 222", "333 444 555 ``` 111 222 333 444 555", "``` 111 222 333 444 555 ``` 111 222", "`1 23 45 `1 23 45 `1 23 45 `1 23 45 `1", "23 45 `1 23 45 `1 23 45 `1 23 45 `1 23", "`12 345 `12 345 `12 345 `12 345 `12", "345 `12 345 `12 345 `12 345 `12 345", "`123 45`1 2345 `123 45`1 2345 `123", "45`1 2345 `123 45`1 2345 `123 45`1", "66 77 88 99 00 - = 66 77 88 99 00 -", "= 66 77 88 99 00 - = 66 77 88 99 00", "666 777 888 999 000 - = 666 777", "888 999 000 - = 666 777 888 999", "000 - = 666 777 888 999 000 -", "67 89 0- =6 78 90 -= 67 89 0- =6 78 90", "-= 67 89 0- =6 78 90 -= 67 89 0- =6 78", "678 90- =67 890 -=6 789 0-= 678 90-", "=67 890 -=6 789 0-= 678 90- =67 890", "6789 0-=6 7890 -=67 890- =678 90-=", "6789 0-=6 7890 -=67 890- =678 90-=", "~~ !! @@ ## $$ %% ~~ !! @@ ## $$ %% ~~", "!! @@ ## $$ %% ~~ !! @@ ## $$ %% ~~ !!", "~~~ !!! @@@ ### $$$ %%% ~~~ !!! @@@", "### $$$ %%% ~~~ !!! @@@ ### $$$ %%%", "~~~ !!! @@@ ### $$$ %%% ~~~ !!! @@@", "~! @# $% ~! @# $% ~! @# $% ~! @# $% ~!", "@# $% ~! @# $% ~! @# $% ~! @# $% ~! @#", "~!@ #$% ~!@ #$% ~!@ #$% ~!@ #$% ~!@", "#$% ~!@ #$% ~!@ #$% ~!@ #$% ~!@ #$%", "~!@# $%~! @#$% ~!@# $%~! @#$% ~!@#", "$%~! @#$% ~!@# $%~! @#$% ~!@# $%~!", "^^ && ** (( )) _ + ^^ && ** (( )) _", "+ ^^ && ** (( )) _ + ^^ && ** (( ))", "^^^ &&& *** ((( ))) _ + ^^^ &&&", "*** ((( ))) _ + ^^^ &&& *** (((", "))) _ + ^^^ &&& *** ((( ))) _", "^& *( )_ +^ &* () _+ ^& *( )_ +^ &* ()", "_+ ^& *( )_ +^ &* () _+ ^& *( )_ +^ &*", "^&* ()_ +^& *() _+^ &*( )_+ ^&* ()_", "+^& *() _+^ &*( )_+ ^&* ()_ +^& *()", "^&*( )_+^ &*() _+^& *()_ +^&* ()_+", "^&*( )_+^ &*() _+^& *()_ +^&* ()_+", "`` 11 22 33 44 55 66 77 88 99 00 - =", "`` 11 22 33 44 55 66 77 88 99 00 - =", "`` 11 22 33 44 55 66 77 88 99 00 - =", "``` 111 222 333 444 555 666 777 888", "999 000 - = ``` 111 222 333 444", "555 666 777 888 999 000 - = ```", "`1 23 45 67 89 0- =` 12 34 56 78 90 -=", "`1 23 45 67 89 0- =` 12 34 56 78 90 -=", "`1 23 45 67 89 0- =` 12 34 56 78 90 -=", "`1 23 45 67 89 0- =` 12 34 56 78 90 -=", "`12 345 678 90- =`1 234 567 890 -=`", "123 456 789 0-= `12 345 678 90- =`1", "234 567 890 -=` 123 456 789 0-= `12", "345 678 90- =`1 234 567 890 -=` 123", "`123 4567 890- =`12 3456 7890 -=`1", "2345 6789 0-=` 1234 5678 90-= `123", "4567 890- =`12 3456 7890 -=`1 2345", "6789 0-=` 1234 5678 90-= `123 4567", "~~ !! @@ ## $$ %% ^^ && ** (( )) _ +", "~~ !! @@ ## $$ %% ^^ && ** (( )) _ +", "~~ !! @@ ## $$ %% ^^ && ** (( )) _ +", "~~~ !!! @@@ ### $$$ %%% ^^^ &&& ***", "((( ))) _ + ~~~ !!! @@@ ### $$$", "%%% ^^^ &&& *** ((( ))) _ + ~~~", "~! @# $% ^& *( )_ +~ !@ #$ %^ &* () _+", "~! @# $% ^& *( )_ +~ !@ #$ %^ &* () _+", "~! @# $% ^& *( )_ +~ !@ #$ %^ &* () _+", "~! @# $% ^& *( )_ +~ !@ #$ %^ &* () _+", "~!@ #$% ^&* ()_ +~! @#$ %^& *() _+~", "!@# $%^ &*( )_+ ~!@ #$% ^&* ()_ +~!", "@#$ %^& *() _+~ !@# $%^ &*( )_+ ~!@", "#$% ^&* ()_ +~! @#$ %^& *() _+~ !@#", "~!@# $%^& *()_ +~!@ #$%^ &*() _+~!", "@#$% ^&*( )_+~ !@#$ %^&* ()_+ ~!@#", "$%^& *()_ +~!@ #$%^ &*() _+~! @#$%", "^&*( )_+~ !@#$ %^&* ()_+ ~!@# $%^&"],
                        medium: ["~~~ ``` !!! 111 @@@ 222 ### 333 $$$", "444 %%% 555 ~~~ ``` !!! 111 @@@ 222", "### 333 $$$ 444 %%% 555 ~~~ ``` !!!", "~` !1 @2 #3 $4 %5 ~` !1 @2 #3 $4 %5 ~`", "!1 @2 #3 $4 %5 ~` !1 @2 #3 $4 %5 ~` !1", "@2 #3 $4 %5 ~` !1 @2 #3 $4 %5 ~` !1 @2", "#3 $4 %5 ~` !1 @2 #3 $4 %5 ~` !1 @2 #3", "~`! 1@2 #3$ 4%5 ~`! 1@2 #3$ 4%5 ~`!", "1@2 #3$ 4%5 ~`! 1@2 #3$ 4%5 ~`! 1@2", "#3$ 4%5 ~`! 1@2 #3$ 4%5 ~`! 1@2 #3$", "4%5 ~`! 1@2 #3$ 4%5 ~`! 1@2 #3$ 4%5", "~`!1 @2#3 $4%5 ~`!1 @2#3 $4%5 ~`!1", "@2#3 $4%5 ~`!1 @2#3 $4%5 ~`!1 @2#3", "$4%5 ~`!1 @2#3 $4%5 ~`!1 @2#3 $4%5", "~`!1 @2#3 $4%5 ~`!1 @2#3 $4%5 ~`!1", "^^^ 666 &&& 777 *** 888 ((( 999 )))", "000 ___ --- +++ === ^^^ 666 &&& 777", "*** 888 ((( 999 ))) 000 ___ --- +++", "^6 &7 *8 (9 )0 _- += ^6 &7 *8 (9 )0 _-", "+= ^6 &7 *8 (9 )0 _- += ^6 &7 *8 (9 )0", "_- += ^6 &7 *8 (9 )0 _- += ^6 &7 *8 (9", ")0 _- += ^6 &7 *8 (9 )0 _- += ^6 &7 *8", "^6& 7*8 (9) 0_- +=^ 6&7 *8( 9)0 _-+", "=^6 &7* 8(9 )0_ -+= ^6& 7*8 (9) 0_-", "+=^ 6&7 *8( 9)0 _-+ =^6 &7* 8(9 )0_", "-+= ^6& 7*8 (9) 0_- +=^ 6&7 *8( 9)0", "^6&7 *8(9 )0_- +=^6 &7*8 (9)0 _-+=", "^6&7 *8(9 )0_- +=^6 &7*8 (9)0 _-+=", "^6&7 *8(9 )0_- +=^6 &7*8 (9)0 _-+=", "^6&7 *8(9 )0_- +=^6 &7*8 (9)0 _-+=", "~~~ ``` !!! 111 @@@ 222 ### 333 $$$", "444 %%% 555 ^^^ 666 &&& 777 *** 888", "((( 999 ))) 000 ___ --- +++ === ~~~", "~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- +=", "~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- +=", "~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- +=", "~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- +=", "~`! 1@2 #3$ 4%5 ^6& 7*8 (9) 0_- +=~", "`!1 @2# 3$4 %5^ 6&7 *8( 9)0 _-+ =~`", "!1@ 2#3 $4% 5^6 &7* 8(9 )0_ -+= ~`!", "1@2 #3$ 4%5 ^6& 7*8 (9) 0_- +=~ `!1", "~`!1 @2#3 $4%5 ^6&7 *8(9 )0_- +=~`", "!1@2 #3$4 %5^6 &7*8 (9)0 _-+= ~`!1", "@2#3 $4%5 ^6&7 *8(9 )0_- +=~` !1@2", "#3$4 %5^6 &7*8 (9)0 _-+= ~`!1 @2#3", "^^^ ``` &&& 111 *** 222 ((( 333 )))", "444 ___ 555 ^^^ ``` &&& 111 *** 222", "((( 333 ))) 444 ___ 555 ^^^ ``` &&&", "^` &1 *2 (3 )4 _5 ^` &1 *2 (3 )4 _5 ^`", "&1 *2 (3 )4 _5 ^` &1 *2 (3 )4 _5 ^` &1", "*2 (3 )4 _5 ^` &1 *2 (3 )4 _5 ^` &1 *2", "(3 )4 _5 ^` &1 *2 (3 )4 _5 ^` &1 *2 (3", "^`& 1*2 (3) 4_5 ^`& 1*2 (3) 4_5 ^`&", "1*2 (3) 4_5 ^`& 1*2 (3) 4_5 ^`& 1*2", "(3) 4_5 ^`& 1*2 (3) 4_5 ^`& 1*2 (3)", "4_5 ^`& 1*2 (3) 4_5 ^`& 1*2 (3) 4_5", "^`&1 *2(3 )4_5 ^`&1 *2(3 )4_5 ^`&1", "*2(3 )4_5 ^`&1 *2(3 )4_5 ^`&1 *2(3", ")4_5 ^`&1 *2(3 )4_5 ^`&1 *2(3 )4_5", "^`&1 *2(3 )4_5 ^`&1 *2(3 )4_5 ^`&1", "~~~ 666 !!! 777 @@@ 888 ### 999 $$$", "000 %%% --- +++ === ~~~ 666 !!! 777", "@@@ 888 ### 999 $$$ 000 %%% --- +++", "~6 !7 @8 #9 $0 %- += ~6 !7 @8 #9 $0 %-", "+= ~6 !7 @8 #9 $0 %- += ~6 !7 @8 #9 $0", "%- += ~6 !7 @8 #9 $0 %- += ~6 !7 @8 #9", "$0 %- += ~6 !7 @8 #9 $0 %- += ~6 !7 @8", "~6! 7@8 #9$ 0%- +=~ 6!7 @8# 9$0 %-+", "=~6 !7@ 8#9 $0% -+= ~6! 7@8 #9$ 0%-", "+=~ 6!7 @8# 9$0 %-+ =~6 !7@ 8#9 $0%", "-+= ~6! 7@8 #9$ 0%- +=~ 6!7 @8# 9$0", "~6!7 @8#9 $0%- +=~6 !7@8 #9$0 %-+=", "~6!7 @8#9 $0%- +=~6 !7@8 #9$0 %-+=", "~6!7 @8#9 $0%- +=~6 !7@8 #9$0 %-+=", "~6!7 @8#9 $0%- +=~6 !7@8 #9$0 %-+="],
                        hard: ["-_ 1~` &% ===@ ===@ ^)! @ $#) 8` -@&!_ 92", "75 31= 86 6~5 3!@5 -@&!_ -@&!_ ^)! 31= 31=", "106 56` ~~ -@&!_ -@&!_ !)@$% 31= ~~ 54 92", "5`+ $#) -_ 601 @ -_ @ ^)! -@&!_ 366 88+", "88+ -@&!_ ===@ 88+ ]]]2= -@&!_ 56 86 ~~", "-@&!_ 681 8` 601 @ %)) ^)! %)) 6~5 1~` 5", "56 5 366 ===@ 681 ^)! 601 1~` 8` 9+ 1~`", "@$@% 106 ^)! 54 56` &% 88+ !)@$% ==@ @)!&", "601 681 6~5 54 &% 8` ^)! @)#) 86 %)) 88+", "366 %)) @)#) @)!& -@&!_ ==@ ===@ @)#) 88+"]
                    },
                    topRow: {
                        easy: ["qq ww ee rr tt qq ww ee rr tt qq ww ee", "qqq www eee rrr ttt qqq www eee rrr", "ttt qqq www eee rrr ttt qqq www eee", "qw er tq we rt qw er tq we rt qw er tq", "qwe rtq wer tqw ert qwe rtq wer tqw", "qwer tqwe rtqw ertq wert qwer tqwe", "yy uu ii oo pp [ ] \\ yy uu ii oo pp", "[ ] \\ yy uu ii oo pp [ ] \\ yy uu", "ii oo pp [ ] \\ yy uu ii oo pp [ ]", "yyy uuu iii ooo ppp [ ] \\ yyy", "uuu iii ooo ppp [ ] \\ yyy uuu", "iii ooo ppp [ ] \\ yyy uuu iii", "yu io p[ ]\\ yu io p[ ]\\ yu io p[ ]\\ yu", "io p[ ]\\ yu io p[ ]\\ yu io p[ ]\\ yu io", "p[ ]\\ yu io p[ ]\\ yu io p[ ]\\ yu io p[", "yui op[ ]\\y uio p[] \\yu iop []\\ yui", "op[ ]\\y uio p[] \\yu iop []\\ yui op[", "yuio p[]\\ yuio p[]\\ yuio p[]\\ yuio", "p[]\\ yuio p[]\\ yuio p[]\\ yuio p[]\\", "QQ WW EE RR TT QQ WW EE RR TT QQ WW EE", "QQQ WWW EEE RRR TTT QQQ WWW EEE RRR", "TTT QQQ WWW EEE RRR TTT QQQ WWW EEE", "QW ER TQ WE RT QW ER TQ WE RT QW ER TQ", "QWE RTQ WER TQW ERT QWE RTQ WER TQW", "QWER TQWE RTQW ERTQ WERT QWER TQWE", "YY UU II OO PP { } | YY UU II OO PP", "{ } | YY UU II OO PP { } | YY UU", "II OO PP { } | YY UU II OO PP { }", "YYY UUU III OOO PPP { } | YYY", "UUU III OOO PPP { } | YYY UUU", "III OOO PPP { } | YYY UUU III", "YU IO P{ }| YU IO P{ }| YU IO P{ }| YU", "IO P{ }| YU IO P{ }| YU IO P{ }| YU IO", "P{ }| YU IO P{ }| YU IO P{ }| YU IO P{", "YUI OP{ }|Y UIO P{} |YU IOP {}| YUI", "OP{ }|Y UIO P{} |YU IOP {}| YUI OP{", "YUIO P{}| YUIO P{}| YUIO P{}| YUIO", "P{}| YUIO P{}| YUIO P{}| YUIO P{}|", "qq ww ee rr tt yy uu ii oo pp [ ] \\", "qq ww ee rr tt yy uu ii oo pp [ ] \\", "qq ww ee rr tt yy uu ii oo pp [ ] \\", "qqq www eee rrr ttt yyy uuu iii ooo", "ppp [ ] \\ qqq www eee rrr ttt", "yyy uuu iii ooo ppp [ ] \\ qqq", "qw er ty ui op [] \\q we rt yu io p[ ]\\", "qw er ty ui op [] \\q we rt yu io p[ ]\\", "qw er ty ui op [] \\q we rt yu io p[ ]\\", "qw er ty ui op [] \\q we rt yu io p[ ]\\", "qwe rty uio p[] \\qw ert yui op[ ]\\q", "wer tyu iop []\\ qwe rty uio p[] \\qw", "ert yui op[ ]\\q wer tyu iop []\\ qwe", "rty uio p[] \\qw ert yui op[ ]\\q wer", "qwer tyui op[] \\qwe rtyu iop[ ]\\qw", "erty uiop []\\q wert yuio p[]\\ qwer", "tyui op[] \\qwe rtyu iop[ ]\\qw erty", "uiop []\\q wert yuio p[]\\ qwer tyui", "QQ WW EE RR TT YY UU II OO PP { } |", "QQ WW EE RR TT YY UU II OO PP { } |", "QQ WW EE RR TT YY UU II OO PP { } |", "QQQ WWW EEE RRR TTT YYY UUU III OOO", "PPP { } | QQQ WWW EEE RRR TTT", "YYY UUU III OOO PPP { } | QQQ", "QW ER TY UI OP {} |Q WE RT YU IO P{ }|", "QW ER TY UI OP {} |Q WE RT YU IO P{ }|", "QW ER TY UI OP {} |Q WE RT YU IO P{ }|", "QW ER TY UI OP {} |Q WE RT YU IO P{ }|", "QWE RTY UIO P{} |QW ERT YUI OP{ }|Q", "WER TYU IOP {}| QWE RTY UIO P{} |QW", "ERT YUI OP{ }|Q WER TYU IOP {}| QWE", "RTY UIO P{} |QW ERT YUI OP{ }|Q WER", "QWER TYUI OP{} |QWE RTYU IOP{ }|QW", "ERTY UIOP {}|Q WERT YUIO P{}| QWER", "TYUI OP{} |QWE RTYU IOP{ }|QW ERTY", "UIOP {}|Q WERT YUIO P{}| QWER TYUI"],
                        medium: ["QQQ qqq WWW www EEE eee RRR rrr TTT", "ttt QQQ qqq WWW www EEE eee RRR rrr", "TTT ttt QQQ qqq WWW www EEE eee RRR", "Qq Ww Ee Rr Tt Qq Ww Ee Rr Tt Qq Ww Ee", "Rr Tt Qq Ww Ee Rr Tt Qq Ww Ee Rr Tt Qq", "Ww Ee Rr Tt Qq Ww Ee Rr Tt Qq Ww Ee Rr", "QqW wEe RrT tQq WwE eRr TtQ qWw EeR", "rTt QqW wEe RrT tQq WwE eRr TtQ qWw", "EeR rTt QqW wEe RrT tQq WwE eRr TtQ", "QqWw EeRr TtQq WwEe RrTt QqWw EeRr", "TtQq WwEe RrTt QqWw EeRr TtQq WwEe", "RrTt QqWw EeRr TtQq WwEe RrTt QqWw", "YYY yyy UUU uuu III iii OOO ooo OOO", "ppp {{{ [[[ }}} ]]] ||| \\\\\\ YYY yyy", "UUU uuu III iii OOO ooo OOO ppp {{{", "Yy Uu Ii Oo Op {[ }] |\\ Yy Uu Ii Oo Op", "{[ }] |\\ Yy Uu Ii Oo Op {[ }] |\\ Yy Uu", "Ii Oo Op {[ }] |\\ Yy Uu Ii Oo Op {[ }]", "|\\ Yy Uu Ii Oo Op {[ }] |\\ Yy Uu Ii Oo", "YyU uIi OoO p{[ }]| \\Yy UuI iOo Op{", "[}] |\\Y yUu IiO oOp {[} ]|\\ YyU uIi", "OoO p{[ }]| \\Yy UuI iOo Op{ [}] |\\Y", "yUu IiO oOp {[} ]|\\ YyU uIi OoO p{[", "YyUu IiOo Op{[ }]|\\ YyUu IiOo Op{[", "}]|\\ YyUu IiOo Op{[ }]|\\ YyUu IiOo", "Op{[ }]|\\ YyUu IiOo Op{[ }]|\\ YyUu", "IiOo Op{[ }]|\\ YyUu IiOo Op{[ }]|\\", "QQQ qqq WWW www EEE eee RRR rrr TTT", "ttt YYY yyy UUU uuu III iii OOO ooo", "OOO ppp {{{ [[[ }}} ]]] ||| \\\\\\ QQQ", "Qq Ww Ee Rr Tt Yy Uu Ii Oo Op {[ }] |\\", "Qq Ww Ee Rr Tt Yy Uu Ii Oo Op {[ }] |\\", "Qq Ww Ee Rr Tt Yy Uu Ii Oo Op {[ }] |\\", "Qq Ww Ee Rr Tt Yy Uu Ii Oo Op {[ }] |\\", "QqW wEe RrT tYy UuI iOo Op{ [}] |\\Q", "qWw EeR rTt YyU uIi OoO p{[ }]| \\Qq", "WwE eRr TtY yUu IiO oOp {[} ]|\\ QqW", "wEe RrT tYy UuI iOo Op{ [}] |\\Q qWw", "QqWw EeRr TtYy UuIi OoOp {[}] |\\Qq", "WwEe RrTt YyUu IiOo Op{[ }]|\\ QqWw", "EeRr TtYy UuIi OoOp {[}] |\\Qq WwEe", "RrTt YyUu IiOo Op{[ }]|\\ QqWw EeRr", "YYY qqq UUU www III eee OOO rrr OOO", "ttt YYY qqq UUU www III eee OOO rrr", "OOO ttt YYY qqq UUU www III eee OOO", "Yq Uw Ie Or Ot Yq Uw Ie Or Ot Yq Uw Ie", "Or Ot Yq Uw Ie Or Ot Yq Uw Ie Or Ot Yq", "Uw Ie Or Ot Yq Uw Ie Or Ot Yq Uw Ie Or", "YqU wIe OrO tYq UwI eOr OtY qUw IeO", "rOt YqU wIe OrO tYq UwI eOr OtY qUw", "IeO rOt YqU wIe OrO tYq UwI eOr OtY", "YqUw IeOr OtYq UwIe OrOt YqUw IeOr", "OtYq UwIe OrOt YqUw IeOr OtYq UwIe", "OrOt YqUw IeOr OtYq UwIe OrOt YqUw", "QQQ yyy WWW uuu EEE iii RRR ooo TTT", "ppp {{{ [[[ }}} ]]] ||| \\\\\\ QQQ yyy", "WWW uuu EEE iii RRR ooo TTT ppp {{{", "Qy Wu Ei Ro Tp {[ }] |\\ Qy Wu Ei Ro Tp", "{[ }] |\\ Qy Wu Ei Ro Tp {[ }] |\\ Qy Wu", "Ei Ro Tp {[ }] |\\ Qy Wu Ei Ro Tp {[ }]", "|\\ Qy Wu Ei Ro Tp {[ }] |\\ Qy Wu Ei Ro", "QyW uEi RoT p{[ }]| \\Qy WuE iRo Tp{", "[}] |\\Q yWu EiR oTp {[} ]|\\ QyW uEi", "RoT p{[ }]| \\Qy WuE iRo Tp{ [}] |\\Q", "yWu EiR oTp {[} ]|\\ QyW uEi RoT p{[", "QyWu EiRo Tp{[ }]|\\ QyWu EiRo Tp{[", "}]|\\ QyWu EiRo Tp{[ }]|\\ QyWu EiRo", "Tp{[ }]|\\ QyWu EiRo Tp{[ }]|\\ QyWu", "EiRo Tp{[ }]|\\ QyWu EiRo Tp{[ }]|\\"],
                        hard: ["uy] eO e} eP u[P yu\\ eu{ eIo pe{ eP eP", "pt} tYo t tt} r} ut] eu{ pe{ r}t eQt pu|e", "eQt w}o{ eu{ tt} t]t} pe{ To} uP u[ pe u[", "To P e} t} uy] yu\\ pO pe{P tYo p tYo tYo", "eIo t yu\\ eO{ tt} o} e|oP o] t]O{ u[ uO", "pO y]q pO To uo] P] To o] P] To} t y]q t]t}", "pu|e y]q uO eO pu|e eP pe{ pO t]O e} P tq", "eQt oq tP yu\\ w}o{ tq e} e]p e[r r}t]", "eIo o} e|o pO e[r eO eQt r}t uP oq pe{ eO{", "pO pu|e P] u|o r]t pO uOP pt} eO{ P] yu'"]
                    },
                    midRow: {
                        easy: ["aa ss dd ff gg aa ss dd ff gg aa ss dd", "aaa sss ddd fff ggg aaa sss ddd fff", "ggg aaa sss ddd fff ggg aaa sss ddd", "as df ga sd fg as df ga sd fg as df ga", "asd fga sdf gas dfg asd fga sdf gas", "asdf gasd fgas dfga sdfg asdf gasd", "hh jj kk ll ;; ' hh jj kk ll ;; ' hh", "jj kk ll ;; ' hh jj kk ll ;; ' hh jj", "hhh jjj kkk lll ;;; ' hhh jjj kkk", "lll ;;; ' hhh jjj kkk lll ;;; '", "hhh jjj kkk lll ;;; ' hhh jjj kkk", "hj kl ;' hj kl ;' hj kl ;' hj kl ;' hj", "kl ;' hj kl ;' hj kl ;' hj kl ;' hj kl", "hjk l;' hjk l;' hjk l;' hjk l;' hjk", "l;' hjk l;' hjk l;' hjk l;' hjk l;'", "hjkl ;'hj kl;' hjkl ;'hj kl;' hjkl", ";'hj kl;' hjkl ;'hj kl;' hjkl ;'hj", "AA SS DD FF GG AA SS DD FF GG AA SS DD", "AAA SSS DDD FFF GGG AAA SSS DDD FFF", "GGG AAA SSS DDD FFF GGG AAA SSS DDD", "AS DF GA SD FG AS DF GA SD FG AS DF GA", "ASD FGA SDF GAS DFG ASD FGA SDF GAS", "ASDF GASD FGAS DFGA SDFG ASDF GASD", 'HH JJ KK LL :: " HH JJ KK LL :: " HH', 'JJ KK LL :: " HH JJ KK LL :: " HH JJ', 'HHH JJJ KKK LLL ::: " HHH JJJ KKK', 'LLL ::: " HHH JJJ KKK LLL ::: "', 'HHH JJJ KKK LLL ::: " HHH JJJ KKK', 'HJ KL :" HJ KL :" HJ KL :" HJ KL :" HJ', 'KL :" HJ KL :" HJ KL :" HJ KL :" HJ KL', 'HJK L:" HJK L:" HJK L:" HJK L:" HJK', 'L:" HJK L:" HJK L:" HJK L:" HJK L:"', 'HJKL :"HJ KL:" HJKL :"HJ KL:" HJKL', ':"HJ KL:" HJKL :"HJ KL:" HJKL :"HJ', "aa ss dd ff gg hh jj kk ll ;; ' aa ss", "dd ff gg hh jj kk ll ;; ' aa ss dd ff", "gg hh jj kk ll ;; ' aa ss dd ff gg hh", "aaa sss ddd fff ggg hhh jjj kkk lll", ";;; ' aaa sss ddd fff ggg hhh jjj", "kkk lll ;;; ' aaa sss ddd fff ggg", "as df gh jk l; 'a sd fg hj kl ;' as df", "gh jk l; 'a sd fg hj kl ;' as df gh jk", "l; 'a sd fg hj kl ;' as df gh jk l; 'a", "sd fg hj kl ;' as df gh jk l; 'a sd fg", "asd fgh jkl ;'a sdf ghj kl; 'as dfg", "hjk l;' asd fgh jkl ;'a sdf ghj kl;", "'as dfg hjk l;' asd fgh jkl ;'a sdf", "ghj kl; 'as dfg hjk l;' asd fgh jkl", "asdf ghjk l;'a sdfg hjkl ;'as dfgh", "jkl; 'asd fghj kl;' asdf ghjk l;'a", "sdfg hjkl ;'as dfgh jkl; 'asd fghj", 'AA SS DD FF GG HH JJ KK LL :: " AA SS', 'DD FF GG HH JJ KK LL :: " AA SS DD FF', 'GG HH JJ KK LL :: " AA SS DD FF GG HH', "AAA SSS DDD FFF GGG HHH JJJ KKK LLL", '::: " AAA SSS DDD FFF GGG HHH JJJ', 'KKK LLL ::: " AAA SSS DDD FFF GGG', 'AS DF GH JK L: "A SD FG HJ KL :" AS DF', 'GH JK L: "A SD FG HJ KL :" AS DF GH JK', 'L: "A SD FG HJ KL :" AS DF GH JK L: "A', 'SD FG HJ KL :" AS DF GH JK L: "A SD FG', 'ASD FGH JKL :"A SDF GHJ KL: "AS DFG', 'HJK L:" ASD FGH JKL :"A SDF GHJ KL:', '"AS DFG HJK L:" ASD FGH JKL :"A SDF', 'GHJ KL: "AS DFG HJK L:" ASD FGH JKL', 'ASDF GHJK L:"A SDFG HJKL :"AS DFGH', 'JKL: "ASD FGHJ KL:" ASDF GHJK L:"A', 'SDFG HJKL :"AS DFGH JKL: "ASD FGHJ'],
                        medium: ["AAA aaa SSS sss DDD ddd FFF fff GGG", "ggg AAA aaa SSS sss DDD ddd FFF fff", "GGG ggg AAA aaa SSS sss DDD ddd FFF", "Aa Ss Dd Ff Gg Aa Ss Dd Ff Gg Aa Ss Dd", "Ff Gg Aa Ss Dd Ff Gg Aa Ss Dd Ff Gg Aa", "Ss Dd Ff Gg Aa Ss Dd Ff Gg Aa Ss Dd Ff", "AaS sDd FfG gAa SsD dFf GgA aSs DdF", "fGg AaS sDd FfG gAa SsD dFf GgA aSs", "DdF fGg AaS sDd FfG gAa SsD dFf GgA", "AaSs DdFf GgAa SsDd FfGg AaSs DdFf", "GgAa SsDd FfGg AaSs DdFf GgAa SsDd", "FfGg AaSs DdFf GgAa SsDd FfGg AaSs", "HHH hhh JJJ jjj KKK kkk LLL lll :::", ";;; \"\"\" ''' HHH hhh JJJ jjj KKK kkk", "LLL lll ::: ;;; \"\"\" ''' HHH hhh JJJ", "Hh Jj Kk Ll :; \"' Hh Jj Kk Ll :; \"' Hh", "Jj Kk Ll :; \"' Hh Jj Kk Ll :; \"' Hh Jj", "Kk Ll :; \"' Hh Jj Kk Ll :; \"' Hh Jj Kk", "Ll :; \"' Hh Jj Kk Ll :; \"' Hh Jj Kk Ll", "HhJ jKk Ll: ;\"' HhJ jKk Ll: ;\"' HhJ", "jKk Ll: ;\"' HhJ jKk Ll: ;\"' HhJ jKk", "Ll: ;\"' HhJ jKk Ll: ;\"' HhJ jKk Ll:", ";\"' HhJ jKk Ll: ;\"' HhJ jKk Ll: ;\"'", "HhJj KkLl :;\"' HhJj KkLl :;\"' HhJj", "KkLl :;\"' HhJj KkLl :;\"' HhJj KkLl", ":;\"' HhJj KkLl :;\"' HhJj KkLl :;\"'", "HhJj KkLl :;\"' HhJj KkLl :;\"' HhJj", "AAA aaa SSS sss DDD ddd FFF fff GGG", "ggg HHH hhh JJJ jjj KKK kkk LLL lll", "::: ;;; \"\"\" ''' AAA aaa SSS sss DDD", "Aa Ss Dd Ff Gg Hh Jj Kk Ll :; \"' Aa Ss", "Dd Ff Gg Hh Jj Kk Ll :; \"' Aa Ss Dd Ff", "Gg Hh Jj Kk Ll :; \"' Aa Ss Dd Ff Gg Hh", "Jj Kk Ll :; \"' Aa Ss Dd Ff Gg Hh Jj Kk", "AaS sDd FfG gHh JjK kLl :;\" 'Aa SsD", "dFf GgH hJj KkL l:; \"'A aSs DdF fGg", "HhJ jKk Ll: ;\"' AaS sDd FfG gHh JjK", "kLl :;\" 'Aa SsD dFf GgH hJj KkL l:;", "AaSs DdFf GgHh JjKk Ll:; \"'Aa SsDd", "FfGg HhJj KkLl :;\"' AaSs DdFf GgHh", "JjKk Ll:; \"'Aa SsDd FfGg HhJj KkLl", ":;\"' AaSs DdFf GgHh JjKk Ll:; \"'Aa", "HHH aaa JJJ sss KKK ddd LLL fff :::", "ggg HHH aaa JJJ sss KKK ddd LLL fff", "::: ggg HHH aaa JJJ sss KKK ddd LLL", "Ha Js Kd Lf :g Ha Js Kd Lf :g Ha Js Kd", "Lf :g Ha Js Kd Lf :g Ha Js Kd Lf :g Ha", "Js Kd Lf :g Ha Js Kd Lf :g Ha Js Kd Lf", "HaJ sKd Lf: gHa JsK dLf :gH aJs KdL", "f:g HaJ sKd Lf: gHa JsK dLf :gH aJs", "KdL f:g HaJ sKd Lf: gHa JsK dLf :gH", "HaJs KdLf :gHa JsKd Lf:g HaJs KdLf", ":gHa JsKd Lf:g HaJs KdLf :gHa JsKd", "Lf:g HaJs KdLf :gHa JsKd Lf:g HaJs", "AAA hhh SSS jjj DDD kkk FFF lll GGG", ";;; \"\"\" ''' AAA hhh SSS jjj DDD kkk", "FFF lll GGG ;;; \"\"\" ''' AAA hhh SSS", "Ah Sj Dk Fl G; \"' Ah Sj Dk Fl G; \"' Ah", "Sj Dk Fl G; \"' Ah Sj Dk Fl G; \"' Ah Sj", "Dk Fl G; \"' Ah Sj Dk Fl G; \"' Ah Sj Dk", "Fl G; \"' Ah Sj Dk Fl G; \"' Ah Sj Dk Fl", "AhS jDk FlG ;\"' AhS jDk FlG ;\"' AhS", "jDk FlG ;\"' AhS jDk FlG ;\"' AhS jDk", "FlG ;\"' AhS jDk FlG ;\"' AhS jDk FlG", ";\"' AhS jDk FlG ;\"' AhS jDk FlG ;\"'", "AhSj DkFl G;\"' AhSj DkFl G;\"' AhSj", "DkFl G;\"' AhSj DkFl G;\"' AhSj DkFl", "G;\"' AhSj DkFl G;\"' AhSj DkFl G;\"'", "AhSj DkFl G;\"' AhSj DkFl G;\"' AhSj"],
                        hard: ["sfkLdf ;dfhdf ;fGgfgL ;AhL lsGg kf; ;f;'", "ljsf; lghL afFls lakgL hLk l;Sg afFls d':sfg", "jf sfg ;dflhs ;fgf s'g l;Sg sfF lakgL ;Ddfg", "h'gL dfF ;dfhdf sdL dHhf dfGg' skL ;fa sfF", ";Lk laDa ;dfh sfd sfdgf s;d ;dflhs sfd h;", "kl;gf dgsf ;dfg afgL ;dfh ;dfhdf af; kl;gf", ";dfhdf ;'g lsg lagf ;Dd ljkgf l;dL lasf;", "sfF sfddf ;'Gg gfd sfF ha a:g' hfF a; hggL", ";fGgfgL ljsf; kSsf gfd kjg a;'F hgf l;dL", "afaf s'GgL afFsL ;'Gg s'g ;s\"F sfg'g ;fa'g"]
                    },
                    lowRow: {
                        easy: ["zz xx cc vv bb zz xx cc vv bb zz xx cc", "zzz xxx ccc vvv bbb zzz xxx ccc vvv", "bbb zzz xxx ccc vvv bbb zzz xxx ccc", "zx cv bz xc vb zx cv bz xc vb zx cv bz", "zxc vbz xcv bzx cvb zxc vbz xcv bzx", "zxcv bzxc vbzx cvbz xcvb zxcv bzxc", "nn mm ,, .. // nn mm ,, .. // nn mm ,,", "nnn mmm ,,, ... /// nnn mmm ,,, ...", "/// nnn mmm ,,, ... /// nnn mmm ,,,", "nm ,. /n m, ./ nm ,. /n m, ./ nm ,. /n", "nm, ./n m,. /nm ,./ nm, ./n m,. /nm", "nm,. /nm, ./nm ,./n m,./ nm,. /nm,", "ZZ XX CC VV BB ZZ XX CC VV BB ZZ XX CC", "ZZZ XXX CCC VVV BBB ZZZ XXX CCC VVV", "BBB ZZZ XXX CCC VVV BBB ZZZ XXX CCC", "ZX CV BZ XC VB ZX CV BZ XC VB ZX CV BZ", "ZXC VBZ XCV BZX CVB ZXC VBZ XCV BZX", "ZXCV BZXC VBZX CVBZ XCVB ZXCV BZXC", "NN MM << >> ?? NN MM << >> ?? NN MM <<", "NNN MMM <<< >>> ??? NNN MMM <<< >>>", "??? NNN MMM <<< >>> ??? NNN MMM <<<", "NM <> ?N M< >? NM <> ?N M< >? NM <> ?N", "NM< >?N M<> ?NM <>? NM< >?N M<> ?NM", "NM<> ?NM< >?NM <>?N M<>? NM<> ?NM<", "zz xx cc vv bb nn mm ,, .. // zz xx cc", "vv bb nn mm ,, .. // zz xx cc vv bb nn", "mm ,, .. // zz xx cc vv bb nn mm ,, ..", "zzz xxx ccc vvv bbb nnn mmm ,,, ...", "/// zzz xxx ccc vvv bbb nnn mmm ,,,", "... /// zzz xxx ccc vvv bbb nnn mmm", "zx cv bn m, ./ zx cv bn m, ./ zx cv bn", "m, ./ zx cv bn m, ./ zx cv bn m, ./ zx", "cv bn m, ./ zx cv bn m, ./ zx cv bn m,", "zxc vbn m,. /zx cvb nm, ./z xcv bnm", ",./ zxc vbn m,. /zx cvb nm, ./z xcv", "bnm ,./ zxc vbn m,. /zx cvb nm, ./z", "zxcv bnm, ./zx cvbn m,./ zxcv bnm,", "./zx cvbn m,./ zxcv bnm, ./zx cvbn", "m,./ zxcv bnm, ./zx cvbn m,./ zxcv", "ZZ XX CC VV BB NN MM << >> ?? ZZ XX CC", "VV BB NN MM << >> ?? ZZ XX CC VV BB NN", "MM << >> ?? ZZ XX CC VV BB NN MM << >>", "ZZZ XXX CCC VVV BBB NNN MMM <<< >>>", "??? ZZZ XXX CCC VVV BBB NNN MMM <<<", ">>> ??? ZZZ XXX CCC VVV BBB NNN MMM", "ZX CV BN M< >? ZX CV BN M< >? ZX CV BN", "M< >? ZX CV BN M< >? ZX CV BN M< >? ZX", "CV BN M< >? ZX CV BN M< >? ZX CV BN M<", "ZXC VBN M<> ?ZX CVB NM< >?Z XCV BNM", "<>? ZXC VBN M<> ?ZX CVB NM< >?Z XCV", "BNM <>? ZXC VBN M<> ?ZX CVB NM< >?Z", "ZXCV BNM< >?ZX CVBN M<>? ZXCV BNM<", ">?ZX CVBN M<>? ZXCV BNM< >?ZX CVBN", "M<>? ZXCV BNM< >?ZX CVBN M<>? ZXCV"],
                        medium: ["ZZZ zzz XXX xxx CCC ccc VVV vvv BBB", "bbb ZZZ zzz XXX xxx CCC ccc VVV vvv", "BBB bbb ZZZ zzz XXX xxx CCC ccc VVV", "Zz Xx Cc Vv Bb Zz Xx Cc Vv Bb Zz Xx Cc", "Vv Bb Zz Xx Cc Vv Bb Zz Xx Cc Vv Bb Zz", "Xx Cc Vv Bb Zz Xx Cc Vv Bb Zz Xx Cc Vv", "ZzX xCc VvB bZz XxC cVv BbZ zXx CcV", "vBb ZzX xCc VvB bZz XxC cVv BbZ zXx", "CcV vBb ZzX xCc VvB bZz XxC cVv BbZ", "ZzXx CcVv BbZz XxCc VvBb ZzXx CcVv", "BbZz XxCc VvBb ZzXx CcVv BbZz XxCc", "VvBb ZzXx CcVv BbZz XxCc VvBb ZzXx", "NNN nnn MMM mmm <<< ,,, >>> ... ???", "/// NNN nnn MMM mmm <<< ,,, >>> ...", "??? /// NNN nnn MMM mmm <<< ,,, >>>", "Nn Mm <, >. ?/ Nn Mm <, >. ?/ Nn Mm <,", ">. ?/ Nn Mm <, >. ?/ Nn Mm <, >. ?/ Nn", "Mm <, >. ?/ Nn Mm <, >. ?/ Nn Mm <, >.", "NnM m<, >.? /Nn Mm< ,>. ?/N nMm <,>", ".?/ NnM m<, >.? /Nn Mm< ,>. ?/N nMm", "<,> .?/ NnM m<, >.? /Nn Mm< ,>. ?/N", "NnMm <,>. ?/Nn Mm<, >.?/ NnMm <,>.", "?/Nn Mm<, >.?/ NnMm <,>. ?/Nn Mm<,", ">.?/ NnMm <,>. ?/Nn Mm<, >.?/ NnMm", "ZZZ zzz XXX xxx CCC ccc VVV vvv BBB", "bbb NNN nnn MMM mmm <<< ,,, >>> ...", "??? /// ZZZ zzz XXX xxx CCC ccc VVV", "Zz Xx Cc Vv Bb Nn Mm <, >. ?/ Zz Xx Cc", "Vv Bb Nn Mm <, >. ?/ Zz Xx Cc Vv Bb Nn", "Mm <, >. ?/ Zz Xx Cc Vv Bb Nn Mm <, >.", "?/ Zz Xx Cc Vv Bb Nn Mm <, >. ?/ Zz Xx", "ZzX xCc VvB bNn Mm< ,>. ?/Z zXx CcV", "vBb NnM m<, >.? /Zz XxC cVv BbN nMm", "<,> .?/ ZzX xCc VvB bNn Mm< ,>. ?/Z", "zXx CcV vBb NnM m<, >.? /Zz XxC cVv", "ZzXx CcVv BbNn Mm<, >.?/ ZzXx CcVv", "BbNn Mm<, >.?/ ZzXx CcVv BbNn Mm<,", ">.?/ ZzXx CcVv BbNn Mm<, >.?/ ZzXx", "CcVv BbNn Mm<, >.?/ ZzXx CcVv BbNn", "NNN zzz MMM xxx <<< ccc >>> vvv ???", "bbb NNN zzz MMM xxx <<< ccc >>> vvv", "??? bbb NNN zzz MMM xxx <<< ccc >>>", "Nz Mx <c >v ?b Nz Mx <c >v ?b Nz Mx <c", ">v ?b Nz Mx <c >v ?b Nz Mx <c >v ?b Nz", "Mx <c >v ?b Nz Mx <c >v ?b Nz Mx <c >v", "NzM x<c >v? bNz Mx< c>v ?bN zMx <c>", "v?b NzM x<c >v? bNz Mx< c>v ?bN zMx", "<c> v?b NzM x<c >v? bNz Mx< c>v ?bN", "NzMx <c>v ?bNz Mx<c >v?b NzMx <c>v", "?bNz Mx<c >v?b NzMx <c>v ?bNz Mx<c", ">v?b NzMx <c>v ?bNz Mx<c >v?b NzMx", "ZZZ nnn XXX mmm CCC ,,, VVV ... BBB", "/// ZZZ nnn XXX mmm CCC ,,, VVV ...", "BBB /// ZZZ nnn XXX mmm CCC ,,, VVV", "Zn Xm C, V. B/ Zn Xm C, V. B/ Zn Xm C,", "V. B/ Zn Xm C, V. B/ Zn Xm C, V. B/ Zn", "Xm C, V. B/ Zn Xm C, V. B/ Zn Xm C, V.", "ZnX mC, V.B /Zn XmC ,V. B/Z nXm C,V", ".B/ ZnX mC, V.B /Zn XmC ,V. B/Z nXm", "C,V .B/ ZnX mC, V.B /Zn XmC ,V. B/Z", "ZnXm C,V. B/Zn XmC, V.B/ ZnXm C,V.", "B/Zn XmC, V.B/ ZnXm C,V. B/Zn XmC,", "V.B/ ZnXm C,V. B/Zn XmC, V.B/ ZnXm"],
                        hard: [">B >B c ? c? bNbn ? c ?v Bnc C Cbx ? ?v", "n/ C bx z? x? x/ v// x< /, C z? c /x/ /<", "vC c?, ? Xvc v/ c? x? /< b/ xn b? ? z? n", "z? B v// C . x< , x// /, zx v// /. x? v//", "/x/ C nx/ c v/ nx/ ?v x/ v// c?n >B Xvc", "zx bx bNbn zx ? /, ? vC x/ vC x< xn >B vC", "bn v// bx ? C bNbn n Xvc /< >B xn /x/ .", "c?n vC C? Xvc / bNbn / x< /, Bnc v/ Xvc", "c?n /< x/ x// z? v// Cbx x// Bnc nx/ C Cbx", "c?n ? v/ >B c? bx n z? , xn ? Xvc /< c?n"]
                    },
                    allKeys: {
                        easy: ["ho hulbZj/\\, ho clagzL", "ho ho eujfg, s?gf/flz", "ho hulbZj/\\, ho clagzL", "ho ho eujfg, s?gf/flz", "zQmL 5 k|e'sf] ck/Dkf/", "3'Db5 h;df ;a ;+;f/", "hnr/, ynr/, u|xug, tf/f", ";'o{ nufot ;'/, d'lg ;f/f.", "s]jn k|e'sf] s?gf kfO{", "u5{g\\ lghlgh sd{ /dfO{", "lx+8\\g] dfG5] n8\\b5, la3\\gafwf cfOkb{5", 'Pl;of, pQ/cd]l/sf, blIf0fcd]l/sf, o"/f]k, clk|msf', ";'o{, a'w, z'qm, d+un\\, k[YjL, la|x:ktL, zlg", "la1fgM ef}lts zf:q, /;fog zf:q, hLjlj1fg", 'hggL hGde"ldZr :ju{b\\jkL u/Lo;L', "v's'/Lsf] 8f]a leq jL/x?sf] kfOnf x'G5", ":joDe'sf] b'O6f cfFvfn] Gofo cGofo 5'6\\6ofO x]5{", ":k'lTgs ! ljZjsf] k|yd cGtl/Ifofg xf].", ";f]ljPt o'lgogn] ;g\\ !(%& df :k'lTgs ! p8fPsf] xf].", "lqe'jg ljdfg:yn ;g\\ !(%% df lgdf{0f ePsf] xf].", "leD;]g yfkfn] w/x/f lgdf{0f u/]sf x'g.", "b'O{ w/x/f la=;= !**! / !**@ df ag]sf x'g.", "If]qkmnsf] cfwf/df 8f]Nkf g]kfnsf] 7'nf] lhNnf xf].", ";o y/L afhf Pp6} tfn", "k|Voft vuf]lNjbx?M 6f]n]dL, sf]k]lg{s;, ufnLn]cf],==", "k|Voft vuf]lNjbx?M s]Kn/, xan,==", "k|Voft vuf]lNjbx?M sfn{ ;]ug, lgn l8u|f; 6fO;g,==", 'xan b"/aLg c+tl/Ifdf cjl:yt 5', "6]:nf, Pl8;g, kmf/f8], coflDko/, DofS:j]n", "ljlnod ;]lS:ko/ a]nfolt gf6ss/ / saL x'g", "g]kfndf /fhtGq @$) aif{ sfod /Xof]", "g]kfnL afhfx?M dfbn, v}Fh8L, afF;'/L, 8Dkm'", "k~rfd[tM b'w, bxL, dx, u'8, l3p", "g]kfnL afhfx?M lwd], onDa/, ;+v, PQmf/]", "blIf0f Pl;ofM g]kfn, e'6fg, >Ln+sf, ef/t==", "blIf0f Pl;ofM kfls:tfg, dflNbE;", "clk|msL d'n'sM cNh]l/of, OlhK6, lnAof, df]/f]Ssf]==", "clk|msL d'n'sM ;'8fg\\, 6'lgl;of, 3fgf, ;]g]un==", "clk|msL d'n'sM gfOh]l/of, blIf0f ck|mLsf, Sofd]?g, ;f]dflnof==", "clk|msL d'n'sM Olyof]lkof, a'?G8L, s]Gof, o'ufG8f==", "xjfO 6fk' cf7 6fk'x? ldn]/ ag]sf] 5.", "xjfOog 6fk'x?M xfjfO{, cf]cfx', dfpO, sf}jfO{==", "xjfOog 6fk'x?M df]nf]sfO{, ngfO{, lgO{xfpm, sfxf]cf]nfj].", "g]kfnsf] If]qkmn !,$&,%!^ ju{ lsnf]ld6/ 5 .", ";u/dfyfsf] prfO{ **$*=*^ ld6/ xf] .", "g]kfn Ps ljsf; pGd'v b]z xf] .", "wfg / ux'F g]kfnsf] k|d'v jfnL x'g\\ .", "ltlnrf] tfn $*)) ld6/sf] prfO{df 5 .", "rfFu'gf/fo0f xg'dfg9f]sf af}4gfy kz'kltgfy ", "pb]Zo s] lng', p8L 5'g' rGb\\/ Ps .", "dflg; 7\"nf] lbnn] x'G5, hftn] x'b}g.", "h'g t nUof] tf/fn], dg t nUof] dfofn]", "xfd|L cfdf ;f/} g} af7L 5g\\ rfdn ;+u lk7f] kf] ;f6L 5g\\", "jfO{ /f]8sf] af6f] df w'nf] p8fpb} 6\\ofS;L u'8fpb}", "this is good thing to type my qzebv.", "hxfF 5g a'4sf cfFvf, l:gUw zfGt / ;'Gb/.", "xhf/ ;kgfx?sf], dfof nfu]/ cfpF5", "ag]sf] 5 kx/fn] of] 5ftL d]/f] .", "kf/L Tof] 8fF8fdf x]/, 3fd nfUof] 3dfO{nf] .", "c/af} dfG5]x?df, ltdL Ps dg ldNg] dfG5] .", "sflnkf/L bfO{ slt /fd|f], 9fsf6f]kL, sfFw}df unaGbL .", "oxfF b]zsf] 5 lrGtf ltdL dfof dfof eG5f}", "d x' g]kfnL afa' d]8 Og g]kfn", "dfl5 dfg{ hfd g bfh} sfnfkfgLdf", "u'/fF;sf] km]b d'gL ;Demgfsf] 5fofF", "6f9f w]/} 6f9f p9]sf /+lug rf/f", "dnfO{ klg c+u|]hL df af]Ng l;sfO{ b]p g", "g]kfn, ;'Gb/, zfGt ljzfn"],
                        medium: ["ho hulbZj/\\, ho clagzL", "ho ho eujfg, s?gf/flz", "ho hulbZj/\\, ho clagzL", "ho ho eujfg, s?gf/flz", "zQmL 5 k|e'sf] ck/Dkf/", "3'Db5 h;df ;a ;+;f/", "hnr/, ynr/, u|xug, tf/f", ";'o{ nufot ;'/, d'lg ;f/f.", "s]jn k|e'sf] s?gf kfO{", "u5{g\\ lghlgh sd{ /dfO{", "lx+8\\g] dfG5] n8\\b5, la3\\gafwf cfOkb{5", 'Pl;of, pQ/cd]l/sf, blIf0fcd]l/sf, o"/f]k, clk|msf', ";'o{, a'w, z'qm, d+un\\, k[YjL, la|x:ktL, zlg", "la1fgM ef}lts zf:q, /;fog zf:q, hLjlj1fg", 'hggL hGde"ldZr :ju{b\\jkL u/Lo;L', "v's'/Lsf] 8f]a leq jL/x?sf] kfOnf x'G5", ":joDe'sf] b'O6f cfFvfn] Gofo cGofo 5'6\\6ofO x]5{", ":k'lTgs ! ljZjsf] k|yd cGtl/Ifofg xf].", ";f]ljPt o'lgogn] ;g\\ !(%& df :k'lTgs ! p8fPsf] xf].", "lqe'jg ljdfg:yn ;g\\ !(%% df lgdf{0f ePsf] xf].", "leD;]g yfkfn] w/x/f lgdf{0f u/]sf x'g.", "b'O{ w/x/f la=;= !**! / !**@ df ag]sf x'g.", "If]qkmnsf] cfwf/df 8f]Nkf g]kfnsf] 7'nf] lhNnf xf].", ";o y/L afhf Pp6} tfn", "k|Voft vuf]lNjbx?M 6f]n]dL, sf]k]lg{s;, ufnLn]cf],==", "k|Voft vuf]lNjbx?M s]Kn/, xan,==", "k|Voft vuf]lNjbx?M sfn{ ;]ug, lgn l8u|f; 6fO;g,==", 'xan b"/aLg c+tl/Ifdf cjl:yt 5', "6]:nf, Pl8;g, kmf/f8], coflDko/, DofS:j]n", "ljlnod ;]lS:ko/ a]nfolt gf6ss/ / saL x'g", "g]kfndf /fhtGq @$) aif{ sfod /Xof]", "g]kfnL afhfx?M dfbn, v}Fh8L, afF;'/L, 8Dkm'", "k~rfd[tM b'w, bxL, dx, u'8, l3p", "g]kfnL afhfx?M lwd], onDa/, ;+v, PQmf/]", "blIf0f Pl;ofM g]kfn, e'6fg, >Ln+sf, ef/t==", "blIf0f Pl;ofM kfls:tfg, dflNbE;", "clk|msL d'n'sM cNh]l/of, OlhK6, lnAof, df]/f]Ssf]==", "clk|msL d'n'sM ;'8fg\\, 6'lgl;of, 3fgf, ;]g]un==", "clk|msL d'n'sM gfOh]l/of, blIf0f ck|mLsf, Sofd]?g, ;f]dflnof==", "clk|msL d'n'sM Olyof]lkof, a'?G8L, s]Gof, o'ufG8f==", "xjfO 6fk' cf7 6fk'x? ldn]/ ag]sf] 5.", "xjfOog 6fk'x?M xfjfO{, cf]cfx', dfpO, sf}jfO{==", "xjfOog 6fk'x?M df]nf]sfO{, ngfO{, lgO{xfpm, sfxf]cf]nfj].", "g]kfnsf] If]qkmn !,$&,%!^ ju{ lsnf]ld6/ 5 .", ";u/dfyfsf] prfO{ **$*=*^ ld6/ xf] .", "g]kfn Ps ljsf; pGd'v b]z xf] .", "wfg / ux'F g]kfnsf] k|d'v jfnL x'g\\ .", "ltlnrf] tfn $*)) ld6/sf] prfO{df 5 .", "rfFu'gf/fo0f xg'dfg9f]sf af}4gfy kz'kltgfy ", "pb]Zo s] lng', p8L 5'g' rGb\\/ Ps .", "dflg; 7\"nf] lbnn] x'G5, hftn] x'b}g.", "h'g t nUof] tf/fn], dg t nUof] dfofn]", "xfd|L cfdf ;f/} g} af7L 5g\\ rfdn ;+u lk7f] kf] ;f6L 5g\\", "jfO{ /f]8sf] af6f] df w'nf] p8fpb} 6\\ofS;L u'8fpb}", "this is good thing to type my qzebv.", "hxfF 5g a'4sf cfFvf, l:gUw zfGt / ;'Gb/.", "xhf/ ;kgfx?sf], dfof nfu]/ cfpF5", "ag]sf] 5 kx/fn] of] 5ftL d]/f] .", "kf/L Tof] 8fF8fdf x]/, 3fd nfUof] 3dfO{nf] .", "c/af} dfG5]x?df, ltdL Ps dg ldNg] dfG5] .", "sflnkf/L bfO{ slt /fd|f], 9fsf6f]kL, sfFw}df unaGbL .", "oxfF b]zsf] 5 lrGtf ltdL dfof dfof eG5f}", "d x' g]kfnL afa' d]8 Og g]kfn", "dfl5 dfg{ hfd g bfh} sfnfkfgLdf", "u'/fF;sf] km]b d'gL ;Demgfsf] 5fofF", "6f9f w]/} 6f9f p9]sf /+lug rf/f", "dnfO{ klg c+u|]hL df af]Ng l;sfO{ b]p g", "g]kfn, ;'Gb/, zfGt ljzfn"],
                        hard: ["ho hulbZj/\\, ho clagzL", "ho ho eujfg, s?gf/flz", "ho hulbZj/\\, ho clagzL", "ho ho eujfg, s?gf/flz", "zQmL 5 k|e'sf] ck/Dkf/", "3'Db5 h;df ;a ;+;f/", "hnr/, ynr/, u|xug, tf/f", ";'o{ nufot ;'/, d'lg ;f/f.", "s]jn k|e'sf] s?gf kfO{", "u5{g\\ lghlgh sd{ /dfO{", "lx+8\\g] dfG5] n8\\b5, la3\\gafwf cfOkb{5", 'Pl;of, pQ/cd]l/sf, blIf0fcd]l/sf, o"/f]k, clk|msf', ";'o{, a'w, z'qm, d+un\\, k[YjL, la|x:ktL, zlg", "la1fgM ef}lts zf:q, /;fog zf:q, hLjlj1fg", 'hggL hGde"ldZr :ju{b\\jkL u/Lo;L', "v's'/Lsf] 8f]a leq jL/x?sf] kfOnf x'G5", ":joDe'sf] b'O6f cfFvfn] Gofo cGofo 5'6\\6ofO x]5{", ":k'lTgs ! ljZjsf] k|yd cGtl/Ifofg xf].", ";f]ljPt o'lgogn] ;g\\ !(%& df :k'lTgs ! p8fPsf] xf].", "lqe'jg ljdfg:yn ;g\\ !(%% df lgdf{0f ePsf] xf].", "leD;]g yfkfn] w/x/f lgdf{0f u/]sf x'g.", "b'O{ w/x/f la=;= !**! / !**@ df ag]sf x'g.", "If]qkmnsf] cfwf/df 8f]Nkf g]kfnsf] 7'nf] lhNnf xf].", ";o y/L afhf Pp6} tfn", "k|Voft vuf]lNjbx?M 6f]n]dL, sf]k]lg{s;, ufnLn]cf],==", "k|Voft vuf]lNjbx?M s]Kn/, xan,==", "k|Voft vuf]lNjbx?M sfn{ ;]ug, lgn l8u|f; 6fO;g,==", 'xan b"/aLg c+tl/Ifdf cjl:yt 5', "6]:nf, Pl8;g, kmf/f8], coflDko/, DofS:j]n", "ljlnod ;]lS:ko/ a]nfolt gf6ss/ / saL x'g", "g]kfndf /fhtGq @$) aif{ sfod /Xof]", "g]kfnL afhfx?M dfbn, v}Fh8L, afF;'/L, 8Dkm'", "k~rfd[tM b'w, bxL, dx, u'8, l3p", "g]kfnL afhfx?M lwd], onDa/, ;+v, PQmf/]", "blIf0f Pl;ofM g]kfn, e'6fg, >Ln+sf, ef/t==", "blIf0f Pl;ofM kfls:tfg, dflNbE;", "clk|msL d'n'sM cNh]l/of, OlhK6, lnAof, df]/f]Ssf]==", "clk|msL d'n'sM ;'8fg\\, 6'lgl;of, 3fgf, ;]g]un==", "clk|msL d'n'sM gfOh]l/of, blIf0f ck|mLsf, Sofd]?g, ;f]dflnof==", "clk|msL d'n'sM Olyof]lkof, a'?G8L, s]Gof, o'ufG8f==", "xjfO 6fk' cf7 6fk'x? ldn]/ ag]sf] 5.", "xjfOog 6fk'x?M xfjfO{, cf]cfx', dfpO, sf}jfO{==", "xjfOog 6fk'x?M df]nf]sfO{, ngfO{, lgO{xfpm, sfxf]cf]nfj].", "g]kfnsf] If]qkmn !,$&,%!^ ju{ lsnf]ld6/ 5 .", ";u/dfyfsf] prfO{ **$*=*^ ld6/ xf] .", "g]kfn Ps ljsf; pGd'v b]z xf] .", "wfg / ux'F g]kfnsf] k|d'v jfnL x'g\\ .", "ltlnrf] tfn $*)) ld6/sf] prfO{df 5 .", "rfFu'gf/fo0f xg'dfg9f]sf af}4gfy kz'kltgfy ", "pb]Zo s] lng', p8L 5'g' rGb\\/ Ps .", "dflg; 7\"nf] lbnn] x'G5, hftn] x'b}g.", "h'g t nUof] tf/fn], dg t nUof] dfofn]", "xfd|L cfdf ;f/} g} af7L 5g\\ rfdn ;+u lk7f] kf] ;f6L 5g\\", "jfO{ /f]8sf] af6f] df w'nf] p8fpb} 6\\ofS;L u'8fpb}", "this is good thing to type my qzebv.", "hxfF 5g a'4sf cfFvf, l:gUw zfGt / ;'Gb/.", "xhf/ ;kgfx?sf], dfof nfu]/ cfpF5", "ag]sf] 5 kx/fn] of] 5ftL d]/f] .", "kf/L Tof] 8fF8fdf x]/, 3fd nfUof] 3dfO{nf] .", "c/af} dfG5]x?df, ltdL Ps dg ldNg] dfG5] .", "sflnkf/L bfO{ slt /fd|f], 9fsf6f]kL, sfFw}df unaGbL .", "oxfF b]zsf] 5 lrGtf ltdL dfof dfof eG5f}", "d x' g]kfnL afa' d]8 Og g]kfn", "dfl5 dfg{ hfd g bfh} sfnfkfgLdf", "u'/fF;sf] km]b d'gL ;Demgfsf] 5fofF", "6f9f w]/} 6f9f p9]sf /+lug rf/f", "dnfO{ klg c+u|]hL df af]Ng l;sfO{ b]p g", "g]kfn, ;'Gb/, zfGt ljzfn"]
                    }
                },
                english: {
                    numRow: {
                        easy: ["`` 11 22 33 44 55 `` 11 22 33 44 55 ``", "11 22 33 44 55 `` 11 22 33 44 55 `` 11", "``` 111 222 333 444 555 ``` 111 222", "333 444 555 ``` 111 222 333 444 555", "``` 111 222 333 444 555 ``` 111 222", "`1 23 45 `1 23 45 `1 23 45 `1 23 45 `1", "23 45 `1 23 45 `1 23 45 `1 23 45 `1 23", "`12 345 `12 345 `12 345 `12 345 `12", "345 `12 345 `12 345 `12 345 `12 345", "`123 45`1 2345 `123 45`1 2345 `123", "45`1 2345 `123 45`1 2345 `123 45`1", "66 77 88 99 00 - = 66 77 88 99 00 -", "= 66 77 88 99 00 - = 66 77 88 99 00", "666 777 888 999 000 - = 666 777", "888 999 000 - = 666 777 888 999", "000 - = 666 777 888 999 000 -", "67 89 0- =6 78 90 -= 67 89 0- =6 78 90", "-= 67 89 0- =6 78 90 -= 67 89 0- =6 78", "678 90- =67 890 -=6 789 0-= 678 90-", "=67 890 -=6 789 0-= 678 90- =67 890", "6789 0-=6 7890 -=67 890- =678 90-=", "6789 0-=6 7890 -=67 890- =678 90-=", "~~ !! @@ ## $$ %% ~~ !! @@ ## $$ %% ~~", "!! @@ ## $$ %% ~~ !! @@ ## $$ %% ~~ !!", "~~~ !!! @@@ ### $$$ %%% ~~~ !!! @@@", "### $$$ %%% ~~~ !!! @@@ ### $$$ %%%", "~~~ !!! @@@ ### $$$ %%% ~~~ !!! @@@", "~! @# $% ~! @# $% ~! @# $% ~! @# $% ~!", "@# $% ~! @# $% ~! @# $% ~! @# $% ~! @#", "~!@ #$% ~!@ #$% ~!@ #$% ~!@ #$% ~!@", "#$% ~!@ #$% ~!@ #$% ~!@ #$% ~!@ #$%", "~!@# $%~! @#$% ~!@# $%~! @#$% ~!@#", "$%~! @#$% ~!@# $%~! @#$% ~!@# $%~!", "^^ && ** (( )) _ + ^^ && ** (( )) _", "+ ^^ && ** (( )) _ + ^^ && ** (( ))", "^^^ &&& *** ((( ))) _ + ^^^ &&&", "*** ((( ))) _ + ^^^ &&& *** (((", "))) _ + ^^^ &&& *** ((( ))) _", "^& *( )_ +^ &* () _+ ^& *( )_ +^ &* ()", "_+ ^& *( )_ +^ &* () _+ ^& *( )_ +^ &*", "^&* ()_ +^& *() _+^ &*( )_+ ^&* ()_", "+^& *() _+^ &*( )_+ ^&* ()_ +^& *()", "^&*( )_+^ &*() _+^& *()_ +^&* ()_+", "^&*( )_+^ &*() _+^& *()_ +^&* ()_+", "`` 11 22 33 44 55 66 77 88 99 00 - =", "`` 11 22 33 44 55 66 77 88 99 00 - =", "`` 11 22 33 44 55 66 77 88 99 00 - =", "``` 111 222 333 444 555 666 777 888", "999 000 - = ``` 111 222 333 444", "555 666 777 888 999 000 - = ```", "`1 23 45 67 89 0- =` 12 34 56 78 90 -=", "`1 23 45 67 89 0- =` 12 34 56 78 90 -=", "`1 23 45 67 89 0- =` 12 34 56 78 90 -=", "`1 23 45 67 89 0- =` 12 34 56 78 90 -=", "`12 345 678 90- =`1 234 567 890 -=`", "123 456 789 0-= `12 345 678 90- =`1", "234 567 890 -=` 123 456 789 0-= `12", "345 678 90- =`1 234 567 890 -=` 123", "`123 4567 890- =`12 3456 7890 -=`1", "2345 6789 0-=` 1234 5678 90-= `123", "4567 890- =`12 3456 7890 -=`1 2345", "6789 0-=` 1234 5678 90-= `123 4567", "~~ !! @@ ## $$ %% ^^ && ** (( )) _ +", "~~ !! @@ ## $$ %% ^^ && ** (( )) _ +", "~~ !! @@ ## $$ %% ^^ && ** (( )) _ +", "~~~ !!! @@@ ### $$$ %%% ^^^ &&& ***", "((( ))) _ + ~~~ !!! @@@ ### $$$", "%%% ^^^ &&& *** ((( ))) _ + ~~~", "~! @# $% ^& *( )_ +~ !@ #$ %^ &* () _+", "~! @# $% ^& *( )_ +~ !@ #$ %^ &* () _+", "~! @# $% ^& *( )_ +~ !@ #$ %^ &* () _+", "~! @# $% ^& *( )_ +~ !@ #$ %^ &* () _+", "~!@ #$% ^&* ()_ +~! @#$ %^& *() _+~", "!@# $%^ &*( )_+ ~!@ #$% ^&* ()_ +~!", "@#$ %^& *() _+~ !@# $%^ &*( )_+ ~!@", "#$% ^&* ()_ +~! @#$ %^& *() _+~ !@#", "~!@# $%^& *()_ +~!@ #$%^ &*() _+~!", "@#$% ^&*( )_+~ !@#$ %^&* ()_+ ~!@#", "$%^& *()_ +~!@ #$%^ &*() _+~! @#$%", "^&*( )_+~ !@#$ %^&* ()_+ ~!@# $%^&"],
                        medium: ["~~~ ``` !!! 111 @@@ 222 ### 333 $$$", "444 %%% 555 ~~~ ``` !!! 111 @@@ 222", "### 333 $$$ 444 %%% 555 ~~~ ``` !!!", "~` !1 @2 #3 $4 %5 ~` !1 @2 #3 $4 %5 ~`", "!1 @2 #3 $4 %5 ~` !1 @2 #3 $4 %5 ~` !1", "@2 #3 $4 %5 ~` !1 @2 #3 $4 %5 ~` !1 @2", "#3 $4 %5 ~` !1 @2 #3 $4 %5 ~` !1 @2 #3", "~`! 1@2 #3$ 4%5 ~`! 1@2 #3$ 4%5 ~`!", "1@2 #3$ 4%5 ~`! 1@2 #3$ 4%5 ~`! 1@2", "#3$ 4%5 ~`! 1@2 #3$ 4%5 ~`! 1@2 #3$", "4%5 ~`! 1@2 #3$ 4%5 ~`! 1@2 #3$ 4%5", "~`!1 @2#3 $4%5 ~`!1 @2#3 $4%5 ~`!1", "@2#3 $4%5 ~`!1 @2#3 $4%5 ~`!1 @2#3", "$4%5 ~`!1 @2#3 $4%5 ~`!1 @2#3 $4%5", "~`!1 @2#3 $4%5 ~`!1 @2#3 $4%5 ~`!1", "^^^ 666 &&& 777 *** 888 ((( 999 )))", "000 ___ --- +++ === ^^^ 666 &&& 777", "*** 888 ((( 999 ))) 000 ___ --- +++", "^6 &7 *8 (9 )0 _- += ^6 &7 *8 (9 )0 _-", "+= ^6 &7 *8 (9 )0 _- += ^6 &7 *8 (9 )0", "_- += ^6 &7 *8 (9 )0 _- += ^6 &7 *8 (9", ")0 _- += ^6 &7 *8 (9 )0 _- += ^6 &7 *8", "^6& 7*8 (9) 0_- +=^ 6&7 *8( 9)0 _-+", "=^6 &7* 8(9 )0_ -+= ^6& 7*8 (9) 0_-", "+=^ 6&7 *8( 9)0 _-+ =^6 &7* 8(9 )0_", "-+= ^6& 7*8 (9) 0_- +=^ 6&7 *8( 9)0", "^6&7 *8(9 )0_- +=^6 &7*8 (9)0 _-+=", "^6&7 *8(9 )0_- +=^6 &7*8 (9)0 _-+=", "^6&7 *8(9 )0_- +=^6 &7*8 (9)0 _-+=", "^6&7 *8(9 )0_- +=^6 &7*8 (9)0 _-+=", "~~~ ``` !!! 111 @@@ 222 ### 333 $$$", "444 %%% 555 ^^^ 666 &&& 777 *** 888", "((( 999 ))) 000 ___ --- +++ === ~~~", "~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- +=", "~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- +=", "~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- +=", "~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- +=", "~`! 1@2 #3$ 4%5 ^6& 7*8 (9) 0_- +=~", "`!1 @2# 3$4 %5^ 6&7 *8( 9)0 _-+ =~`", "!1@ 2#3 $4% 5^6 &7* 8(9 )0_ -+= ~`!", "1@2 #3$ 4%5 ^6& 7*8 (9) 0_- +=~ `!1", "~`!1 @2#3 $4%5 ^6&7 *8(9 )0_- +=~`", "!1@2 #3$4 %5^6 &7*8 (9)0 _-+= ~`!1", "@2#3 $4%5 ^6&7 *8(9 )0_- +=~` !1@2", "#3$4 %5^6 &7*8 (9)0 _-+= ~`!1 @2#3", "^^^ ``` &&& 111 *** 222 ((( 333 )))", "444 ___ 555 ^^^ ``` &&& 111 *** 222", "((( 333 ))) 444 ___ 555 ^^^ ``` &&&", "^` &1 *2 (3 )4 _5 ^` &1 *2 (3 )4 _5 ^`", "&1 *2 (3 )4 _5 ^` &1 *2 (3 )4 _5 ^` &1", "*2 (3 )4 _5 ^` &1 *2 (3 )4 _5 ^` &1 *2", "(3 )4 _5 ^` &1 *2 (3 )4 _5 ^` &1 *2 (3", "^`& 1*2 (3) 4_5 ^`& 1*2 (3) 4_5 ^`&", "1*2 (3) 4_5 ^`& 1*2 (3) 4_5 ^`& 1*2", "(3) 4_5 ^`& 1*2 (3) 4_5 ^`& 1*2 (3)", "4_5 ^`& 1*2 (3) 4_5 ^`& 1*2 (3) 4_5", "^`&1 *2(3 )4_5 ^`&1 *2(3 )4_5 ^`&1", "*2(3 )4_5 ^`&1 *2(3 )4_5 ^`&1 *2(3", ")4_5 ^`&1 *2(3 )4_5 ^`&1 *2(3 )4_5", "^`&1 *2(3 )4_5 ^`&1 *2(3 )4_5 ^`&1", "~~~ 666 !!! 777 @@@ 888 ### 999 $$$", "000 %%% --- +++ === ~~~ 666 !!! 777", "@@@ 888 ### 999 $$$ 000 %%% --- +++", "~6 !7 @8 #9 $0 %- += ~6 !7 @8 #9 $0 %-", "+= ~6 !7 @8 #9 $0 %- += ~6 !7 @8 #9 $0", "%- += ~6 !7 @8 #9 $0 %- += ~6 !7 @8 #9", "$0 %- += ~6 !7 @8 #9 $0 %- += ~6 !7 @8", "~6! 7@8 #9$ 0%- +=~ 6!7 @8# 9$0 %-+", "=~6 !7@ 8#9 $0% -+= ~6! 7@8 #9$ 0%-", "+=~ 6!7 @8# 9$0 %-+ =~6 !7@ 8#9 $0%", "-+= ~6! 7@8 #9$ 0%- +=~ 6!7 @8# 9$0", "~6!7 @8#9 $0%- +=~6 !7@8 #9$0 %-+=", "~6!7 @8#9 $0%- +=~6 !7@8 #9$0 %-+=", "~6!7 @8#9 $0%- +=~6 !7@8 #9$0 %-+=", "~6!7 @8#9 $0%- +=~6 !7@8 #9$0 %-+="],
                        hard: ["-_ 1~` &% ===@ ===@ ^)! @ $#) 8` -@&!_ 92", "75 31= 86 6~5 3!@5 -@&!_ -@&!_ ^)! 31= 31=", "106 56` ~~ -@&!_ -@&!_ !)@$% 31= ~~ 54 92", "5`+ $#) -_ 601 @ -_ @ ^)! -@&!_ 366 88+", "88+ -@&!_ ===@ 88+ ]]]2= -@&!_ 56 86 ~~", "-@&!_ 681 8` 601 @ %)) ^)! %)) 6~5 1~` 5", "56 5 366 ===@ 681 ^)! 601 1~` 8` 9+ 1~`", "@$@% 106 ^)! 54 56` &% 88+ !)@$% ==@ @)!&", "601 681 6~5 54 &% 8` ^)! @)#) 86 %)) 88+", "366 %)) @)#) @)!& -@&!_ ==@ ===@ @)#) 88+"]
                    },
                    topRow: {
                        easy: ["qq ww ee rr tt qq ww ee rr tt qq ww ee", "qqq www eee rrr ttt qqq www eee rrr", "ttt qqq www eee rrr ttt qqq www eee", "qw er tq we rt qw er tq we rt qw er tq", "qwe rtq wer tqw ert qwe rtq wer tqw", "qwer tqwe rtqw ertq wert qwer tqwe", "yy uu ii oo pp [ ] \\ yy uu ii oo pp", "[ ] \\ yy uu ii oo pp [ ] \\ yy uu", "ii oo pp [ ] \\ yy uu ii oo pp [ ]", "yyy uuu iii ooo ppp [ ] \\ yyy", "uuu iii ooo ppp [ ] \\ yyy uuu", "iii ooo ppp [ ] \\ yyy uuu iii", "yu io p[ ]\\ yu io p[ ]\\ yu io p[ ]\\ yu", "io p[ ]\\ yu io p[ ]\\ yu io p[ ]\\ yu io", "p[ ]\\ yu io p[ ]\\ yu io p[ ]\\ yu io p[", "yui op[ ]\\y uio p[] \\yu iop []\\ yui", "op[ ]\\y uio p[] \\yu iop []\\ yui op[", "yuio p[]\\ yuio p[]\\ yuio p[]\\ yuio", "p[]\\ yuio p[]\\ yuio p[]\\ yuio p[]\\", "QQ WW EE RR TT QQ WW EE RR TT QQ WW EE", "QQQ WWW EEE RRR TTT QQQ WWW EEE RRR", "TTT QQQ WWW EEE RRR TTT QQQ WWW EEE", "QW ER TQ WE RT QW ER TQ WE RT QW ER TQ", "QWE RTQ WER TQW ERT QWE RTQ WER TQW", "QWER TQWE RTQW ERTQ WERT QWER TQWE", "YY UU II OO PP { } | YY UU II OO PP", "{ } | YY UU II OO PP { } | YY UU", "II OO PP { } | YY UU II OO PP { }", "YYY UUU III OOO PPP { } | YYY", "UUU III OOO PPP { } | YYY UUU", "III OOO PPP { } | YYY UUU III", "YU IO P{ }| YU IO P{ }| YU IO P{ }| YU", "IO P{ }| YU IO P{ }| YU IO P{ }| YU IO", "P{ }| YU IO P{ }| YU IO P{ }| YU IO P{", "YUI OP{ }|Y UIO P{} |YU IOP {}| YUI", "OP{ }|Y UIO P{} |YU IOP {}| YUI OP{", "YUIO P{}| YUIO P{}| YUIO P{}| YUIO", "P{}| YUIO P{}| YUIO P{}| YUIO P{}|", "qq ww ee rr tt yy uu ii oo pp [ ] \\", "qq ww ee rr tt yy uu ii oo pp [ ] \\", "qq ww ee rr tt yy uu ii oo pp [ ] \\", "qqq www eee rrr ttt yyy uuu iii ooo", "ppp [ ] \\ qqq www eee rrr ttt", "yyy uuu iii ooo ppp [ ] \\ qqq", "qw er ty ui op [] \\q we rt yu io p[ ]\\", "qw er ty ui op [] \\q we rt yu io p[ ]\\", "qw er ty ui op [] \\q we rt yu io p[ ]\\", "qw er ty ui op [] \\q we rt yu io p[ ]\\", "qwe rty uio p[] \\qw ert yui op[ ]\\q", "wer tyu iop []\\ qwe rty uio p[] \\qw", "ert yui op[ ]\\q wer tyu iop []\\ qwe", "rty uio p[] \\qw ert yui op[ ]\\q wer", "qwer tyui op[] \\qwe rtyu iop[ ]\\qw", "erty uiop []\\q wert yuio p[]\\ qwer", "tyui op[] \\qwe rtyu iop[ ]\\qw erty", "uiop []\\q wert yuio p[]\\ qwer tyui", "QQ WW EE RR TT YY UU II OO PP { } |", "QQ WW EE RR TT YY UU II OO PP { } |", "QQ WW EE RR TT YY UU II OO PP { } |", "QQQ WWW EEE RRR TTT YYY UUU III OOO", "PPP { } | QQQ WWW EEE RRR TTT", "YYY UUU III OOO PPP { } | QQQ", "QW ER TY UI OP {} |Q WE RT YU IO P{ }|", "QW ER TY UI OP {} |Q WE RT YU IO P{ }|", "QW ER TY UI OP {} |Q WE RT YU IO P{ }|", "QW ER TY UI OP {} |Q WE RT YU IO P{ }|", "QWE RTY UIO P{} |QW ERT YUI OP{ }|Q", "WER TYU IOP {}| QWE RTY UIO P{} |QW", "ERT YUI OP{ }|Q WER TYU IOP {}| QWE", "RTY UIO P{} |QW ERT YUI OP{ }|Q WER", "QWER TYUI OP{} |QWE RTYU IOP{ }|QW", "ERTY UIOP {}|Q WERT YUIO P{}| QWER", "TYUI OP{} |QWE RTYU IOP{ }|QW ERTY", "UIOP {}|Q WERT YUIO P{}| QWER TYUI"],
                        medium: ["QQQ qqq WWW www EEE eee RRR rrr TTT", "ttt QQQ qqq WWW www EEE eee RRR rrr", "TTT ttt QQQ qqq WWW www EEE eee RRR", "Qq Ww Ee Rr Tt Qq Ww Ee Rr Tt Qq Ww Ee", "Rr Tt Qq Ww Ee Rr Tt Qq Ww Ee Rr Tt Qq", "Ww Ee Rr Tt Qq Ww Ee Rr Tt Qq Ww Ee Rr", "QqW wEe RrT tQq WwE eRr TtQ qWw EeR", "rTt QqW wEe RrT tQq WwE eRr TtQ qWw", "EeR rTt QqW wEe RrT tQq WwE eRr TtQ", "QqWw EeRr TtQq WwEe RrTt QqWw EeRr", "TtQq WwEe RrTt QqWw EeRr TtQq WwEe", "RrTt QqWw EeRr TtQq WwEe RrTt QqWw", "YYY yyy UUU uuu III iii OOO ooo OOO", "ppp {{{ [[[ }}} ]]] ||| \\\\\\ YYY yyy", "UUU uuu III iii OOO ooo OOO ppp {{{", "Yy Uu Ii Oo Op {[ }] |\\ Yy Uu Ii Oo Op", "{[ }] |\\ Yy Uu Ii Oo Op {[ }] |\\ Yy Uu", "Ii Oo Op {[ }] |\\ Yy Uu Ii Oo Op {[ }]", "|\\ Yy Uu Ii Oo Op {[ }] |\\ Yy Uu Ii Oo", "YyU uIi OoO p{[ }]| \\Yy UuI iOo Op{", "[}] |\\Y yUu IiO oOp {[} ]|\\ YyU uIi", "OoO p{[ }]| \\Yy UuI iOo Op{ [}] |\\Y", "yUu IiO oOp {[} ]|\\ YyU uIi OoO p{[", "YyUu IiOo Op{[ }]|\\ YyUu IiOo Op{[", "}]|\\ YyUu IiOo Op{[ }]|\\ YyUu IiOo", "Op{[ }]|\\ YyUu IiOo Op{[ }]|\\ YyUu", "IiOo Op{[ }]|\\ YyUu IiOo Op{[ }]|\\", "QQQ qqq WWW www EEE eee RRR rrr TTT", "ttt YYY yyy UUU uuu III iii OOO ooo", "OOO ppp {{{ [[[ }}} ]]] ||| \\\\\\ QQQ", "Qq Ww Ee Rr Tt Yy Uu Ii Oo Op {[ }] |\\", "Qq Ww Ee Rr Tt Yy Uu Ii Oo Op {[ }] |\\", "Qq Ww Ee Rr Tt Yy Uu Ii Oo Op {[ }] |\\", "Qq Ww Ee Rr Tt Yy Uu Ii Oo Op {[ }] |\\", "QqW wEe RrT tYy UuI iOo Op{ [}] |\\Q", "qWw EeR rTt YyU uIi OoO p{[ }]| \\Qq", "WwE eRr TtY yUu IiO oOp {[} ]|\\ QqW", "wEe RrT tYy UuI iOo Op{ [}] |\\Q qWw", "QqWw EeRr TtYy UuIi OoOp {[}] |\\Qq", "WwEe RrTt YyUu IiOo Op{[ }]|\\ QqWw", "EeRr TtYy UuIi OoOp {[}] |\\Qq WwEe", "RrTt YyUu IiOo Op{[ }]|\\ QqWw EeRr", "YYY qqq UUU www III eee OOO rrr OOO", "ttt YYY qqq UUU www III eee OOO rrr", "OOO ttt YYY qqq UUU www III eee OOO", "Yq Uw Ie Or Ot Yq Uw Ie Or Ot Yq Uw Ie", "Or Ot Yq Uw Ie Or Ot Yq Uw Ie Or Ot Yq", "Uw Ie Or Ot Yq Uw Ie Or Ot Yq Uw Ie Or", "YqU wIe OrO tYq UwI eOr OtY qUw IeO", "rOt YqU wIe OrO tYq UwI eOr OtY qUw", "IeO rOt YqU wIe OrO tYq UwI eOr OtY", "YqUw IeOr OtYq UwIe OrOt YqUw IeOr", "OtYq UwIe OrOt YqUw IeOr OtYq UwIe", "OrOt YqUw IeOr OtYq UwIe OrOt YqUw", "QQQ yyy WWW uuu EEE iii RRR ooo TTT", "ppp {{{ [[[ }}} ]]] ||| \\\\\\ QQQ yyy", "WWW uuu EEE iii RRR ooo TTT ppp {{{", "Qy Wu Ei Ro Tp {[ }] |\\ Qy Wu Ei Ro Tp", "{[ }] |\\ Qy Wu Ei Ro Tp {[ }] |\\ Qy Wu", "Ei Ro Tp {[ }] |\\ Qy Wu Ei Ro Tp {[ }]", "|\\ Qy Wu Ei Ro Tp {[ }] |\\ Qy Wu Ei Ro", "QyW uEi RoT p{[ }]| \\Qy WuE iRo Tp{", "[}] |\\Q yWu EiR oTp {[} ]|\\ QyW uEi", "RoT p{[ }]| \\Qy WuE iRo Tp{ [}] |\\Q", "yWu EiR oTp {[} ]|\\ QyW uEi RoT p{[", "QyWu EiRo Tp{[ }]|\\ QyWu EiRo Tp{[", "}]|\\ QyWu EiRo Tp{[ }]|\\ QyWu EiRo", "Tp{[ }]|\\ QyWu EiRo Tp{[ }]|\\ QyWu", "EiRo Tp{[ }]|\\ QyWu EiRo Tp{[ }]|\\"],
                        hard: ["uy] eO e} eP u[P yu\\ eu{ eIo pe{ eP eP", "pt} tYo t tt} r} ut] eu{ pe{ r}t eQt pu|e", "eQt w}o{ eu{ tt} t]t} pe{ To} uP u[ pe u[", "To P e} t} uy] yu\\ pO pe{P tYo p tYo tYo", "eIo t yu\\ eO{ tt} o} e|oP o] t]O{ u[ uO", "pO y]q pO To uo] P] To o] P] To} t y]q t]t}", "pu|e y]q uO eO pu|e eP pe{ pO t]O e} P tq", "eQt oq tP yu\\ w}o{ tq e} e]p e[r r}t]", "eIo o} e|o pO e[r eO eQt r}t uP oq pe{ eO{", "pO pu|e P] u|o r]t pO uOP pt} eO{ P] yu'"]
                    },
                    midRow: {
                        easy: ["aa ss dd ff gg aa ss dd ff gg aa ss dd", "aaa sss ddd fff ggg aaa sss ddd fff", "ggg aaa sss ddd fff ggg aaa sss ddd", "as df ga sd fg as df ga sd fg as df ga", "asd fga sdf gas dfg asd fga sdf gas", "asdf gasd fgas dfga sdfg asdf gasd", "hh jj kk ll ;; ' hh jj kk ll ;; ' hh", "jj kk ll ;; ' hh jj kk ll ;; ' hh jj", "hhh jjj kkk lll ;;; ' hhh jjj kkk", "lll ;;; ' hhh jjj kkk lll ;;; '", "hhh jjj kkk lll ;;; ' hhh jjj kkk", "hj kl ;' hj kl ;' hj kl ;' hj kl ;' hj", "kl ;' hj kl ;' hj kl ;' hj kl ;' hj kl", "hjk l;' hjk l;' hjk l;' hjk l;' hjk", "l;' hjk l;' hjk l;' hjk l;' hjk l;'", "hjkl ;'hj kl;' hjkl ;'hj kl;' hjkl", ";'hj kl;' hjkl ;'hj kl;' hjkl ;'hj", "AA SS DD FF GG AA SS DD FF GG AA SS DD", "AAA SSS DDD FFF GGG AAA SSS DDD FFF", "GGG AAA SSS DDD FFF GGG AAA SSS DDD", "AS DF GA SD FG AS DF GA SD FG AS DF GA", "ASD FGA SDF GAS DFG ASD FGA SDF GAS", "ASDF GASD FGAS DFGA SDFG ASDF GASD", 'HH JJ KK LL :: " HH JJ KK LL :: " HH', 'JJ KK LL :: " HH JJ KK LL :: " HH JJ', 'HHH JJJ KKK LLL ::: " HHH JJJ KKK', 'LLL ::: " HHH JJJ KKK LLL ::: "', 'HHH JJJ KKK LLL ::: " HHH JJJ KKK', 'HJ KL :" HJ KL :" HJ KL :" HJ KL :" HJ', 'KL :" HJ KL :" HJ KL :" HJ KL :" HJ KL', 'HJK L:" HJK L:" HJK L:" HJK L:" HJK', 'L:" HJK L:" HJK L:" HJK L:" HJK L:"', 'HJKL :"HJ KL:" HJKL :"HJ KL:" HJKL', ':"HJ KL:" HJKL :"HJ KL:" HJKL :"HJ', "aa ss dd ff gg hh jj kk ll ;; ' aa ss", "dd ff gg hh jj kk ll ;; ' aa ss dd ff", "gg hh jj kk ll ;; ' aa ss dd ff gg hh", "aaa sss ddd fff ggg hhh jjj kkk lll", ";;; ' aaa sss ddd fff ggg hhh jjj", "kkk lll ;;; ' aaa sss ddd fff ggg", "as df gh jk l; 'a sd fg hj kl ;' as df", "gh jk l; 'a sd fg hj kl ;' as df gh jk", "l; 'a sd fg hj kl ;' as df gh jk l; 'a", "sd fg hj kl ;' as df gh jk l; 'a sd fg", "asd fgh jkl ;'a sdf ghj kl; 'as dfg", "hjk l;' asd fgh jkl ;'a sdf ghj kl;", "'as dfg hjk l;' asd fgh jkl ;'a sdf", "ghj kl; 'as dfg hjk l;' asd fgh jkl", "asdf ghjk l;'a sdfg hjkl ;'as dfgh", "jkl; 'asd fghj kl;' asdf ghjk l;'a", "sdfg hjkl ;'as dfgh jkl; 'asd fghj", 'AA SS DD FF GG HH JJ KK LL :: " AA SS', 'DD FF GG HH JJ KK LL :: " AA SS DD FF', 'GG HH JJ KK LL :: " AA SS DD FF GG HH', "AAA SSS DDD FFF GGG HHH JJJ KKK LLL", '::: " AAA SSS DDD FFF GGG HHH JJJ', 'KKK LLL ::: " AAA SSS DDD FFF GGG', 'AS DF GH JK L: "A SD FG HJ KL :" AS DF', 'GH JK L: "A SD FG HJ KL :" AS DF GH JK', 'L: "A SD FG HJ KL :" AS DF GH JK L: "A', 'SD FG HJ KL :" AS DF GH JK L: "A SD FG', 'ASD FGH JKL :"A SDF GHJ KL: "AS DFG', 'HJK L:" ASD FGH JKL :"A SDF GHJ KL:', '"AS DFG HJK L:" ASD FGH JKL :"A SDF', 'GHJ KL: "AS DFG HJK L:" ASD FGH JKL', 'ASDF GHJK L:"A SDFG HJKL :"AS DFGH', 'JKL: "ASD FGHJ KL:" ASDF GHJK L:"A', 'SDFG HJKL :"AS DFGH JKL: "ASD FGHJ'],
                        medium: ["AAA aaa SSS sss DDD ddd FFF fff GGG", "ggg AAA aaa SSS sss DDD ddd FFF fff", "GGG ggg AAA aaa SSS sss DDD ddd FFF", "Aa Ss Dd Ff Gg Aa Ss Dd Ff Gg Aa Ss Dd", "Ff Gg Aa Ss Dd Ff Gg Aa Ss Dd Ff Gg Aa", "Ss Dd Ff Gg Aa Ss Dd Ff Gg Aa Ss Dd Ff", "AaS sDd FfG gAa SsD dFf GgA aSs DdF", "fGg AaS sDd FfG gAa SsD dFf GgA aSs", "DdF fGg AaS sDd FfG gAa SsD dFf GgA", "AaSs DdFf GgAa SsDd FfGg AaSs DdFf", "GgAa SsDd FfGg AaSs DdFf GgAa SsDd", "FfGg AaSs DdFf GgAa SsDd FfGg AaSs", "HHH hhh JJJ jjj KKK kkk LLL lll :::", ";;; \"\"\" ''' HHH hhh JJJ jjj KKK kkk", "LLL lll ::: ;;; \"\"\" ''' HHH hhh JJJ", "Hh Jj Kk Ll :; \"' Hh Jj Kk Ll :; \"' Hh", "Jj Kk Ll :; \"' Hh Jj Kk Ll :; \"' Hh Jj", "Kk Ll :; \"' Hh Jj Kk Ll :; \"' Hh Jj Kk", "Ll :; \"' Hh Jj Kk Ll :; \"' Hh Jj Kk Ll", "HhJ jKk Ll: ;\"' HhJ jKk Ll: ;\"' HhJ", "jKk Ll: ;\"' HhJ jKk Ll: ;\"' HhJ jKk", "Ll: ;\"' HhJ jKk Ll: ;\"' HhJ jKk Ll:", ";\"' HhJ jKk Ll: ;\"' HhJ jKk Ll: ;\"'", "HhJj KkLl :;\"' HhJj KkLl :;\"' HhJj", "KkLl :;\"' HhJj KkLl :;\"' HhJj KkLl", ":;\"' HhJj KkLl :;\"' HhJj KkLl :;\"'", "HhJj KkLl :;\"' HhJj KkLl :;\"' HhJj", "AAA aaa SSS sss DDD ddd FFF fff GGG", "ggg HHH hhh JJJ jjj KKK kkk LLL lll", "::: ;;; \"\"\" ''' AAA aaa SSS sss DDD", "Aa Ss Dd Ff Gg Hh Jj Kk Ll :; \"' Aa Ss", "Dd Ff Gg Hh Jj Kk Ll :; \"' Aa Ss Dd Ff", "Gg Hh Jj Kk Ll :; \"' Aa Ss Dd Ff Gg Hh", "Jj Kk Ll :; \"' Aa Ss Dd Ff Gg Hh Jj Kk", "AaS sDd FfG gHh JjK kLl :;\" 'Aa SsD", "dFf GgH hJj KkL l:; \"'A aSs DdF fGg", "HhJ jKk Ll: ;\"' AaS sDd FfG gHh JjK", "kLl :;\" 'Aa SsD dFf GgH hJj KkL l:;", "AaSs DdFf GgHh JjKk Ll:; \"'Aa SsDd", "FfGg HhJj KkLl :;\"' AaSs DdFf GgHh", "JjKk Ll:; \"'Aa SsDd FfGg HhJj KkLl", ":;\"' AaSs DdFf GgHh JjKk Ll:; \"'Aa", "HHH aaa JJJ sss KKK ddd LLL fff :::", "ggg HHH aaa JJJ sss KKK ddd LLL fff", "::: ggg HHH aaa JJJ sss KKK ddd LLL", "Ha Js Kd Lf :g Ha Js Kd Lf :g Ha Js Kd", "Lf :g Ha Js Kd Lf :g Ha Js Kd Lf :g Ha", "Js Kd Lf :g Ha Js Kd Lf :g Ha Js Kd Lf", "HaJ sKd Lf: gHa JsK dLf :gH aJs KdL", "f:g HaJ sKd Lf: gHa JsK dLf :gH aJs", "KdL f:g HaJ sKd Lf: gHa JsK dLf :gH", "HaJs KdLf :gHa JsKd Lf:g HaJs KdLf", ":gHa JsKd Lf:g HaJs KdLf :gHa JsKd", "Lf:g HaJs KdLf :gHa JsKd Lf:g HaJs", "AAA hhh SSS jjj DDD kkk FFF lll GGG", ";;; \"\"\" ''' AAA hhh SSS jjj DDD kkk", "FFF lll GGG ;;; \"\"\" ''' AAA hhh SSS", "Ah Sj Dk Fl G; \"' Ah Sj Dk Fl G; \"' Ah", "Sj Dk Fl G; \"' Ah Sj Dk Fl G; \"' Ah Sj", "Dk Fl G; \"' Ah Sj Dk Fl G; \"' Ah Sj Dk", "Fl G; \"' Ah Sj Dk Fl G; \"' Ah Sj Dk Fl", "AhS jDk FlG ;\"' AhS jDk FlG ;\"' AhS", "jDk FlG ;\"' AhS jDk FlG ;\"' AhS jDk", "FlG ;\"' AhS jDk FlG ;\"' AhS jDk FlG", ";\"' AhS jDk FlG ;\"' AhS jDk FlG ;\"'", "AhSj DkFl G;\"' AhSj DkFl G;\"' AhSj", "DkFl G;\"' AhSj DkFl G;\"' AhSj DkFl", "G;\"' AhSj DkFl G;\"' AhSj DkFl G;\"'", "AhSj DkFl G;\"' AhSj DkFl G;\"' AhSj"],
                        hard: ["sfkLdf ;dfhdf ;fGgfgL ;AhL lsGg kf; ;f;'", "ljsf; lghL afFls lakgL hLk l;Sg afFls d':sfg", "jf sfg ;dflhs ;fgf s'g l;Sg sfF lakgL ;Ddfg", "h'gL dfF ;dfhdf sdL dHhf dfGg' skL ;fa sfF", ";Lk laDa ;dfh sfd sfdgf s;d ;dflhs sfd h;", "kl;gf dgsf ;dfg afgL ;dfh ;dfhdf af; kl;gf", ";dfhdf ;'g lsg lagf ;Dd ljkgf l;dL lasf;", "sfF sfddf ;'Gg gfd sfF ha a:g' hfF a; hggL", ";fGgfgL ljsf; kSsf gfd kjg a;'F hgf l;dL", "afaf s'GgL afFsL ;'Gg s'g ;s\"F sfg'g ;fa'g"]
                    },
                    lowRow: {
                        easy: ["zz xx cc vv bb zz xx cc vv bb zz xx cc", "zzz xxx ccc vvv bbb zzz xxx ccc vvv", "bbb zzz xxx ccc vvv bbb zzz xxx ccc", "zx cv bz xc vb zx cv bz xc vb zx cv bz", "zxc vbz xcv bzx cvb zxc vbz xcv bzx", "zxcv bzxc vbzx cvbz xcvb zxcv bzxc", "nn mm ,, .. // nn mm ,, .. // nn mm ,,", "nnn mmm ,,, ... /// nnn mmm ,,, ...", "/// nnn mmm ,,, ... /// nnn mmm ,,,", "nm ,. /n m, ./ nm ,. /n m, ./ nm ,. /n", "nm, ./n m,. /nm ,./ nm, ./n m,. /nm", "nm,. /nm, ./nm ,./n m,./ nm,. /nm,", "ZZ XX CC VV BB ZZ XX CC VV BB ZZ XX CC", "ZZZ XXX CCC VVV BBB ZZZ XXX CCC VVV", "BBB ZZZ XXX CCC VVV BBB ZZZ XXX CCC", "ZX CV BZ XC VB ZX CV BZ XC VB ZX CV BZ", "ZXC VBZ XCV BZX CVB ZXC VBZ XCV BZX", "ZXCV BZXC VBZX CVBZ XCVB ZXCV BZXC", "NN MM << >> ?? NN MM << >> ?? NN MM <<", "NNN MMM <<< >>> ??? NNN MMM <<< >>>", "??? NNN MMM <<< >>> ??? NNN MMM <<<", "NM <> ?N M< >? NM <> ?N M< >? NM <> ?N", "NM< >?N M<> ?NM <>? NM< >?N M<> ?NM", "NM<> ?NM< >?NM <>?N M<>? NM<> ?NM<", "zz xx cc vv bb nn mm ,, .. // zz xx cc", "vv bb nn mm ,, .. // zz xx cc vv bb nn", "mm ,, .. // zz xx cc vv bb nn mm ,, ..", "zzz xxx ccc vvv bbb nnn mmm ,,, ...", "/// zzz xxx ccc vvv bbb nnn mmm ,,,", "... /// zzz xxx ccc vvv bbb nnn mmm", "zx cv bn m, ./ zx cv bn m, ./ zx cv bn", "m, ./ zx cv bn m, ./ zx cv bn m, ./ zx", "cv bn m, ./ zx cv bn m, ./ zx cv bn m,", "zxc vbn m,. /zx cvb nm, ./z xcv bnm", ",./ zxc vbn m,. /zx cvb nm, ./z xcv", "bnm ,./ zxc vbn m,. /zx cvb nm, ./z", "zxcv bnm, ./zx cvbn m,./ zxcv bnm,", "./zx cvbn m,./ zxcv bnm, ./zx cvbn", "m,./ zxcv bnm, ./zx cvbn m,./ zxcv", "ZZ XX CC VV BB NN MM << >> ?? ZZ XX CC", "VV BB NN MM << >> ?? ZZ XX CC VV BB NN", "MM << >> ?? ZZ XX CC VV BB NN MM << >>", "ZZZ XXX CCC VVV BBB NNN MMM <<< >>>", "??? ZZZ XXX CCC VVV BBB NNN MMM <<<", ">>> ??? ZZZ XXX CCC VVV BBB NNN MMM", "ZX CV BN M< >? ZX CV BN M< >? ZX CV BN", "M< >? ZX CV BN M< >? ZX CV BN M< >? ZX", "CV BN M< >? ZX CV BN M< >? ZX CV BN M<", "ZXC VBN M<> ?ZX CVB NM< >?Z XCV BNM", "<>? ZXC VBN M<> ?ZX CVB NM< >?Z XCV", "BNM <>? ZXC VBN M<> ?ZX CVB NM< >?Z", "ZXCV BNM< >?ZX CVBN M<>? ZXCV BNM<", ">?ZX CVBN M<>? ZXCV BNM< >?ZX CVBN", "M<>? ZXCV BNM< >?ZX CVBN M<>? ZXCV"],
                        medium: ["ZZZ zzz XXX xxx CCC ccc VVV vvv BBB", "bbb ZZZ zzz XXX xxx CCC ccc VVV vvv", "BBB bbb ZZZ zzz XXX xxx CCC ccc VVV", "Zz Xx Cc Vv Bb Zz Xx Cc Vv Bb Zz Xx Cc", "Vv Bb Zz Xx Cc Vv Bb Zz Xx Cc Vv Bb Zz", "Xx Cc Vv Bb Zz Xx Cc Vv Bb Zz Xx Cc Vv", "ZzX xCc VvB bZz XxC cVv BbZ zXx CcV", "vBb ZzX xCc VvB bZz XxC cVv BbZ zXx", "CcV vBb ZzX xCc VvB bZz XxC cVv BbZ", "ZzXx CcVv BbZz XxCc VvBb ZzXx CcVv", "BbZz XxCc VvBb ZzXx CcVv BbZz XxCc", "VvBb ZzXx CcVv BbZz XxCc VvBb ZzXx", "NNN nnn MMM mmm <<< ,,, >>> ... ???", "/// NNN nnn MMM mmm <<< ,,, >>> ...", "??? /// NNN nnn MMM mmm <<< ,,, >>>", "Nn Mm <, >. ?/ Nn Mm <, >. ?/ Nn Mm <,", ">. ?/ Nn Mm <, >. ?/ Nn Mm <, >. ?/ Nn", "Mm <, >. ?/ Nn Mm <, >. ?/ Nn Mm <, >.", "NnM m<, >.? /Nn Mm< ,>. ?/N nMm <,>", ".?/ NnM m<, >.? /Nn Mm< ,>. ?/N nMm", "<,> .?/ NnM m<, >.? /Nn Mm< ,>. ?/N", "NnMm <,>. ?/Nn Mm<, >.?/ NnMm <,>.", "?/Nn Mm<, >.?/ NnMm <,>. ?/Nn Mm<,", ">.?/ NnMm <,>. ?/Nn Mm<, >.?/ NnMm", "ZZZ zzz XXX xxx CCC ccc VVV vvv BBB", "bbb NNN nnn MMM mmm <<< ,,, >>> ...", "??? /// ZZZ zzz XXX xxx CCC ccc VVV", "Zz Xx Cc Vv Bb Nn Mm <, >. ?/ Zz Xx Cc", "Vv Bb Nn Mm <, >. ?/ Zz Xx Cc Vv Bb Nn", "Mm <, >. ?/ Zz Xx Cc Vv Bb Nn Mm <, >.", "?/ Zz Xx Cc Vv Bb Nn Mm <, >. ?/ Zz Xx", "ZzX xCc VvB bNn Mm< ,>. ?/Z zXx CcV", "vBb NnM m<, >.? /Zz XxC cVv BbN nMm", "<,> .?/ ZzX xCc VvB bNn Mm< ,>. ?/Z", "zXx CcV vBb NnM m<, >.? /Zz XxC cVv", "ZzXx CcVv BbNn Mm<, >.?/ ZzXx CcVv", "BbNn Mm<, >.?/ ZzXx CcVv BbNn Mm<,", ">.?/ ZzXx CcVv BbNn Mm<, >.?/ ZzXx", "CcVv BbNn Mm<, >.?/ ZzXx CcVv BbNn", "NNN zzz MMM xxx <<< ccc >>> vvv ???", "bbb NNN zzz MMM xxx <<< ccc >>> vvv", "??? bbb NNN zzz MMM xxx <<< ccc >>>", "Nz Mx <c >v ?b Nz Mx <c >v ?b Nz Mx <c", ">v ?b Nz Mx <c >v ?b Nz Mx <c >v ?b Nz", "Mx <c >v ?b Nz Mx <c >v ?b Nz Mx <c >v", "NzM x<c >v? bNz Mx< c>v ?bN zMx <c>", "v?b NzM x<c >v? bNz Mx< c>v ?bN zMx", "<c> v?b NzM x<c >v? bNz Mx< c>v ?bN", "NzMx <c>v ?bNz Mx<c >v?b NzMx <c>v", "?bNz Mx<c >v?b NzMx <c>v ?bNz Mx<c", ">v?b NzMx <c>v ?bNz Mx<c >v?b NzMx", "ZZZ nnn XXX mmm CCC ,,, VVV ... BBB", "/// ZZZ nnn XXX mmm CCC ,,, VVV ...", "BBB /// ZZZ nnn XXX mmm CCC ,,, VVV", "Zn Xm C, V. B/ Zn Xm C, V. B/ Zn Xm C,", "V. B/ Zn Xm C, V. B/ Zn Xm C, V. B/ Zn", "Xm C, V. B/ Zn Xm C, V. B/ Zn Xm C, V.", "ZnX mC, V.B /Zn XmC ,V. B/Z nXm C,V", ".B/ ZnX mC, V.B /Zn XmC ,V. B/Z nXm", "C,V .B/ ZnX mC, V.B /Zn XmC ,V. B/Z", "ZnXm C,V. B/Zn XmC, V.B/ ZnXm C,V.", "B/Zn XmC, V.B/ ZnXm C,V. B/Zn XmC,", "V.B/ ZnXm C,V. B/Zn XmC, V.B/ ZnXm"],
                        hard: [">B >B c ? c? bNbn ? c ?v Bnc C Cbx ? ?v", "n/ C bx z? x? x/ v// x< /, C z? c /x/ /<", "vC c?, ? Xvc v/ c? x? /< b/ xn b? ? z? n", "z? B v// C . x< , x// /, zx v// /. x? v//", "/x/ C nx/ c v/ nx/ ?v x/ v// c?n >B Xvc", "zx bx bNbn zx ? /, ? vC x/ vC x< xn >B vC", "bn v// bx ? C bNbn n Xvc /< >B xn /x/ .", "c?n vC C? Xvc / bNbn / x< /, Bnc v/ Xvc", "c?n /< x/ x// z? v// Cbx x// Bnc nx/ C Cbx", "c?n ? v/ >B c? bx n z? , xn ? Xvc /< c?n"]
                    },
                    allKeys: {
                        easy: ["Polar Lights are caused by Earth's magnetic field.", "Northern Lights are called Aurora Borealis.", "Southern lights are called Aurora Australis.", "Eruption of  Mount Vesuvius destroyed Pompeii city.", "The moon is tidally locked to Earth.", "On Venus, the Sun rises in the west and sets in east.", "Air travel is the safest form of transportation.", "The Mariana Trench is the deepest location on Earth. ", "5 Oceans: Antarctic, Arctic, Atlantic, Indian, and Pacific.", "The Antarctic ocean is also called the Southern Ocean.", "How do we receive voice in radio & videos in TV?", "The UK: England, Wales, Scotland, & Northern Ireland", "Old names: 1) Iraq \u2013 Mesopotamia, 2) Iran \u2013 Persia", "Old names: 3) Myanmar \u2013 Burma, 4) Japan \u2013 Nippon", "Old names: 5) Sri Lanka \u2013 Ceylon, 6) Thailand \u2013 Siam", "Shinkansen is the first bullet train ever built", "Shinkansen could reach speed of 210kmph", "Bell X-1 is the first aircraft to break sound barrier.", "Octopuses have total of 3 hearts, and 9 brains.", "Famous composers: Mozart, Beethoven, Bach", "Can mystery of Bermuda Triangle be solved?", 'Chris Messina initiated the "#hashtag culture".', "The UK left EU after 47 years of membership.", "Alaska gets 1 to ~2 months of darkness a year.", "Voyager 1 is the Earth\u2019s farthest spacecraft.", "The color of sky is due to Earth\u2019s atmosphere.", "Achromatosia is rare form of colorblindness.", "As of 02/01/21, Covid19 claimed 1,842,967 lives", "George Beauchamp invented electric guitar in 1932", "Cosmonaut Yuri Gagarin is first man to go to Space.", "An electric sports car by Tesla company is in Space", "Spanish National anthem has no lyrics.", "Papua New Guinea has 832 living languages.", "Chinese Dynasties: Xia, Shang, Zhou, Qin, Han..", "Chinese Dynasties: Sui, Tang, Song, Yuan, Ming", "Saudi Arabia, Oman, Brunei have Absolute Monarchy", "Eswatini, Vatican City & UAE also has Absolute Monarchy.", "Nepal\u2019s Monarchy dissolved in 2008 A.D.", '"C\'est la vie" means "it\'s life"', '"Veni, Vidi, Vici" - "I came, I saw, I conquered"', "How does your radio work?", "Curiosity killed the cat.", "When in Rome, do as the Romans do", '"DO or DO NOT, there is no try" - Yoda', "You killed my father. Prepare to die!", "Nothing shocks me \u2013 I'm a scientist.", "Not all those who wander are lost!", "Yet hope remains while the company is true.", "Often hope is born when all is forlorn.", "Courage is found in unlikely places. ", "I am no bird; and no net ensnares me.", "Procrastination is the thief of time. \u2013 Dickens", "Nothing more deceptive than an obvious fact.", "Crime is common. Logic is rare.", "'Tis mistake to confound strangeness with mystery", "The area of Nepal is 1,47,516 square kilometer.", "The height of Mt. Everest is 8848.86 meters.", "Nepal is a developing country.", "The GDP of Nepal is $20.88 billion.", "54% of the GDP comes from services. ", "Rice and wheat are the chief crops of Nepal.", "Kumari is the only living goddess.", "Tilicho is 4,800 meters above sea level.", "Sagarmatha translates to goddess of the sky.", "Nepali is the official language of Nepal.", "Over 80 ethnic groups reside in Nepal.", "Tourism is a huge industry for Nepal."],
                        medium: ["Polar Lights are caused by Earth's magnetic field.", "Northern Lights are called Aurora Borealis.", "Southern lights are called Aurora Australis.", "Eruption of  Mount Vesuvius destroyed Pompeii city.", "The moon is tidally locked to Earth.", "On Venus, the Sun rises in the west and sets in east.", "Air travel is the safest form of transportation.", "The Mariana Trench is the deepest location on Earth. ", "5 Oceans: Antarctic, Arctic, Atlantic, Indian, and Pacific.", "The Antarctic ocean is also called the Southern Ocean.", "How do we receive voice in radio & videos in TV?", "The UK: England, Wales, Scotland, & Northern Ireland", "Old names: 1) Iraq \u2013 Mesopotamia, 2) Iran \u2013 Persia", "Old names: 3) Myanmar \u2013 Burma, 4) Japan \u2013 Nippon", "Old names: 5) Sri Lanka \u2013 Ceylon, 6) Thailand \u2013 Siam", "Shinkansen is the first bullet train ever built", "Shinkansen could reach speed of 210kmph", "Bell X-1 is the first aircraft to break sound barrier.", "Octopuses have total of 3 hearts, and 9 brains.", "Famous composers: Mozart, Beethoven, Bach", "Can mystery of Bermuda Triangle be solved?", 'Chris Messina initiated the "#hashtag culture".', "The UK left EU after 47 years of membership.", "Alaska gets 1 to ~2 months of darkness a year.", "Voyager 1 is the Earth\u2019s farthest spacecraft.", "The color of sky is due to Earth\u2019s atmosphere.", "Achromatosia is rare form of colorblindness.", "As of 02/01/21, Covid19 claimed 1,842,967 lives", "George Beauchamp invented electric guitar in 1932", "Cosmonaut Yuri Gagarin is first man to go to Space.", "An electric sports car by Tesla company is in Space", "Spanish National anthem has no lyrics.", "Papua New Guinea has 832 living languages.", "Chinese Dynasties: Xia, Shang, Zhou, Qin, Han..", "Chinese Dynasties: Sui, Tang, Song, Yuan, Ming", "Saudi Arabia, Oman, Brunei have Absolute Monarchy", "Eswatini, Vatican City & UAE also has Absolute Monarchy.", "Nepal\u2019s Monarchy dissolved in 2008 A.D.", '"C\'est la vie" means "it\'s life"', '"Veni, Vidi, Vici" - "I came, I saw, I conquered"', "How does your radio work?", "Curiosity killed the cat.", "When in Rome, do as the Romans do", '"DO or DO NOT, there is no try" - Yoda', "You killed my father. Prepare to die!", "Nothing shocks me \u2013 I'm a scientist.", "Not all those who wander are lost!", "Yet hope remains while the company is true.", "Often hope is born when all is forlorn.", "Courage is found in unlikely places. ", "I am no bird; and no net ensnares me.", "Procrastination is the thief of time. \u2013 Dickens", "Nothing more deceptive than an obvious fact.", "Crime is common. Logic is rare.", "'Tis mistake to confound strangeness with mystery", "The area of Nepal is 1,47,516 square kilometer.", "The height of Mt. Everest is 8848.86 meters.", "Nepal is a developing country.", "The GDP of Nepal is $20.88 billion.", "54% of the GDP comes from services. ", "Rice and wheat are the chief crops of Nepal.", "Kumari is the only living goddess.", "Tilicho is 4,800 meters above sea level.", "Sagarmatha translates to goddess of the sky.", "Nepali is the official language of Nepal.", "Over 80 ethnic groups reside in Nepal.", "Tourism is a huge industry for Nepal."],
                        hard: ["Polar Lights are caused by Earth's magnetic field.", "Northern Lights are called Aurora Borealis.", "Southern lights are called Aurora Australis.", "Eruption of  Mount Vesuvius destroyed Pompeii city.", "The moon is tidally locked to Earth.", "On Venus, the Sun rises in the west and sets in east.", "Air travel is the safest form of transportation.", "The Mariana Trench is the deepest location on Earth. ", "5 Oceans: Antarctic, Arctic, Atlantic, Indian, and Pacific.", "The Antarctic ocean is also called the Southern Ocean.", "How do we receive voice in radio & videos in TV?", "The UK: England, Wales, Scotland, & Northern Ireland", "Old names: 1) Iraq \u2013 Mesopotamia, 2) Iran \u2013 Persia", "Old names: 3) Myanmar \u2013 Burma, 4) Japan \u2013 Nippon", "Old names: 5) Sri Lanka \u2013 Ceylon, 6) Thailand \u2013 Siam", "Shinkansen is the first bullet train ever built", "Shinkansen could reach speed of 210kmph", "Bell X-1 is the first aircraft to break sound barrier.", "Octopuses have total of 3 hearts, and 9 brains.", "Famous composers: Mozart, Beethoven, Bach", "Can mystery of Bermuda Triangle be solved?", 'Chris Messina initiated the "#hashtag culture".', "The UK left EU after 47 years of membership.", "Alaska gets 1 to ~2 months of darkness a year.", "Voyager 1 is the Earth\u2019s farthest spacecraft.", "The color of sky is due to Earth\u2019s atmosphere.", "Achromatosia is rare form of colorblindness.", "As of 02/01/21, Covid19 claimed 1,842,967 lives", "George Beauchamp invented electric guitar in 1932", "Cosmonaut Yuri Gagarin is first man to go to Space.", "An electric sports car by Tesla company is in Space", "Spanish National anthem has no lyrics.", "Papua New Guinea has 832 living languages.", "Chinese Dynasties: Xia, Shang, Zhou, Qin, Han..", "Chinese Dynasties: Sui, Tang, Song, Yuan, Ming", "Saudi Arabia, Oman, Brunei have Absolute Monarchy", "Eswatini, Vatican City & UAE also has Absolute Monarchy.", "Nepal\u2019s Monarchy dissolved in 2008 A.D.", '"C\'est la vie" means "it\'s life"', '"Veni, Vidi, Vici" - "I came, I saw, I conquered"', "How does your radio work?", "Curiosity killed the cat.", "When in Rome, do as the Romans do", '"DO or DO NOT, there is no try" - Yoda', "You killed my father. Prepare to die!", "Nothing shocks me \u2013 I'm a scientist.", "Not all those who wander are lost!", "Yet hope remains while the company is true.", "Often hope is born when all is forlorn.", "Courage is found in unlikely places. ", "I am no bird; and no net ensnares me.", "Procrastination is the thief of time. \u2013 Dickens", "Nothing more deceptive than an obvious fact.", "Crime is common. Logic is rare.", "'Tis mistake to confound strangeness with mystery", "The area of Nepal is 1,47,516 square kilometer.", "The height of Mt. Everest is 8848.86 meters.", "Nepal is a developing country.", "The GDP of Nepal is $20.88 billion.", "54% of the GDP comes from services. ", "Rice and wheat are the chief crops of Nepal.", "Kumari is the only living goddess.", "Tilicho is 4,800 meters above sea level.", "Sagarmatha translates to goddess of the sky.", "Nepali is the official language of Nepal.", "Over 80 ethnic groups reside in Nepal.", "Tourism is a huge industry for Nepal."]
                    }
                }
            },
            O = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L;
                return e
            },
            w = {
                scene: "classic",
                language: "traditional",
                difficulty: "easy",
                keyRange: "midRow",
                activeUser: ""
            },
            S = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "SWITCH_TO_CLASSIC_GAME":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            scene: "classic"
                        });
                    case "SWITCH_TO_RAMAYAN_GAME":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            scene: "ramayan"
                        });
                    case "CHANGE_LANGUAGE":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            language: t.language
                        });
                    case "CHANGE_KEY_RANGE":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            keyRange: t.keyRange
                        });
                    case "CHANGE_DIFFICULTY_LEVEL":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            difficulty: t.difficultyLevel
                        });
                    case "SWITCH_TO_CREDIT_PAGE":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            scene: "credits"
                        });
                    case "SWITCH_TO_ABOUT_PAGE":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            scene: "about"
                        });
                    case "SWITCH_TO_SCHOOLS":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            scene: "schools"
                        });
                    case "SET_ACTIVE_USER":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            activeUser: t.userID
                        });
                    default:
                        return e
                }
            },
            j = {
                currentSetIndex: 0,
                challengeStringArchive: "",
                userTypedStringArchive: "",
                totalTypedChar: 0,
                totalCorrectChar: 0,
                timeSpent: 0
            },
            A = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "ARCHIVE_CHALLENGE_STRINGS":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            challengeStringArchive: e.challengeStringArchive + t.challengeString,
                            userTypedStringArchive: e.userTypedStringArchive + t.userTypedString,
                            totalTypedChar: e.totalTypedChar + t.totalTypedChar,
                            totalCorrectChar: e.totalCorrectChar + t.totalCorrectChar
                        });
                    case "TIME_SPENT_ON_CLASSIC_TUTOR":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            timeSpent: t.timeSpent
                        });
                    case "CHANGE_CHALLENGE_STRINGS":
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            currentSetIndex: t.newIndex
                        });
                    case m.a:
                        return Object(v.a)(Object(v.a)({}, e), {}, {
                            currentSetIndex: 0
                        });
                    default:
                        return e
                }
            },
            E = a(21),
            F = {},
            G = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "ADD_NEW_USER":
                        return Object(v.a)(Object(v.a)({}, e), {}, Object(E.a)({}, t.userID, {
                            name: t.user
                        }));
                    case "UPDATE_USER_DATA":
                        return Object(v.a)(Object(v.a)({}, e), {}, Object(E.a)({}, t.userID, Object(v.a)(Object(v.a)({}, e[t.userID]), t.data)));
                    default:
                        return e
                }
            },
            T = Object(y.c)({
                SiteState: S,
                KeyLogger: C,
                OneLiners: O,
                ClassicTutor: A,
                Users: G
            }),
            D = a(4),
            z = a(5),
            K = a(7),
            N = a(6),
            M = a(16),
            R = a(9),
            I = a(3),
            H = a(23),
            U = a(15),
            q = a(18),
            _ = a.n(q),
            V = a(35),
            J = a.n(V),
            Z = a(36),
            X = a.n(Z),
            Y = a(37),
            B = a.n(Y),
            W = a(38),
            P = a.n(W),
            Q = a(27),
            $ = a.n(Q),
            ee = a(39),
            te = a.n(ee),
            ae = a(40),
            ne = a.n(ae),
            fe = a(41),
            re = a.n(fe),
            se = a(42),
            oe = a.n(se),
            ie = a(43),
            le = a.n(ie),
            ce = a(44),
            de = a.n(ce),
            he = {
                midRow: {
                    easy: [";f;", "a:g'", "sfddf", "k'hf", "lghL", ";Dd", ';s"F', "dfks", "dHhf", "l;Sg", "gfgf", "sfh'", "dfF", "hggL", "dg", ";'Gg", "lsgsL", "gS;f", "aGg", "kfg", "sDkgL", "dfgj", "hdfgf", ";;fgf", "sfdgf", "sd", "sld", "glhs", "a;'F", "hfGg", "sfg'g", "lg", ";f;'", ";fgf", "lakgf", "gfd", "lhlg;", "hdfg", "df;'", "lg:sg", "hLjg", "dgg", "sfd", "ha", ";fa'g", ";Lk", "lsGg", "kjg", "l;dL", "hldg", "lgGhf", "a;", "aGhL", "hfddf", "sfsf", ";dfg", "afFsL", "kl;gf", ";AhL", ";'g", "lkHhf", "klg", "jf;gf", 'sfg"g', "gL", "ls;fg", ";fdfg", "asd", "sk", "lasf;", "hLk", "gd'gf", "h'g", "df:s", "hDdf", "dfdf", "dDdL", "s'GgL", "sdL", ";'gsf", "afaf", "hfd", ";kgf", "a;df", "lakgL", "h'gL", "skL", "ljkgf", "laDa", "lhjg", "l;df", "s'lGg", "l;d", "hGd", "h'd", "dgsf", "afFls", "hgd", "hfg'", ";Ddfg", "gfs", "ljsf;", "af;L", "dgdf", "kSsf", "af;", "h;", "hgf", "sfF", "hfg", "sfg", "lagf", ":jfa", "kf;", "afgL", "hfF", "lsg", "s'g", "afa'", "gfgL", "lhDdf", "dflg;", ";dfh", "a:g", "s;d", "jf", ";fa", "kfgL", "dfGg'"],
                    medium: [";f;", "a:g'", ";dfhdf", "sfddf", "k'hf", "lghL", ";Dd", ';s"F', "dfks", "dHhf", "l;Sg", "gfgf", "sfh'", "dfF", "hggL", "dg", ";lGhjgL", ";'Gg", "lsgsL", "gS;f", "aGg", "kfg", "sDkgL", "dfgj", "hdfgf", ";;fgf", "sfdgf", "sd", "sld", "glhs", "a;'F", "hfGg", "sfg'g", "lg", ";f;'", ";fgf", "lakgf", "gfd", "lhlg;", "hdfg", "df;'", "lg:sg", "hLjg", "dgg", "sfd", "ha", ";fa'g", ";Lk", "lsGg", "kjg", "l;dL", "hldg", "lgGhf", "a;", "aGhL", "hfddf", "sfsf", "sfkLdf", ";dfg", "afFsL", "kl;gf", ";AhL", ";'g", "lkHhf", "klg", "jf;gf", 'sfg"g', "gL", "ls;fg", ";fdfg", "asd", "sk", "lasf;", "hLk", "gd'gf", "h'g", "df:s", "hDdf", "dfdf", "dDdL", "hLjgsf", ";kgLdf", "lgl:sg", "s'GgL", "sdL", ";'gsf", "afaf", "hfd", ";kgf", "a;df", "lakgL", "h'gL", ";fGgfgL", "skL", "ljkgf", "laDa", "lhjg", "l;df", "s'lGg", "l;d", "hGd", ";fdflhs", "h'd", "dgsf", "afFls", ";'g;fg", "hgd", "hfg'", ";Ddfg", "gfs", "ljsf;", "af;L", "dgdf", "kSsf", "af;", "hdfgfdf", "h;", "hLjgdf", "hgf", ";dflhs", "sfF", "hfg", "sfg", "lagf", ":jfa", ";';f;g", "d':sfg", "kf;", "afgL", "hfF", "lsg", "s'g", "afa'", "gfgL", "lhDdf", "lsl;dsf", "dflg;", ";dfh", "a:g", "s;d", "jf", ";fa", "kfgL", "dfGg'"],
                    hard: [";dfhdf", ";lGhjgL", "sfkLdf", "hLjgsf", ";kgLdf", "lgl:sg", ";fGgfgL", ";fdflhs", ";'g;fg", "hdfgfdf", "hLjgdf", ";dflhs", ";';f;g", "d':sfg", "s'gfsfgL", "lsl;dsf"]
                },
                topRow: {
                    easy: ["eP", "pe{", "e[r", "uo]", "pO", "o}", "o]", "To", "w}o{", "t]O{", "oq", "t}", "eQt", "ot}", "pe", "P]", "tq", "P", "t]O", "[P", "eIo", "u|o", "ut]", "r]t", "yu\\", "y]q", "To}", "t", "tYo", "eu{", "uy]", "pu|e", "uO", "t]t}", "e]p", "eO", "u[", "pRr", "e|o", "tt}", "e}", "r}t", "Tot}", "r}", "pt}", "p", "eO{", "uP", "r}t]"],
                    medium: ["eP", "pe{", "e[r", "uo]", "pO", "o}", "o]", "To", "w}o{", "t]O{", "oq", "t}", "eQt", "ot}", "pe", "P]", "tq", "P", "t]O", "[P", "eIo", "u|o", "ut]", "r]t", "yu\\", "y]q", "To}", "t", "tYo", "eu{", "uy]", "pu|e", "uO", "t]t}", "e]p", "eO", "u[", "pRr", "e|o", "tt}", "e}", "r}t", "Tot}", "r}", "pt}", "p", "eO{", "uP", "r}t]"],
                    hard: ["ePo}", "pe{eP", "e[ruo]", "uo]pe{", "pOo}", "o}ePo}", "o]o}To", "TopOo}", "w}o{o]", "t]O{To"]
                },
                lowRow: {
                    easy: ["zx", "vC", "B", "x//", "/.", "Bnc", "nx/", "n/", "bNbn", "c?n", "v//", "c", "c?,", ">B", ".", "x<", ",", "/<", "xn", "z?", "v/", "b?", "b/", "bn", "Cbx", "/", "c?", "x/", "n", "Xvc", "C?", "?v", "bx", "x?", "/x/,", "/,", "C", "?", "/x/"],
                    medium: ["zx", "vC", "B", "x//", "/.", "Bnc", "nx/", "n/", "bNbn", "c?n", "v//", "c", "c?,", ">B", ".", "x<", ",", "/<", "xn", "z?", "v/", "b?", "b/", "bn", "Cbx", "/", "c?", "x/", "n", "Xvc", "C?", "?v", "bx", "x?", "/x/,", "/,", "C", "?", "/x/"],
                    hard: ["zxvC/", "Bx//", "/.Bnc", "nx/n/", "bNbn", "c?n", "v//c", "c?,>B", ".x<x", "/<xn", "z?v/", "b?b/", "bnCbx", "/c?x/", "nXvc", "C??v", "bxx?", "/x//,", "C?/x/"]
                },
                numRow: {
                    easy: ["&", "5`+", "@", "8`", "@)!&", "$#)", "366", "31=", "%))", "]]]2=", "-@&!_", "6~5", "106", "86", "==@", "===@", "3!@5", "9+", "92", "88+", "56`", "-_", "@)#)", "&%", "^)!", "54", "5", "!)@$%", "56", "75", "@)&&", "~~", "681", "1~`", "@$@%", "601"],
                    medium: ["&", "5`+", "@", "8`", "@)!&", "$#)", "366", "31=", "%))", "]]]2=", "-@&!_", "6~5", "106", "86", "==@", "===@", "3!@5", "9+", "92", "88+", "56`", "-_", "@)#)", "&%", "^)!", "54", "5", "!)@$%", "56", "75", "@)&&", "~~", "681", "1~`", "@$@%", "601"],
                    hard: ["6~5106", "86106", "86-@&!_", "923!@5", "56`56`"]
                },
                allKeys: {
                    easy: ["ag]", "leq", ";'o{", "uLtsf", "aUof]", "dudu", ";fly", "eg]", "Hofg", "a;Gt", "s]", "ofqL", "ef]", "wtL{", "dfof", "ltdL", "uof]", "[of]", "hLt", ";]js", "ufpF", "[ha", ";a}", "eg{", "afwf", 'h"g}', "atf;", "ufO{", "t}klg", "lar}", "k|eft", 'w"g', "kfpdf", "sfFw", "afFrL", ";asf]", "PsfGt", "[lrQ", "yf]kf", "t];}", "hfg]", "[pgL", "tL", "dfq", "lsGt'", "otf", "sf]", "h]", "lk|tL", "dfu", 'k"j{', "lar", "o:tf]", "ef]s", "ug]{", ";fy}", "ta", "p;}", "dfUg", "d:t", "h:tf]", "kljq", "efiff", "g}", "afrf", "Ps", "e'O{", ";f]r]", "l;t}", "gk'u]", "a;Gt", "dfq}", ";hfO{", "afFr]", "ePsf]", "df]tL", "sljtf", "prfO{", "dfg}{", "wtL{", "ljkgf", "Joyf", "Ps}", "ef]hg", "klaq", ";w}", "aofg", "eGg", "y'Fuf", "a:of]", "elg", "ddtf", "lgsf]", "kg{'", "p:t}", "lyP", "plt", "t;{g]", "h:tf", ";]jf", ";fy", "aflwP", "kft", "s'g}", "hlt", "lgwf{", "ePsL", "[oL", "hfpF", "uGg", "d}", "Psgf;", ";o", "pgL", "ltd|f", "stf", "syf", "gfgL", "agf];", "uLt", ";'Go", "lrgf]", "dGq", ";Eotf", "k'hf", "Aoy}{", "d'lt{", "l:gUw", "uf:g]", ";fgf]", "/Dg", 'km"n', ";f/L", 'd"n', "cfF;'", ":j/", "cfFvf", "snd", "gh/", "sxfF", "cfsfz", "cfnL", "?Fbf", ";'Gb/", "cfsfz", "lz/df", ":jf;", "knx?", "xfjf", "hxfF", "afgL", "xfF;L", "/x'F", "dvdnL", "afbn", "xhf/", "xf/", "lkkn", "gbLsf", "lasNk", "snf", "knkn", "lx/f", "dfnf", ";lxb", "ldng", "gh/", "hnk", "v'zL", ";fd'", "dxn", "sxfgL", "d'n's", "v';L", "abgfd", "cfFz'", "cfF;'", "afbn'", "d'xfg", "lxdfn", ";'Gbf", ";f;", "kfvf", "kf/L", "sfd", "axf/", "x/kn", "lgzfg", "lzv/", "sNkgf", "dlGb/", "cfdf", ">bf", "vl;", "hfnL", "sfG5L", "sfG5f", "lk8f", "6f9f", "l5gdf", "1fg", "ld7f", "36f", "l6kL", "5g", "df5L", ";lsG5", "d'6'", "5fk", "l5g", "lk8f", "a'4", "3'Dg", "8fF8f", "ljs6", "a'4", "8'Ag", "af9L'", "l6k", "5'G5", "38f", "l9sL", ";S5", ";f5L", "3fd", ";8s", "sfF8f", "x]/", "u/", "b]p", "cy{", "rn]", "?b}", "t/", "x}", "b]z", "v]t}", "ev{/}", "b[io", "b]x", "x]/", "?em]/", "em}", "b]Vy]", "b]pm", "x]", "v}", "v]Nb}", "b]z}", "u/]/", "x]/", "eP/]", "em}", "/ut", "b]pm", "w]/}", "eP/}", "cNem]", "cem}", ">]o", "t/]/", "eb}{", "cv08", "C#", "c6n", "3/", "Pp6}", "uP5", "e]6", "d]/f]", "ef]nL", "cIf/", "rNg", "xf;f]", "clxn]", "zfGt", "rfxgf", "afbn", "lk/tL", "cGTo", "k/]nL", "d'Qm", "tf/f", "rNof]", "wf/f", "crDd}", ";fu/", "ltxf/", "tl:a/", ";'g", "rfFbL", "cs}{", "t:jL/", "b}j", "em/L", "h'g", "rqmdf", "lz/d}", "b}a", "em}F", "efUo", "lgnf]", "cfugL", "/fv]/", "s'bf{", "psfnL", "t/fO{", "bf]dg", "b'j}", "uxgf", "tl:j/", "elQm", "uf]nL", "cw]/L", "k/]nL", "b}nf]", "k|xf/", "If]q,", "dnfO{", "ef/L", ";fFem", "lunf;", "xfF;L", "/ftf]", ";'o{", "cfTdf", "cGofo", "Ct'", "tfndf", "kfOnf", "uf]?", "[nf}", ";fFem", "lk/tL", "v]tL", "O{Zj/", ";w}F", "lxdfn", ";'Gb/", "bz{g", "gh/n]", "u'nfj", "d'xf/", "O{Zj/", "bf]if", ";fob", "cfuf]", "vx/]", "/fd|}", "r/f", "z'e", "eGbf", "dgn]", "b]Vg", "/]zd", ";Dem]", "lvof", 'e"n', "/f]s", "rDs]", "lz/}", ";j{bf", "rfFbL", "lztn", "v]tdf", "bfO{", "lxp", "af]nL", "ToxfF", "x/]s", "Joyf", "xf];", "ag]/", "[xf]", "vf]h]", "c/af}", "d}n]", "kbf{", "lbJo", "b];", "sf]dn", "dfof", "lzt", "w'g", "dfbn", "cfwf", "vf]nf", "lrof", "dxTj", "k/]nL", "cfz}", "dw'/", "ufhn'", ";do", "x;fO{", "ofqL", "ofb", "d}bfg", "olxF", ":kz{", "xf]nf", "kfun", "kvf{n", "p8\\g", "e]6\\g", "9'+uf", "e]6'", "h]7L", "7fpF", "d'6'", "5fofF", "d]3", "w8\\sg", "3'DtL", "rf]6", "dfG5]", "hf8f]", "5g{", "ld7f]", ";+w}", ";+u", "u+uf", ";+uLt", "OR5f", "ofqL", "d;+u", "df6f]", "s7}", "5ftL", "k]6", "38L", "dfG5]", ";+ud", "af6f]", "5ftf", "5}g", "l7s}", "3fd", "u5f}{", "k|f0f", "xhf/", 'km"N5', "3/hd", "3fd", "3f/L", "kxf8", "z/0f", "5fn", "5x/f", "j/j/", "nf7L", "xfF;L", "sfF9f", ";kgf", "5l/", "7fgL", "lx+;f", "lbG5'", "ld7f", "cl3", 'km"N5', ";+;f/", "kN6", "xf8", "sxL+", "3'D5", "kmfF6", "7'nf", "hK5'", "5fgf", "8fF8f", "3fddf", "k+v", "kN6", "a:5'", "5fn", "8fnL", "rN5", "bz}+", "/}5", "/x]", "9n]/", "p7]/", "em?+", "rNb5", "t/+u", "/}5", "/x]5", "x]b{5", "[6x6x", "em5{", "xf:g]", "cfpbf", "kfp5'", "nfU5", "k'0f{", "e]6'F", "ldn]5", "a:tL", ";f5{'", "5f]/L", "cf}7L", "8'+uf", "csf{", "efU5", "3fdn]", "6'qmf", "a;]5", "cf]+7", "cfpF5", "g/x]", "9fs]", "k7fpm", "dfG5]", "kxf8", "r'D5", "/+uLg", "cf]7", ";d]6]", "a6'n]", "9Nbf]", "wtL{", "d+un", "5]Sg]", "5}g", "kms{", "5]Sg", "nfu'+", "cfp5", "em'k8", "h+unL", "lztn", "9fsf", "6f]kL", "gtf]8", "5f]8]", "pRrtf", ";+u}", "dfG5]", "5Ns]/", "Pp6f", "7'nf]", "3fpm", "k5{.", "3/sf]", "PskN6", "jf;gf", "6'qmf", "6]s]/", ";+tfg", "cfpF5", "pn{G5", "x;fp5", ";f6f]", "x]5{'", "pFbf", "uf]7", "8'+uf", ";+tfg", "pl8", "/xg]", "3fpm"],
                    medium: ["ag]", "leq", ";'o{", ";fFrf]", "uLtsf", "aUof]", "dudu", "k|s[tL", ";fly", "eg]", "Hofg", "a;Gt", "s]", "ofqL", "la;{g]", "ef]", "wtL{", "dfof", "ltdL", "k|ltIff", "uof]", "e'Osf]", "[of]", "hLt", ";]js", "ufpF", "[ha", ";a}", "eg{", "afwf", 'h"g}', "atf;", "k|ltIff", "ufO{", "t}klg", "lar}", "k|eft", 'w"g', "kfpdf", "sfFw", "afFrL", ";asf]", "PsfGt", "afr]sf]", ";kgfsf]", "[lrQ", "yf]kf", "t];}", "a;]sf]", "hfg]", "[pgL", "tL", "dfq", "lsGt'", "otf", "leh]sf", "sf]", "h]", "lk|tL", "dfu", ";fdu|L", 'k"j{', "lar", "o:tf]", "ef]s", "ug]{", ";fy}", "ta", "p;}", "dfUg", "ltd|f]", "d:t", "h:tf]", "kljq", "efiff", "g}", "k'j{sf]", "ufpFdf", "afrf", "Ps", "l;sfpg]", "k[YjLsf", "ag]sf]", "e'O{", ";f]r]", "l;t}", "gk'u]", "a;Gt", "dfq}", ";'gsf]", ";hfO{", "afFr]", "ePsf]", "df]tL", "sljtf", "prfO{", "dfg}{", "wtL{", "ljkgf", "Joyf", "Ps}", "ef]hg", "klaq", ";w}", "aofg", "eGg", "ef]Uof]", "au]sf]", "y'Fuf", "a:of]", "elg", "ddtf", "lgsf]", "kg{'", "p:t}", "lyP", "plt", "t;{g]", "h:tf", "uLtsf]", ";]jf", ";fy", "aflwP", "kft", "dfofdf", "s'g}", "hlt", "lgwf{", ";fpgdf", "ePsL", "[oL", "[ltd|}", "hfpF", "uGg", "d}", "dfofsf]", "Psgf;", ";o", "j}u'gL", "afFw]]", "pgL", "ltd|f", "stf", ";s]sf]", "syf", "gfgL", "agf];", "uLt", "Gofgf]", ";'Go", "w'sw'sL", "lrgf]", "dGq", ";Eotf", "k'hf", "Aoy}{", ";fOgf]", "d'lt{", "Hof]lt", "l:gUw", ";jf]{Rr", "uf:g]", ";fgf]", "/Dg", 'km"n', ";f/L", 'd"n', "cfF;'", ":j/", "cfFvf", "snd", 'km"nx?', "cg';f/", "gh/", "sxfF", "cfsfz", "cfnL", "ljZjf;", "?Fbf", ";'Gb/", "cfFvfdf", "cfsfz", "lxdfnsf", "lz/df", ":jf;", "knx?", "xfjf", "l;Gb'/", "hxfF", "afgL", "xfF;L", "/x'F", "lah'nL", "dvdnL", "ljZjf;,", "afbn", "xhf/", "xf/", "lkkn", "gbLsf", "lasNk", "snf", "knkn", "lx/f", "dfnf", ";lxb", "ldng", "gh/", "hnk", "v'zL", ";fd'", "dxn", 'l;Gb"/', "sxfgL", "d'n's", "lkmlnnL", "v';L", "abgfd", "cfFz'", "cfF;'", "afbn'", "kfv'/L", "v's'/L", "cGh'nL", "d'xfg", "lxdfn", ";'Gbf", ";f;", "kfvf", "kf/L", "sfd", "axf/", "x/kn", "k'hf/L", "lgzfg", "lzv/", "sNkgf", "k'l/Gg", "dlGb/", "laxfgL", "cfdf", ">bf", "vl;", "hfnL", "sfG5L", "sfG5f", "lk8f", "6f9f", "l5gdf", "1fg", "ld7f", "36f", "l6kL", "5g", "df5L", ";lsG5", "d'6'", "5fk", "l5g", "lk8f", "a'4", "3'Dg", "8fF8f", "ljs6", "a'4", "8'Ag", "af9L'", "l6k", "5'G5", "38f", "l9sL", ";S5", ";f5L", "3fd", ";8s", "sfF8f", "x]/", "u/", "b]p", "cy{", "rn]", "?b}", "t/", "x}", "b]z", "v]t}", "ev{/}", "b[io", "b]x", "x]/", "?em]/", "em}", "b]Vy]", "b]pm", "x]", "v}", "v]Nb}", "b]z}", "u/]/", "x]/", "eP/]", "em}", "/ut", "b]pm", "w]/}", "eP/}", "cNem]", "cem}", ">]o", "t/]/", "eb}{", "cv08", "C#", "c6n", "3/", "Pp6}", "uP5", "e]6", "d]/f]", 'a"Fbn]', "ef]nL", "cIf/", "rNg", "em/Lsf]", "kf}/vL", ";dfrf/", "cfzfn]", "tf/fx?", "xf;f]", ";Demgf", "clxn]", "zfGt", "pHofnf]", "rfxgf", "pHofn}", ";f}efUo", "afbn", "xfF;f]", "cWof/f]", "lk/tL", "/fd|f]", "ltd|f]", "cGTo", "k/]nL", "d'Qm", "tf/f", "[x'/Ln]", "rNof]", "wf/f", "crDd}", ";fu/", "/x]sf]", "l;/fgL", "lhGbuL", "n]sa]zL", "b'lgFof", "ltxf/", "rf}tf/L", "kfO{nf", "g]kfnL", "tl:a/", ";'g", "rfFbL", "xfF;]/", "cs}{", "t:jL/", "b}j", "em/L", "h'g", "rqmdf", "lz/d}", "b}a", "g]kfndf", "em}F", "b]p/fnL", "efUo", ";';]nL", "lgnf]", "cfugL", "h'g]nL", ";Demgf", "/fv]/", "s'bf{", "lemNs]", "psfnL", "t/fO{", "l;pbf]", "bf]dg", "b'j}", "agfpmF", "uxgf", "tl:j/", "elQm", "uf]nL", "kv]/Ldf", "O{ltxf;", "Gofgf]", "afFw]/", "cw]/L", "bfFtsf", "a}u'gL,", "k/]nL", "b}nf]", "k|xf/", "If]q,", "dnfO{", "hfn}df", "ef/L", ";fFem", "lunf;", ";Demgf", "plDnof]", "la:tf/}", "xfF;L", "/ftf]", "b'lgof", ";'o{", "ltl//L", "cfTdf", "ufxf]{", "cGofo", "Ct'", "tfndf", "kfOnf", "uf]?", "[nf}", ";fFem", "lk/tL", "lkmtf{", "v]tL", "O{Zj/", ";w}F", "klx/f]", "lxdfn", "alnof]", ";'Gb/", "/dfOnf]", "kmfOj/", "cf]/fnL", "dfofn'", "bz{g", "gh/n]", "v]tsf]", "uf]?n]", "u'nfj", "ufF;]/", "rf}tf/L", "unaGbL", "afwfx?", "d'xf/", "s'NRof]", "O{Zj/", "bf]if", ";fob", "emsf]{", 'h"g]nL', "cfuf]", "lgem{/", "la/fgf]", "cGwsf/", "vx/]", "/fd|}", "r/f", "z'e", "eGbf", "dgn]", "cGwsf/", "b]Vg", "/]zd", ";Dem]", "[uDeL/", "slnnf]", "lvof", 'e"n', "cWof/f]", "/f]s", "rDs]", "lz/}", ";j{bf", "rfFbL", "lztn", "sf]z]nL", "v]tdf", "ulx/f]", "bfO{", ";/:jtL", "lxp", "[lhGbuL", "af]nL", "ToxfF", "x/]s", "lz/sf]", "b]lvg]", "cfdfsf]", "Joyf", "k'/fgf]", "xf];", "ldngsf]", "ag]/", "[xf]", "vf]h]", "c/af}", "d}n]", "kbf{", "lbJo", "/fd|f]", "b];", "sf]dn", "dfof", "lzt", "w'g", "dfbn", "cfwf", "Gofgf]", "vf]nf", "lrof", "dxTj", "k/]nL", "cfz}", "u'/fF;", "dw'/", "k|s[lt", "sf]lknf", "a];'/]", "ufhn'", "[laxfgL", "xf]xf]", "Kof/f]", ";do", "Oltxf;", "x;fO{", "ofqL", "ofb", "d}bfg", "olxF", ":kz{", "xFl;nf]", "rf]vf]", "cfkmGt", "xf]nf", "kfun", "kvf{n", "ufpFn]", "p8\\g", "e]6\\g", "9'+uf", "e]6'", "h]7L", "7fpF", "d'6'", "5fofF", "d'6'sf]", "[8fF8f", "d]3", "w8\\sg", "p8\\of]", "3'DtL", "rf]6", "dfG5]", "hf8f]", "5g{", "ld7f]", ";+w}", ";+u", "u+uf", "l5d]sL", ";+uLt", "OR5f", "ofqL", "d;+u", "df6f]", "s7}", "5ftL", "d]l6of]", "k]6", "38L", "dfG5]", ";+ud", "af6f]", "5ftf", "5}g", "l7s}", "3fd", "u5f}{", "k|f0f", "d'6'df", "xhf/", 'km"N5', "3/hd", "3fd", "3f/L", "km'n'+", "kxf8", "z/0f", "5fn", "5x/f", "j/j/", "nf7L", "xfF;L", "sfF9f", ";kgf", "5l/", "7fgL", "lx+;f", "lbG5'", "ld7f", "cl3", 'km"N5', ";+;f/", "kN6", "xf8", "sxL+", "3'D5", "kmfF6", "7'nf", "hK5'", "5fgf", "8fF8f", "3fddf", "k+v", "kN6", "a:5'", "5fn", "8fnL", "rN5", "bz}+", "/}5", "/x]", "9n]/", "p7]/", "em?+", "rNb5", "t/+u", "/}5", "/x]5", "x]b{5", "[6x6x", "em5{", "9's9'sL", "xf:g]", "cfpbf", "3f]l6P/", "kfp5'", "nfU5", "7fpFdf", "6f]nfp", "df]lxgL", "k'0f{", "5ftLel/", "e]6'F", "ldn]5", "a:tL", "hln/x]", ";f5{'", "5f]/L", "cf}7L", "8'+uf", "csf{", "efU5", "3fdn]", "5f]/f]", "dfG5]n]", "6'qmf", "a;]5", "cf]+7", "cfpF5", "g/x]", "9fs]", "3fO{t]", "km'6fpm", "k7fpm", "dfG5]", "kxf8", "r'D5", "/+uLg", "cf]7", "cf]7df", ";d]6]", "a6'n]", "5fofF,", "9Nbf]", "wtL{", "c+ufnf]", "d+un", "5]Sg]", "5}g", "kms{", "cgf}7f]", "5]Sg", "nfu'+", "cfp5", "c+ufn'", "em'k8", "h+unL", "lztn", "9fsf", "6f]kL", "/+ufpg", "x]5f}{", "x'G5f}", "cf]7x?", "gtf]8", "kft}df", ";f6f}+", "5f]8]", "pRrtf", "lbG5f}", ";+u}", "dfG5]", "5Ns]/", "ld7f].", "Pp6f", "lhp+bf]", "7'nf]", "3fpm", "tf]8L.", "k5{.", "3/sf]", "em'6f]", "3fdnfO{", "PskN6", "g5f]8.", "rfxG5'", ";s]+y]", "rfxG5'", "jf;gf", "/f]6Ln]", "6'qmf", "6]s]/", "/xf}+nf", "l5rf]nL", ";dk{0f.", ";+tfg", "89]nf]", "8fFkm]", "cfpF5", "lb3f{o'", "pn{G5", "6f]nfO{", "x;fp5", ";f6f]", "lx8\\g]", "x]5{'", "pFbf", "uf]7", "8'+uf", "x]5f}{", ";+tfg", "pl8", "/xg]", "pl8/xg]", "3fpm", "c+ufnf]"],
                    hard: [";fFrf]", "k|s[tL", "la;{g]", "k|ltIff", "e'Osf]", "k|ltIff", "afr]sf]", ";kgfsf]", "a;]sf]", "leh]sf", ";fdu|L", "ltd|f]", "k'j{sf]", "ufpFdf", "l;sfpg]", "k[YjLsf", "ag]sf]", ";'gsf]", "ef]Uof]", "au]sf]", "la:jf;sf]", "uLtsf]", "dflg;sf]", "dfofdf", ";fpgdf", "[ltd|}", "dfofsf]", "j}u'gL", "afFw]]", ";s]sf]", "Gofgf]", "w'sw'sL", ";fOgf]", "Hof]lt", ";jf]{Rr", 'km"nx?', "cg';f/", "ljZjf;", "cfFvfdf", "lxdfnsf", "l;Gb'/", "lah'nL", "ljZjf;,", "n'sfdf/L", 'l;Gb"/', "lkmlnnL", "kfv'/L", "v's'/L", "cGh'nL", "k'hf/L", "k'l/Gg", "laxfgL", 'a"Fbn]', "em/Lsf]", "kf}/vL", ";dfrf/", "cfzfn]", "tf/fx?", ";Demgf", "pHofnf]", "pHofn}", ";f}efUo", "xfF;f]", "cWof/f]", "/fd|f]", "ltd|f]", "k'vf{sf]", "[x'/Ln]", "/x]sf]", "l;/fgL", "lhGbuL", "n]sa]zL", "b'lgFof", "rf}tf/L", "kfO{nf", "g]kfnL", "xfF;]/", "z'esfdgf", ":juf{bkL", "g]kfndf", "b]p/fnL", ";';]nL", "h'g]nL", ";Demgf", "lemNs]", "lemdlemd", "l;pbf]", "agfpmF", "kv]/Ldf", "O{ltxf;", "Gofgf]", "afFw]/", "bfFtsf", "a}u'gL,", "xl/ofnL,", "lgbf]{if", "hfn}df", "cFWof/f]", ";Demgf", "plDnof]", "la:tf/}", "b'lgof", "ltl//L", "ufxf]{", "xft]dfnf]", "lkmtf{", "klx/f]", "alnof]", "/dfOnf]", "kmfOj/", "cf]/fnL", "dfofn'", "v]tsf]", "uf]?n]", "ufF;]/", "rf}tf/L", "cFWof/f]", "unaGbL", "afwfx?", "s'NRof]", "emsf]{", 'h"g]nL', "e'n'e'n'", "ememNsf]", "lgem{/", "la/fgf]", "cGwsf/", "cGwsf/", "[uDeL/", "slnnf]", "cWof/f]", "sf]z]nL", "ulx/f]", ";/:jtL", "[lhGbuL", "lz/sf]", "b]lvg]", "cfdfsf]", "k'/fgf]", "ldngsf]", "/fd|f]", "Gofgf]", "u'/fF;", "k|s[lt", "sf]lknf", "a];'/]", "[laxfgL", "xf]xf]", "Kof/f]", "Oltxf;", "xFl;nf]", "rf]vf]", "cfkmGt", "ufpFn]", "d'6'sf]", "[8fF8f", "df6f]sf]", "p8\\of]", "l5d]sL", "d]l6of]", "d'6'df", "km'n'+", "9's9'sL", "3f]l6P/", "7fpFdf", "6f]nfp", "df]lxgL", "5ftLel/", "hln/x]", "5f]/f]", "dfG5]n]", "3fO{t]", "km'6fpm", "cf]7df", "5fofF,", "c+ufnf]", "cgf}7f]", "c+ufn'", "/+ufpg", "x]5f}{", "x'G5f}", "cf]7x?", "kft}df", ";f6f}+", "lbG5f}", "ld7f].", "lhp+bf]", "tf]8L.", "em'6f]", "8f8fnfO{", "3fdnfO{", "g5f]8.", "rfxG5'", ";s]+y]", "rfxG5'", "/f]6Ln]", "/xf}+nf", "l5rf]nL", ";dk{0f.", "89]nf]", "bf]af6f]", "8fFkm]", "lb3f{o'", "6f]nfO{", "lx8\\g]", "x]5f}{", "pl8/xg]", "c+ufnf]"]
                }
            },
            ge = "midRow";

        function ue() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = e < 100 ? "easy" : e < 200 ? "medium" : "hard",
                a = Math.floor(Math.random() * he[ge][t].length);
            return he[ge][t][a]
        }

        function pe(e) {
            ge = "midRow" === e || "topRow" === e || "lowRow" === e || "numRow" === e || "allKeys" === e ? e : "midRow"
        }
        var ye = "";

        function me(e) {
            return e.input.keyboard.addKey("LEFT")
        }

        function ke() {
            return ye
        }
        var be = 100,
            ve = 480,
            xe = 900,
            Ce = 480,
            Le = 780,
            Oe = 450,
            we = 100,
            Se = 300,
            je = 900,
            Ae = 300,
            Ee = 750,
            Fe = 20,
            Ge = 400,
            Te = 580,
            De = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e, n, f) {
                    var r;
                    return Object(D.a)(this, a), (r = t.call(this, e, n, f, "arrow::challenge")).fire = r.fire.bind(Object(I.a)(r)), r
                }
                return Object(z.a)(a, [{
                    key: "fire",
                    value: function(e, t) {
                        this.body.reset(e, t), this.setActive(!0), this.setVisible(!0), this.setVelocityX(100), this.body.allowGravity = !1
                    }
                }, {
                    key: "preUpdate",
                    value: function(e, t) {
                        Object(H.a)(Object(U.a)(a.prototype), "preUpdate", this).call(this, e, t)
                    }
                }, {
                    key: "hideArrow",
                    value: function() {
                        this.setActive(!1), this.setVisible(!1)
                    }
                }]), a
            }(_.a.Physics.Arcade.Sprite),
            ze = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e) {
                    var n;
                    return Object(D.a)(this, a), (n = t.call(this, e.physics.world, e)).createMultiple({
                        frameQuantity: 1,
                        key: "bullet::challenge",
                        active: !1,
                        visible: !1,
                        classType: De
                    }), n
                }
                return Object(z.a)(a, [{
                    key: "fireArrow",
                    value: function(e, t) {
                        var a = this.getFirstDead(!1);
                        a && a.fire(e, t)
                    }
                }]), a
            }(_.a.Physics.Arcade.Group),
            Ke = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e, n, f) {
                    var r;
                    return Object(D.a)(this, a), (r = t.call(this, e, n, f, "arrow::user")).fire = r.fire.bind(Object(I.a)(r)), r
                }
                return Object(z.a)(a, [{
                    key: "fire",
                    value: function(e, t) {
                        this.body.reset(e, t), this.setActive(!0), this.setVisible(!0), this.setVelocityX(-100), this.body.allowGravity = !1
                    }
                }, {
                    key: "preUpdate",
                    value: function(e, t) {
                        Object(H.a)(Object(U.a)(a.prototype), "preUpdate", this).call(this, e, t), this.x <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }, {
                    key: "hideArrow",
                    value: function() {
                        this.setActive(!1), this.setVisible(!1)
                    }
                }]), a
            }(_.a.Physics.Arcade.Sprite),
            Ne = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e) {
                    var n;
                    return Object(D.a)(this, a), (n = t.call(this, e.physics.world, e)).createMultiple({
                        frameQuantity: 1,
                        key: "bullet::user",
                        active: !1,
                        visible: !1,
                        classType: Ke
                    }), n
                }
                return Object(z.a)(a, [{
                    key: "fireArrow",
                    value: function(e, t) {
                        var a = this.getFirstDead(!1);
                        a && a.fire(e, t)
                    }
                }]), a
            }(_.a.Physics.Arcade.Group),
            Me = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a() {
                    var e;
                    return Object(D.a)(this, a), (e = t.call(this)).ravanPlayer = null, e.ramPlayer = null, e.cursors = null, e.challengeArrows = null, e.userArrows = null, e.targetText = null, e.userText = null, e.challengeArrowFired = !1, e.userArrowFired = !1, e.particle = null, e.emitterRavan = null, e.score = 0, e.scoreText = null, e.explosions = null, e.newArrowAssets = "IHR5cGVzaGFsYS5zaHJlc3RoYXN1c2hpbC5jb20ubnAg", e.oldArrowAssets = "Y29waW5nIG1hdGVyaWFsIHdpdGhvdXQgYXJiaXRyYXRpb24gaXMgcHVuaXNoYWJsZSBieSBsYXcg", e.fireNewArrow = e.fireNewArrow.bind(Object(I.a)(e)), e.arrowGotHit = e.arrowGotHit.bind(Object(I.a)(e)), e.fireSound = null, e.blastSound = null, e.arrowHitSound = null, e
                }
                return Object(z.a)(a, [{
                    key: "preload",
                    value: function() {
                        this.load.image("background", J.a), this.load.image("ground", X.a), this.load.image("arrow::challenge", te.a), this.load.image("arrow::user", ne.a), this.load.spritesheet("ravan", B.a, {
                            frameWidth: 64,
                            frameHeight: 64
                        }), this.load.spritesheet("ram", P.a, {
                            frameWidth: 64,
                            frameHeight: 64
                        }), this.load.image("ravanFire", $.a), this.load.image("ramFire", $.a), this.load.spritesheet("explosion", re.a, {
                            frameWidth: 128,
                            frameHeight: 128
                        }), this.load.audio("fire", [oe.a], {
                            instances: 2
                        }), this.load.audio("blast", [le.a], {
                            instances: 2
                        }), this.load.audio("arrowHit", [de.a], {
                            instances: 2
                        })
                    }
                }, {
                    key: "create",
                    value: function() {
                        var e, t = atob(this.newArrowAssets);
                        this.add.image(512, 300, "background").setScale(2.6), this.cursors = me(this), (e = this).input.keyboard.on("keydown", (function(e) {
                            e.stopImmediatePropagation(), e.stopPropagation();
                            var t = e.key;
                            e.preventDefault(), "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[{}]\\|'\";:/?.>,<`1234567890-=+_)(*&^%$#@!~".includes(t) ? ye += t : "Backspace" === t && (ye = ye.slice(0, -1))
                        })), e.input.keyboard.on("keyup", (function(e) {})), this.createActors(), this.createTexts(), this.particlesRavan = this.add.particles("ravanFire"), this.emitterRavan = this.particlesRavan.createEmitter({
                            speed: 10,
                            scale: {
                                start: 1,
                                end: 0
                            },
                            blendMode: "ADD"
                        }), this.emitterRavan.setVisible(!1), this.newArrow = this.add.text(Ge, Te, t), this.particlesRam = this.add.particles("ramFire"), this.emitterRam = this.particlesRam.createEmitter({
                            speed: 10,
                            scale: {
                                start: 1,
                                end: 0
                            },
                            blendMode: "ADD"
                        }), this.emitterRam.setVisible(!1), this.scoreText = this.add.text(Ee, Fe, "Score: 0", {
                            fontSize: "32px",
                            fill: "#000"
                        }), this.anims.create({
                            key: "explosion::anim",
                            frames: this.anims.generateFrameNumbers("explosion", {
                                start: 0,
                                end: 15
                            }),
                            frameRate: 10,
                            repeat: 0
                        }), this.fireSound = this.sound.add("fire", {
                            loop: !1
                        }), this.blastSound = this.sound.add("blast", {
                            loop: !1
                        }), this.arrowHitSound = this.sound.add("arrowHit", {
                            loop: !1
                        })
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        Object(H.a)(Object(U.a)(a.prototype), "update", this).call(this, e, t), this.userArrowFired || this.userText.setText(ke()), this.challengeArrowFired || setTimeout(this.fireNewArrow, 1e3), ke() === this.targetText._text && (this.userArrowFired || this.userTypedCorrectly()), this.userArrowFired && (this.userText.x = this.userArrows.getFirstAlive().x - 35, this.userText.y = this.userArrows.getFirstAlive().y - 40, this.emitterRam.startFollow(this.userArrows.getFirstAlive())), this.challengeArrows.getFirstAlive() && (this.targetText.setActive(!0), this.targetText.setVisible(!0), this.targetText.x = this.challengeArrows.getFirstAlive().x - 10, this.targetText.y = this.challengeArrows.getFirstAlive().y - 40), this.emitterRavan.startFollow(this.challengeArrows.getFirstAlive())
                    }
                }, {
                    key: "fireNewArrow",
                    value: function() {
                        this.challengeArrowFired || (this.challengeArrowFired = !0, this.ravanPlayer.anims && this.ravanPlayer.anims.play("ravan::shoot", !0), this.challengeArrows.fireArrow(be, ve), this.targetText.setText(ue(this.score)), this.emitterRavan.setVisible(!0), this.emitterRavan.startFollow(this.challengeArrows.getFirstAlive()), this.fireSound.isPlaying || this.fireSound.play({
                            loop: !1,
                            volume: .1
                        }), this.updateLanguage())
                    }
                }, {
                    key: "userTypedCorrectly",
                    value: function() {
                        this.userArrowFired || (this.userArrowFired = !0, this.ramPlayer.anims.play("ram::shoot", !0), this.userArrows.fireArrow(xe, Ce), this.emitterRam.setVisible(!0), this.emitterRam.startFollow(this.userArrows.getFirstAlive()))
                    }
                }, {
                    key: "arrowGotHit",
                    value: function(e, t) {
                        this.challengeArrowFired && (this.challengeArrowFired = !1, this.arrowHitSound.play({
                            loop: !1,
                            volume: 1
                        }), this.ramPlayer.anims.play("ram::hurt", !0), t.hideArrow()), this.afterFightSettled()
                    }
                }, {
                    key: "arrowsCollided",
                    value: function(e, t) {
                        var a = this;
                        this.userArrowFired && (this.score += 10, this.scoreText.setText("Score: " + this.score), this.explosions = this.add.sprite(e.body.x + e.body.width, e.body.y + e.body.halfHeight, "explosion", 15), this.explosions.anims.play("explosion::anim", !0), this.explosions.on("animationcomplete", (function() {
                            a.explosions.destroy()
                        }), this), this.blastSound.play()), this.challengeArrowFired = !1, this.userArrowFired = !1, e.hideArrow(), t.hideArrow(), t.body.reset(0, 0), this.afterFightSettled()
                    }
                }, {
                    key: "afterFightSettled",
                    value: function() {
                        this.challengeArrowFired = !1, this.userArrowFired = !1, this.userText.x = Le, this.userText.y = Oe, this.hideTexts(), ye = "", setTimeout(this.fireNewArrow, 3e3), this.add.text(410, 580, atob("dHlwZXNoYWxhLnNocmVzdGhhc3VzaGlsLmNvbS5ucCAg"))
                    }
                }, {
                    key: "ramAnimationComplete",
                    value: function(e, t) {
                        this.ramPlayer.anims.play("ram::ideal")
                    }
                }, {
                    key: "createActors",
                    value: function() {
                        var e = this.physics.add.staticGroup();
                        e.create(512, 550, "ground").setScale(2.6).refreshBody(), this.ravanPlayer = this.physics.add.sprite(we, Se, "ravan", 247), this.ramPlayer = this.physics.add.sprite(je, Ae, "ram", 221), this.ravanPlayer.setCollideWorldBounds(!0), this.ramPlayer.setCollideWorldBounds(!0), this.ramPlayer.on("animationcomplete", this.ramAnimationComplete, this), this.challengeArrows = new ze(this), this.userArrows = new Ne(this), this.physics.add.collider(this.ravanPlayer, e), this.physics.add.collider(this.ramPlayer, e), this.physics.add.overlap(this.ramPlayer, this.challengeArrows, this.arrowGotHit, null, this), this.physics.add.overlap(this.challengeArrows, this.userArrows, this.arrowsCollided, null, this), this.anims.create({
                            key: "ravan::shoot",
                            frames: this.anims.generateFrameNumbers("ravan", {
                                start: 247,
                                end: 259
                            }),
                            frameRate: 10,
                            repeat: 0
                        }), this.anims.create({
                            key: "ravan::ideal",
                            frames: [{
                                key: "ravan",
                                frame: 247
                            }],
                            frameRate: 20
                        }), this.anims.create({
                            key: "ram::shoot",
                            frames: this.anims.generateFrameNumbers("ram", {
                                start: 221,
                                end: 233
                            }),
                            frameRate: 10,
                            repeat: 0
                        }), this.anims.create({
                            key: "ram::ideal",
                            frames: [{
                                key: "ram",
                                frame: 233
                            }],
                            frameRate: 20
                        }), this.anims.create({
                            key: "ram::hurt",
                            frames: this.anims.generateFrameNumbers("ram", {
                                start: 260,
                                end: 265
                            }),
                            frameRate: 20,
                            repeat: 0
                        })
                    }
                }, {
                    key: "createTexts",
                    value: function() {
                        var e = {
                            font: "30px preeti",
                            fill: "#ff0044",
                            align: "center",
                            backgroundColor: "#ffff00",
                            testString: "a'g'}|M\xc9qgy"
                        };
                        this.targetText = this.add.text(0, 0, "helo", e), this.targetText.setActive(!1), this.targetText.setVisible(!1), this.userText = this.add.text(Le, Oe, "", e)
                    }
                }, {
                    key: "updateLanguage",
                    value: function() {
                        var e = {
                            font: "30px preeti",
                            fill: "#ff0044",
                            align: "center",
                            backgroundColor: "#ffff00"
                        };
                        "english" === He && (e = {
                            font: "30px Arial",
                            fill: "#ff0044",
                            align: "center",
                            backgroundColor: "#ffff00"
                        }), this.targetText.setStyle(e), this.userText.setStyle(e)
                    }
                }, {
                    key: "hideTexts",
                    value: function() {
                        this.targetText.setActive(!1), this.targetText.setVisible(!1), this.userText.setActive(!1), this.targetText.setActive(!1)
                    }
                }]), a
            }(_.a.Scene),
            Re = {
                type: _.a.AUTO,
                width: 1024,
                height: 600,
                parent: "ramayan",
                physics: {
                    default: "arcade",
                    arcade: {
                        gravity: {
                            y: 300
                        },
                        debug: !1
                    }
                },
                scene: Me
            },
            Ie = null;
        var He = "";

        function Ue(e) {
            He = e
        }
        var qe = function(e, t) {
                return {
                    type: "SET_KEY_PRESSED",
                    currentKeyCode: e,
                    currentKey: t
                }
            },
            _e = function() {
                return {
                    type: "RESET_KEY_PRESSED"
                }
            },
            Ve = function(e) {
                return {
                    type: "SET_LOGGER_MEMORY",
                    memoryString: e
                }
            },
            Je = function() {
                return {
                    type: "RESET_LOGGER_MEMORY"
                }
            },
            Ze = function() {
                return {
                    type: "SWITCH_TO_CLASSIC_GAME"
                }
            },
            Xe = function() {
                return {
                    type: "SWITCH_TO_RAMAYAN_GAME"
                }
            },
            Ye = function() {
                return {
                    type: "SWITCH_TO_CREDIT_PAGE"
                }
            },
            Be = function() {
                return {
                    type: "SWITCH_TO_ABOUT_PAGE"
                }
            },
            We = function() {
                return {
                    type: "SWITCH_TO_SCHOOLS"
                }
            },
            Pe = function(e) {
                return {
                    type: "CHANGE_LANGUAGE",
                    language: e
                }
            },
            Qe = function(e) {
                return {
                    type: "CHANGE_KEY_RANGE",
                    keyRange: e
                }
            },
            $e = function(e) {
                return {
                    type: "CHANGE_DIFFICULTY_LEVEL",
                    difficultyLevel: e
                }
            },
            et = function(e) {
                return {
                    type: "SET_ACTIVE_USER",
                    userID: e
                }
            },
            tt = l.a.createContext(),
            at = a(48);

        function nt(e) {
            var t = e.height,
                a = e.width,
                n = e.active,
                f = e.onClick,
                r = Object(i.useState)(!1),
                s = Object(at.a)(r, 2),
                o = s[0],
                c = s[1],
                d = Object(v.a)({
                    height: t,
                    minWidth: a,
                    width: a ? "auto" : "100%",
                    backgroundColor: n ? "#D6F5D6" : "white",
                    border: o ? "1px solid #000000" : "1px solid #00000050"
                }, ft.container);
            return l.a.createElement("div", {
                style: d,
                onClick: f,
                onMouseEnter: function() {
                    return c(!0)
                },
                onMouseLeave: function() {
                    return c(!1)
                }
            }, e.children)
        }
        var ft = {
            container: {
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer"
            }
        };

        function rt(e) {
            return l.a.createElement("div", {
                style: st.container
            }, l.a.createElement("div", {
                style: st.languageSelectorTitle
            }, "Select Language"), l.a.createElement("div", {
                style: st.languageSwitch
            }, l.a.createElement(nt, {
                active: "traditional" === e.language,
                onClick: function() {
                    return e.onLanguageChange("traditional")
                }
            }, "Nepali"), l.a.createElement(nt, {
                active: "english" === e.language,
                onClick: function() {
                    return e.onLanguageChange("english")
                }
            }, "English")))
        }
        var st = {
            container: {
                height: "100%",
                minWidth: "190px",
                borderLeft: "1px solid rgba(0,0,0,0.2)",
                borderRight: "1px solid rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            },
            languageSelectorTitle: {
                height: "38.197%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 16
            },
            languageSwitch: {
                height: "61.806%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 14
            }
        };

        function ot(e) {
            return l.a.createElement("div", {
                style: it.container
            }, l.a.createElement("div", {
                style: it.title
            }, "Select Keyboard Pratice Range"), l.a.createElement("div", {
                style: it.switch
            }, l.a.createElement(nt, {
                active: "numRow" === e.keyRange,
                onClick: function() {
                    return e.onKeyRangeChange("numRow")
                }
            }, "Number Row"), l.a.createElement(nt, {
                active: "topRow" === e.keyRange,
                onClick: function() {
                    return e.onKeyRangeChange("topRow")
                }
            }, "QWERTY Row"), l.a.createElement(nt, {
                active: "midRow" === e.keyRange,
                onClick: function() {
                    return e.onKeyRangeChange("midRow")
                }
            }, "ASDF Row"), l.a.createElement(nt, {
                active: "lowRow" === e.keyRange,
                onClick: function() {
                    return e.onKeyRangeChange("lowRow")
                }
            }, "ZXCVB Row"), l.a.createElement(nt, {
                active: "allKeys" === e.keyRange,
                onClick: function() {
                    return e.onKeyRangeChange("allKeys")
                }
            }, "All Keys")))
        }
        var it = {
                container: {
                    height: "100%",
                    minWidth: "300px",
                    borderLeft: "1px solid rgba(0,0,0,0.2)",
                    borderRight: "1px solid rgba(0,0,0,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                title: {
                    height: "38.197%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 16
                },
                switch: {
                    height: "61.806%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 11
                }
            },
            lt = a(45),
            ct = a.n(lt);

        function dt(e) {
            return l.a.createElement(l.a.Fragment, null, l.a.createElement(nt, {
                width: 75,
                active: "classic" === e.scene
            }, l.a.createElement(M.c, {
                exact: !0,
                to: "/classic",
                style: ht.menuItemContainer,
                activeClassName: "activeNav",
                onClick: e.onClassicTutorSelected
            }, l.a.createElement("svg", {
                width: "2em",
                height: "2em",
                viewBox: "0 0 16 16",
                className: "bi bi-keyboard-fill",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg"
            }, l.a.createElement("path", {
                fillRule: "evenodd",
                d: "M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm13 .25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zM2.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 8.75v-.5A.25.25 0 0 0 2.75 8h-.5zM4 8.25A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zM6.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 7 8.75v-.5A.25.25 0 0 0 6.75 8h-.5zM8 8.25A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zM13.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm-3-2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-1.5zm.75 2.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zM11.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zM9 6.25A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zM7.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 8 6.75v-.5A.25.25 0 0 0 7.75 6h-.5zM5 6.25A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zM2.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 4 6.75v-.5A.25.25 0 0 0 3.75 6h-1.5zM2 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zM4.25 10a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-5.5z"
            })), l.a.createElement("div", null, "Typing"))),)
        }
        var ht = {
            menuItemContainer: {
                display: "flex",
                flexDirection: "column",
                color: "inherit",
                textDecoration: "inherit",
                alignItems: "center",
                justifyContent: "center"
            }
        };
        var ut = {
            menuItemContainer: {
                color: "inherit",
                textDecoration: "inherit"
            },
            menuGroup: {
                display: "flex",
                flexDirection: "row",
                borderRight: "3px solid rgba(0,0,0,0.2)"
            },
            aboutUs: {
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                color: "inherit",
                textDecoration: "inherit"
            },
            logo: {
                paddingRight: "20px",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "xx-large",
                color: "white",
                textDecoration: "inherit",
                textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
            },
            keyboardUnicode: {
                fontSize: "32px"
            }
        };

        function pt(e) {
            return l.a.createElement("div", {
                style: yt.container
            }, l.a.createElement("div", {
                style: yt.title
            }, "Select Difficulty"), l.a.createElement("div", {
                style: yt.switch
            }, l.a.createElement(nt, {
                active: "easy" === e.difficulty,
                onClick: function() {
                    return e.onDifficultyLevelChange("easy")
                }
            }, "Easy"), l.a.createElement(nt, {
                active: "medium" === e.difficulty,
                onClick: function() {
                    return e.onDifficultyLevelChange("medium")
                }
            }, "Medium"), l.a.createElement(nt, {
                active: "hard" === e.difficulty,
                onClick: function() {
                    return e.onDifficultyLevelChange("hard")
                }
            }, "Hard")))
        }
        var yt = {
                container: {
                    height: "100%",
                    minWidth: "160px",
                    borderLeft: "1px solid rgba(0,0,0,0.2)",
                    borderRight: "1px solid rgba(0,0,0,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                title: {
                    height: "38.197%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 16
                },
                switch: {
                    height: "61.806%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 11
                }
            },
            mt = a(17);

        function kt(e) {
            return l.a.createElement("div", {
                style: vt.container
            }, l.a.createElement(bt, null), 
            l.a.createElement(rt, {
                language: e.language,
                onLanguageChange: e.onLanguageChange
            }), l.a.createElement(ot, {
                keyRange: e.keyRange,
                onKeyRangeChange: e.onKeyRangeChange
            }), l.a.createElement(pt, {
                difficulty: e.difficulty,
                onDifficultyLevelChange: e.onDifficultyLevelChange
            }), l.a.createElement(dt, {
                onClassicTutorSelected: e.onClassicTutorSelected,
                onRamayanSelected: e.onRamayanSelected,
                scene: e.scene
            }),  )
        }
        var bt = function(e) {
                if (Object(mt.a)()) return l.a.createElement("div", {
                    style: vt.cropLogo
                }, l.a.createElement("img", {
                    src: a(31),
                    style: vt.cropLogoImage,
                    alt: "logo"
                }));
                var t = ["htt", "p:", "//ty", "pe", "sha", "la.", "shr", "est", "has", "ush", "il.", "c", "o", "m.", "n", "p", "/cl", "as", "sic"];
                return t = t.join(""), l.a.createElement("a", {
                    href: "#",
                },)
            },
            vt = {
                container: {
                    height: 75,
                    border: "1px solid rgba(0,0,0,0.2)",
                    boxShadow: "0px 0px 5px 0px #888888",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent:"center"
                },
                menuGroup: {
                    display: "flex",
                    flexDirection: "row",
                    borderRight: "3px solid rgba(0,0,0,0.2)"
                },
                cropLogo: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "170px",
                    height: "75px",
                    overflow: "hidden"
                },
                cropLogoImage: {
                    width: "150px",
                    height: "150px",
                    margin: "-10px 0 0 0"
                }
            },
            xt = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e) {
                    var n;
                    return Object(D.a)(this, a), (n = t.call(this, e)).onLanguageChange = n.onLanguageChange.bind(Object(I.a)(n)), n.onKeyRangeChange = n.onKeyRangeChange.bind(Object(I.a)(n)), n.onDifficultyLevelChange = n.onDifficultyLevelChange.bind(Object(I.a)(n)), n.onClassicTutorSelected = n.onClassicTutorSelected.bind(Object(I.a)(n)), n.onRamayanSelected = n.onRamayanSelected.bind(Object(I.a)(n)), n.onCreditSelected = n.onCreditSelected.bind(Object(I.a)(n)), n.onAboutUsSelected = n.onAboutUsSelected.bind(Object(I.a)(n)), n.onSchoolsSelected = n.onSchoolsSelected.bind(Object(I.a)(n)), n
                }
                return Object(z.a)(a, [{
                    key: "onLanguageChange",
                    value: function(e) {
                        this.context.track("Changed Language", {
                            source: "menubar",
                            target: e
                        }), this.props.SiteStateDispatchers.changeLanguage(e), this.props.onLanguageChange && this.props.onLanguageChange(e)
                    }
                }, {
                    key: "onKeyRangeChange",
                    value: function(e) {
                        this.context.track("Changed KeyRange", {
                            source: "menubar",
                            target: e
                        }), this.props.SiteStateDispatchers.changeKeyRange(e), this.props.onKeyRangeChange && this.props.onKeyRangeChange(e)
                    }
                }, {
                    key: "onDifficultyLevelChange",
                    value: function(e) {
                        this.context.track("Changed Difficulty", {
                            source: "menubar",
                            target: e
                        }), this.props.SiteStateDispatchers.changeDifficultyLevel(e)
                    }
                }, {
                    key: "onClassicTutorSelected",
                    value: function(e) {
                        this.context.track("Selected ClassicTutor", {
                            source: "menubar"
                        }), this.props.SiteStateDispatchers.switchToClassic()
                    }
                }, {
                    key: "onRamayanSelected",
                    value: function(e) {
                        this.context.track("Selected Ramayan", {
                            source: "menubar"
                        }), this.props.SiteStateDispatchers.switchToRamayan()
                    }
                }, {
                    key: "onCreditSelected",
                    value: function(e) {
                        this.context.track("Selected Credits", {
                            source: "menubar"
                        }), this.props.SiteStateDispatchers.switchToCredit()
                    }
                }, {
                    key: "onAboutUsSelected",
                    value: function(e) {
                        this.context.track("Selected Aboutus", {
                            source: "menubar"
                        }), this.props.SiteStateDispatchers.switchToAbout()
                    }
                }, {
                    key: "onSchoolsSelected",
                    value: function(e) {
                        this.context.track("Selected School", {
                            source: "menubar"
                        }), this.props.SiteStateDispatchers.switchToSchools()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return l.a.createElement(kt, {
                            scene: this.props.scene,
                            language: this.props.language,
                            keyRange: this.props.keyRange,
                            difficulty: this.props.difficulty,
                            onLanguageChange: this.onLanguageChange,
                            onKeyRangeChange: this.onKeyRangeChange,
                            onDifficultyLevelChange: this.onDifficultyLevelChange,
                            onClassicTutorSelected: this.onClassicTutorSelected,
                            onRamayanSelected: this.onRamayanSelected,
                            onCreditSelected: this.onCreditSelected,
                            onAboutUsSelected: this.onAboutUsSelected,
                            onSchoolsSelected: this.onSchoolsSelected
                        })
                    }
                }]), a
            }(l.a.Component);
        xt.contextType = tt;
        var Ct = Object(p.b)((function(e) {
                return {
                    scene: e.SiteState.scene,
                    language: e.SiteState.language,
                    keyRange: e.SiteState.keyRange,
                    difficulty: e.SiteState.difficulty || "easy"
                }
            }), (function(e) {
                return {
                    SiteStateDispatchers: Object(y.b)(f, e)
                }
            }))(xt),
            Lt = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e) {
                    var n;
                    return Object(D.a)(this, a), (n = t.call(this, e)).onLanguageChange = n.onLanguageChange.bind(Object(I.a)(n)), n.onKeyRangeChange = n.onKeyRangeChange.bind(Object(I.a)(n)), n
                }
                return Object(z.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        Ue(this.props.SiteState.language), pe(this.props.SiteState.keyRange), Ie = new _.a.Game(Re)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        pe(this.props.SiteState.keyRange), Ie.destroy(!0)
                    }
                }, {
                    key: "render",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] || this.props;
                        return l.a.createElement("div", null, l.a.createElement(Ct, {
                            onLanguageChange: this.onLanguageChange,
                            onKeyRangeChange: this.onKeyRangeChange
                        }), l.a.createElement("div", {
                            id: "ramayan",
                            style: Ot.ramayan
                        }))
                    }
                }, {
                    key: "onLanguageChange",
                    value: function(e) {
                        Ue(e)
                    }
                }, {
                    key: "onKeyRangeChange",
                    value: function(e) {
                        pe(e)
                    }
                }]), a
            }(l.a.Component),
            Ot = {
                ramayan: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            },
            wt = Object(p.b)((function(e) {
                return {
                    KeyLogger: e.KeyLogger,
                    SiteState: e.SiteState
                }
            }), (function(e) {
                return {
                    KeyLoggerDispatchers: Object(y.b)(n, e),
                    SiteStateDispatchers: Object(y.b)(f, e)
                }
            }))(Lt),
            St = {
                content: {
                    margin: "50px",
                    padding: "20px",
                    textAlign: "center",
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    lineHeight: "1.5em",
                    border: "1px solid rgba(0,0,0,0.3)",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px 0px #888888"
                },
                heading: {
                    fontSize: 24
                },
                mainParagraph: {
                    fontSize: 16,
                    textDecoration: "inherit"
                },
                paragraph: {
                    fontSize: 16,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "inherit"
                }
            },
            jt = function(e) {
                var t = ["t", "y", "p", "e", "s", "h", "a", "l", "a", ".", "s", "h", "r", "e", "s", "t", "h", "a", "s", "u", "s", "h", "i", "l", ".", "c", "o", "m", ".", "n", "p"];
                return t = t.join(""), Object(mt.a)() || window.location.host.startsWith(t) || window.location.host.startsWith("localhost") || (window.location = "http://" + t), l.a.createElement("div", {
                    style: St.container
                }, l.a.createElement(Ct, null), l.a.createElement("div", {
                    style: St.content
                }, l.a.createElement("p", {
                    style: St.heading
                }, "yi - \u0905\u0915\u094d\u0937\u0930", ": Nepali typing tutor"), l.a.createElement("p", {
                    style: St.paragraph
                }, "yi - \u0905\u0915\u094d\u0937\u0930", " is a typing tutor inspired from the old typshala program. The old typshala is a DOS based application and doesn't work in newer version of the Windows. The program hasn't been ported to work with Windows 8 and Windows 10. This project has been developed as alternative for the old typshala and it works for all major operating systems (Windows 7 / 8 / 10 and older version of Windows) that supports newer browser. This program supports both nepali and english typing. Along with a classic typing challenge, we have also built a ramayan game. In future, we are planning to enhance the program and make it better for the people who wants learn to type in devnagari. Thank you all for all the support and I also would like to thank specially to my friends from HaleM-UH for their honest feedbacks during development of the project."), Object(mt.a)() ? l.a.createElement("p", null, "Online version of the program is available ", l.a.createElement("a", {
                    href: "#",
                    rel: "noopener noreferrer"
                }, "here")) : null, ))
            },
            At = {
                content: {
                    margin: "50px",
                    padding: "20px",
                    textAlign: "center",
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    lineHeight: "1.5em",
                    border: "1px solid rgba(0,0,0,0.3)",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px 0px #888888"
                },
                heading: {
                    fontSize: 24
                },
                paragraph: {
                    fontSize: 16,
                    textDecoration: "inherit"
                }
            },
            Et = function(e) {
                var t = ["t", "y", "p", "e", "s", "h", "a", "l", "a", ".", "s", "h", "r", "e", "s", "t", "h", "a", "s", "u", "s", "h", "i", "l", ".", "c", "o", "m", ".", "n", "p"];
                return t = t.join(""), Object(mt.a)() || window.location.host.startsWith(t) || window.location.host.startsWith("localhost") || (window.location = "http://" + t), l.a.createElement("div", {
                    style: At.container
                }, l.a.createElement(Ct, null), l.a.createElement("div", {
                    style: At.content
                }, l.a.createElement("p", {
                    style: At.heading
                }, "Credits"), l.a.createElement("p", {
                    style: At.paragraph
                }, "Special thanks to my friends from HaleM-UH for their honest feedbacks during development of the project."), l.a.createElement("p", {
                    style: At.paragraph
                }, "Sound Engineer / Logo Designer / Level Designer: Ashica"), l.a.createElement("p", {
                    style: At.paragraph
                }, "Game Designer / Developer: Sushil"), l.a.createElement("p", {
                    style: At.paragraph
                }, "Special Thanks:", l.a.createElement("br", null), "Achyut", l.a.createElement("br", null), "Renisha", l.a.createElement("br", null), "Roshan", l.a.createElement("br", null), "Saroj", l.a.createElement("br", null), "Suraj", l.a.createElement("br", null)), l.a.createElement("p", {
                    style: At.paragraph
                }, l.a.createElement("p", {
                    style: At.heading
                }, "Game Assets:"), "Spritesheets based on :: ", l.a.createElement("a", {
                    href: "https://github.com/Gaurav0/Universal-LPC-Spritesheet-Character-Generator",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Universal-LPC-Spritesheet-Character-Generator"), " license CC-BY-SA 3.0 and GNU GPL 3.0", l.a.createElement("br", null), "Fireworks:: ", l.a.createElement("a", {
                    href: "https://www.freepik.com/free-photos-vectors/abstract",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Abstract vector created by freepik - www.freepik.com"), l.a.createElement("br", null), 'Background:: "Country Side Platform Tiles" by ansimuz licensed CC0 1.0: ', l.a.createElement("a", {
                    href: "https://opengameart.org/content/country-side-platform-tiles",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "link"), l.a.createElement("br", null)), l.a.createElement("p", {
                    style: At.paragraph
                }, "If you want to say hi to us please drop an email at afahocci@gmail.com. "), l.a.createElement("p", {
                    style: At.paragraph
                }, "As always your feedback is what makes this application better. Please let us know about your comments through email. Happy typing.")))
            },
            Ft = function(e) {
                var t = e.mainChar,
                    a = e.secondaryChar,
                    n = e.specialKey,
                    f = e.keyPosition,
                    r = 64 * e.scale,
                    s = 64 * e.scale;
                n && (r = Gt[n] * e.scale);
                var o = Object(v.a)(Object(v.a)({}, Dt.container), {}, {
                    width: r,
                    height: s
                });
                e.selected && (o.backgroundColor = "cyan");
                var i = Object(v.a)(Object(v.a)({}, Dt.mainChar), Tt.traditional.mainChar),
                    c = Object(v.a)(Object(v.a)({}, Dt.secondaryChar), Tt.traditional.secondaryChar);
                return "english" === e.keyboardType && (i = Object(v.a)(Object(v.a)({}, Dt.mainChar), Tt.english.mainChar), c = Object(v.a)(Object(v.a)({}, Dt.secondaryChar), Tt.english.secondaryChar)), l.a.createElement("div", {
                    style: o
                }, l.a.createElement("div", {
                    style: Dt.keyContent
                }, function(e, t) {
                    return "english" !== e.keyboardType ? l.a.createElement("div", {
                        style: Dt.engRef
                    }, l.a.createElement("div", null), l.a.createElement("div", null, t)) : ""
                }(e, t), l.a.createElement("div", {
                    style: Dt.keyText
                }, l.a.createElement("div", {
                    style: c
                }, a), l.a.createElement("div", {
                    style: i
                }, t))), function(e, t) {
                    var a = Object(v.a)(Object(v.a)({}, Dt.special), Dt.rightSpecial);
                    "left" === t && (a = Object(v.a)(Object(v.a)({}, Dt.special), Dt.leftSpecial));
                    return l.a.createElement("div", {
                        style: a
                    }, e)
                }(n, f))
            };
        Ft.defaultProps = {
            scale: .8
        };
        var Gt = {
                tab: 96,
                "caps lock": 112,
                shift: 150,
                fn: 60,
                control: 60,
                alt: 60,
                windows: 86,
                backspace: 96,
                enter: 120,
                "space bar": 360
            },
            Tt = {
                english: {
                    mainChar: {
                        fontSize: 20
                    },
                    secondaryChar: {
                        fontSize: 15
                    }
                },
                traditional: {
                    mainChar: {
                        fontSize: 25
                    },
                    secondaryChar: {
                        fontSize: 20
                    }
                }
            },
            Dt = {
                container: {
                    backgroundColor: "white",
                    margin: 5,
                    borderRadius: 5,
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    width: "100%"
                },
                keyContent: {
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                    fontWeight: 500
                },
                engRef: {
                    width: "50%",
                    verticalAlign: "bottom",
                    display: "flex",
                    alignSelf: "flex-end",
                    fontFamily: "Helvetica",
                    padding: 3,
                    color: "#ccc",
                    fontSize: 12
                },
                keyText: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyItems: "center",
                    alignItems: "center"
                },
                mainChar: {
                    textAlign: "center"
                },
                secondaryChar: {
                    textAlign: "center"
                },
                special: {
                    position: "absolute",
                    textAlign: "center",
                    fontFamily: "Helvetica",
                    fontSize: 11
                },
                leftSpecial: {
                    bottom: 5,
                    left: 10
                },
                rightSpecial: {
                    bottom: 5,
                    right: 10
                }
            },
            zt = Ft,
            Kt = {
                container: {
                    display: "flex"
                }
            },
            Nt = function(e) {
                var t = e.keysData.map((function(t, a) {
                    var n = t.keyCode === e.activeKey || t.secondaryKeyCode === e.activeKey;
                    return e.isSecondaryKey && 16 === t.keyCode && (n = !0), e.lastKeyWasMistake && 8 === t.keyCode && (n = !0), l.a.createElement(zt, {
                        mainChar: t.mainChar,
                        secondaryChar: t.secondaryChar,
                        specialKey: t.special,
                        keyPosition: t.position,
                        key: a,
                        selected: n,
                        keyboardType: e.keyboardType
                    })
                }));
                return l.a.createElement("div", {
                    style: Kt.container
                }, t)
            },
            Mt = function(e) {
                var t = Object(v.a)({}, Rt.container);
                "traditional" === e.keyboardType && (t = Object(v.a)(Object(v.a)({}, t), Rt.preetiKeyboard));
                var a = Ht[e.activeKey];
                return l.a.createElement("div", {
                    style: t
                }, l.a.createElement(Nt, {
                    keyboardType: e.keyboardType,
                    keysData: It[0],
                    activeKey: e.activeKey,
                    isSecondaryKey: a,
                    lastKeyWasMistake: e.lastKeyWasMistake
                }), l.a.createElement(Nt, {
                    keyboardType: e.keyboardType,
                    keysData: It[1],
                    activeKey: e.activeKey,
                    isSecondaryKey: a
                }), l.a.createElement(Nt, {
                    keyboardType: e.keyboardType,
                    keysData: It[2],
                    activeKey: e.activeKey,
                    isSecondaryKey: a
                }), l.a.createElement(Nt, {
                    keyboardType: e.keyboardType,
                    keysData: It[3],
                    activeKey: e.activeKey,
                    isSecondaryKey: a
                }), l.a.createElement(Nt, {
                    keyboardType: e.keyboardType,
                    keysData: It[4],
                    activeKey: e.activeKey,
                    isSecondaryKey: a
                }))
            };
        Mt.defaultProps = {
            keyboardType: "preeti"
        };
        var Rt = {
                container: {
                    backgroundColor: "#eee",
                    padding: 10,
                    borderRadius: "10px",
                    boxShadow: "0px 0px 1px 1px #aaa",
                    fontFamily: "courier"
                },
                preetiKeyboard: {
                    fontFamily: "preeti"
                }
            },
            It = [
                [{
                    mainChar: "`",
                    secondaryChar: "~",
                    special: !1,
                    keyCode: 96,
                    secondaryKeyCode: 126
                }, {
                    mainChar: "1",
                    secondaryChar: "!",
                    special: !1,
                    keyCode: 49,
                    secondaryKeyCode: 33
                }, {
                    mainChar: "2",
                    secondaryChar: "@",
                    special: !1,
                    keyCode: 50,
                    secondaryKeyCode: 64
                }, {
                    mainChar: "3",
                    secondaryChar: "#",
                    special: !1,
                    keyCode: 51,
                    secondaryKeyCode: 35
                }, {
                    mainChar: "4",
                    secondaryChar: "$",
                    special: !1,
                    keyCode: 52,
                    secondaryKeyCode: 36
                }, {
                    mainChar: "5",
                    secondaryChar: "%",
                    special: !1,
                    keyCode: 53,
                    secondaryKeyCode: 37
                }, {
                    mainChar: "6",
                    secondaryChar: "^",
                    special: !1,
                    keyCode: 54,
                    secondaryKeyCode: 94
                }, {
                    mainChar: "7",
                    secondaryChar: "&",
                    special: !1,
                    keyCode: 55,
                    secondaryKeyCode: 38
                }, {
                    mainChar: "8",
                    secondaryChar: "*",
                    special: !1,
                    keyCode: 56,
                    secondaryKeyCode: 42
                }, {
                    mainChar: "9",
                    secondaryChar: "(",
                    special: !1,
                    keyCode: 57,
                    secondaryKeyCode: 40
                }, {
                    mainChar: "0",
                    secondaryChar: ")",
                    special: !1,
                    keyCode: 48,
                    secondaryKeyCode: 41
                }, {
                    mainChar: "-",
                    secondaryChar: "_",
                    special: !1,
                    keyCode: 45,
                    secondaryKeyCode: 95
                }, {
                    mainChar: "=",
                    secondaryChar: "+",
                    special: !1,
                    keyCode: 61,
                    secondaryKeyCode: 43
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "backspace",
                    keyCode: 8,
                    position: "right"
                }],
                [{
                    mainChar: "",
                    secondaryChar: "",
                    special: "tab",
                    keyCode: 9,
                    position: "left"
                }, {
                    mainChar: "q",
                    secondaryChar: "Q",
                    special: !1,
                    keyCode: 113,
                    secondaryKeyCode: 81
                }, {
                    mainChar: "w",
                    secondaryChar: "W",
                    special: !1,
                    keyCode: 119,
                    secondaryKeyCode: 87
                }, {
                    mainChar: "e",
                    secondaryChar: "E",
                    special: !1,
                    keyCode: 101,
                    secondaryKeyCode: 69
                }, {
                    mainChar: "r",
                    secondaryChar: "R",
                    special: !1,
                    keyCode: 114,
                    secondaryKeyCode: 82
                }, {
                    mainChar: "t",
                    secondaryChar: "T",
                    special: !1,
                    keyCode: 116,
                    secondaryKeyCode: 84
                }, {
                    mainChar: "y",
                    secondaryChar: "Y",
                    special: !1,
                    keyCode: 121,
                    secondaryKeyCode: 89
                }, {
                    mainChar: "u",
                    secondaryChar: "U",
                    special: !1,
                    keyCode: 117,
                    secondaryKeyCode: 85
                }, {
                    mainChar: "i",
                    secondaryChar: "I",
                    special: !1,
                    keyCode: 105,
                    secondaryKeyCode: 73
                }, {
                    mainChar: "o",
                    secondaryChar: "O",
                    special: !1,
                    keyCode: 111,
                    secondaryKeyCode: 79
                }, {
                    mainChar: "p",
                    secondaryChar: "P",
                    special: !1,
                    keyCode: 112,
                    secondaryKeyCode: 80
                }, {
                    mainChar: "[",
                    secondaryChar: "{",
                    special: !1,
                    keyCode: 91,
                    secondaryKeyCode: 123
                }, {
                    mainChar: "]",
                    secondaryChar: "}",
                    special: !1,
                    keyCode: 93,
                    secondaryKeyCode: 125
                }, {
                    mainChar: "\\",
                    secondaryChar: "|",
                    special: !1,
                    keyCode: 92,
                    secondaryKeyCode: 124
                }],
                [{
                    mainChar: "",
                    secondaryChar: "",
                    special: "caps lock",
                    keyCode: 20,
                    position: "left"
                }, {
                    mainChar: "a",
                    secondaryChar: "A",
                    special: !1,
                    keyCode: 97,
                    secondaryKeyCode: 65
                }, {
                    mainChar: "s",
                    secondaryChar: "S",
                    special: !1,
                    keyCode: 115,
                    secondaryKeyCode: 83
                }, {
                    mainChar: "d",
                    secondaryChar: "D",
                    special: !1,
                    keyCode: 100,
                    secondaryKeyCode: 68
                }, {
                    mainChar: "f",
                    secondaryChar: "F",
                    special: !1,
                    keyCode: 102,
                    secondaryKeyCode: 70
                }, {
                    mainChar: "g",
                    secondaryChar: "G",
                    special: !1,
                    keyCode: 103,
                    secondaryKeyCode: 71
                }, {
                    mainChar: "h",
                    secondaryChar: "H",
                    special: !1,
                    keyCode: 104,
                    secondaryKeyCode: 72
                }, {
                    mainChar: "j",
                    secondaryChar: "J",
                    special: !1,
                    keyCode: 106,
                    secondaryKeyCode: 74
                }, {
                    mainChar: "k",
                    secondaryChar: "K",
                    special: !1,
                    keyCode: 107,
                    secondaryKeyCode: 75
                }, {
                    mainChar: "l",
                    secondaryChar: "L",
                    special: !1,
                    keyCode: 108,
                    secondaryKeyCode: 76
                }, {
                    mainChar: ";",
                    secondaryChar: ":",
                    special: !1,
                    keyCode: 59,
                    secondaryKeyCode: 58
                }, {
                    mainChar: "'",
                    secondaryChar: '"',
                    special: !1,
                    keyCode: 39,
                    secondaryKeyCode: 34
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "enter",
                    keyCode: 13,
                    position: "right"
                }],
                [{
                    mainChar: "",
                    secondaryChar: "",
                    special: "shift",
                    keyCode: 16,
                    position: "left"
                }, {
                    mainChar: "z",
                    secondaryChar: "Z",
                    special: !1,
                    keyCode: 122,
                    secondaryKeyCode: 90
                }, {
                    mainChar: "x",
                    secondaryChar: "X",
                    special: !1,
                    keyCode: 120,
                    secondaryKeyCode: 88
                }, {
                    mainChar: "c",
                    secondaryChar: "C",
                    special: !1,
                    keyCode: 99,
                    secondaryKeyCode: 67
                }, {
                    mainChar: "v",
                    secondaryChar: "V",
                    special: !1,
                    keyCode: 118,
                    secondaryKeyCode: 86
                }, {
                    mainChar: "b",
                    secondaryChar: "B",
                    special: !1,
                    keyCode: 98,
                    secondaryKeyCode: 66
                }, {
                    mainChar: "n",
                    secondaryChar: "N",
                    special: !1,
                    keyCode: 110,
                    secondaryKeyCode: 78
                }, {
                    mainChar: "m",
                    secondaryChar: "M",
                    special: !1,
                    keyCode: 109,
                    secondaryKeyCode: 77
                }, {
                    mainChar: ",",
                    secondaryChar: "<",
                    special: !1,
                    keyCode: 44,
                    secondaryKeyCode: 60
                }, {
                    mainChar: ".",
                    secondaryChar: ">",
                    special: !1,
                    keyCode: 46,
                    secondaryKeyCode: 62
                }, {
                    mainChar: "/",
                    secondaryChar: "?",
                    special: !1,
                    keyCode: 47,
                    secondaryKeyCode: 63
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "shift",
                    keyCode: 16,
                    position: "right"
                }],
                [{
                    mainChar: "",
                    secondaryChar: "",
                    special: "fn",
                    position: "left"
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "control",
                    keyCode: 17,
                    position: "left"
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "alt",
                    keyCode: 18,
                    position: "left"
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "windows",
                    keyCode: 224,
                    position: "left"
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "space bar",
                    keyCode: 32
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "windows",
                    keyCode: 224,
                    position: "right"
                }, {
                    mainChar: "",
                    secondaryChar: "",
                    special: "alt",
                    keyCode: 18,
                    position: "right"
                }]
            ],
            Ht = {};
        It.map((function(e) {
            return e.map((function(e) {
                return e.secondaryKeyCode && (Ht[e.secondaryKeyCode] = !0), 1
            }))
        }));
        var Ut = Mt,
            qt = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e) {
                    var n;
                    return Object(D.a)(this, a), (n = t.call(this, e)).audio = new Audio(n.props.sound), n
                }
                return Object(z.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.audio.play()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.audio.pause()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]), a
            }(l.a.Component);

        function _t(e, t) {
            var a = new Audio(e);
            a.volume = .05, a.addEventListener("ended", t || function() {
                return null
            }), a.play()
        }
        var Vt = a(24),
            Jt = function(e) {
                return e.SiteState
            },
            Zt = Object(Vt.a)(Jt, (function(e) {
                return e.activeUser
            })),
            Xt = Object(Vt.a)((function(e) {
                return e.Users
            }), Zt, (function(e, t) {
                return e[Object.keys(e)[0]] || {}
            })),
            Yt = Object(Vt.a)((function(e) {
                return e.ClassicTutor
            }), Jt, (function(e) {
                return e.OneLiners
            }), (function(e, t, a) {
                var n = e.currentSetIndex || 0,
                    f = a[t.language][t.keyRange][t.difficulty || "easy"];
                return f[n %= f.length]
            })),
            Bt = Object(Vt.a)(Yt, (function(e) {
                return e.KeyLogger
            }), (function(e, t) {
                var a = t.loggerMemory;
                return a[a.length - 1] !== e[a.length - 1]
            })),
            Wt = function(e) {
                Object(K.a)(n, e);
                var t = Object(N.a)(n);

                function n(e) {
                    var a;
                    return Object(D.a)(this, n), (a = t.call(this, e)).state = {
                        soundPlayed: !0
                    }, a.onkeypress = document.onkeypress, a.onkeydown = document.onkeydown, a
                }
                return Object(z.a)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        document.onkeypress = function(e) {
                            var t = "number" == typeof(e = e || window.event).which ? e.which : e.keyCode;
                            if (t) {
                                this.props.KeyLoggerDispatchers.keyPressed(t, String.fromCharCode(t));
                                var a = this.props.KeyLogger.loggerMemory;
                                8 === t || (a += String.fromCharCode(t)), e.preventDefault(), this.props.KeyLoggerDispatchers.setLoggerMemory(a), this.setState({
                                    soundPlayed: !1
                                })
                            }
                        }.bind(this), document.onkeydown = function(e) {
                            var t = "number" == typeof(e = e || window.event).which ? e.which : e.keyCode;
                            if (t) {
                                this.props.KeyLoggerDispatchers.keyPressed(t, String.fromCharCode(t));
                                var a = this.props.KeyLogger.loggerMemory;
                                8 === t && (a = a.slice(0, -1), e.preventDefault(), this.props.KeyLoggerDispatchers.setLoggerMemory(a))
                            }
                        }.bind(this)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t, n) {
                        this.state.soundPlayed || (this.props.lastCharWasMistake ? _t(a(64)) : _t(a(65)), this.setState({
                            soundPlayed: !0
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.onkeypress = this.onkeypress, document.onkeydown = this.onkeydown
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        return null
                    }
                }]), n
            }(l.a.Component),
            Pt = Object(p.b)((function(e) {
                return {
                    KeyLogger: e.KeyLogger,
                    lastCharWasMistake: Bt(e)
                }
            }), (function(e) {
                return {
                    KeyLoggerDispatchers: Object(y.b)(n, e)
                }
            }))(Wt);
        var Qt = {
                container: {
                    fontSize: 32,
                    fontFamily: "Times New Roman",
                    padding: 50
                },
                original: {
                    padding: 10
                },
                userTyped: {
                    padding: 10,
                    height: 10
                },
                errorChar: {
                    color: "red"
                }
            },
            $t = function(e) {
                var t = function(e, t) {
                        for (var a = [], n = 0; n < t.length; n++) e[n] === t[n] ? a.push(e[n]) : a.push(l.a.createElement("span", {
                            style: Qt.errorChar,
                            key: n
                        }, t[n]));
                        return a
                    }(e.originalString, e.typedString),
                    a = Object(v.a)({}, Qt.container);
                return "traditional" === e.keyboardType && (a.fontFamily = "preeti"), l.a.createElement("div", {
                    style: a
                }, l.a.createElement("div", {
                    style: Qt.original
                }, e.originalString), l.a.createElement("div", {
                    style: Qt.userTyped
                }, t))
            },
            ea = {
                container: {
                    position: "absolute",
                    right: 40,
                    top: 80,
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center"
                },
                wpmContainer: {
                    color: "green",
                    textAlign: "center",
                    padding: 10
                },
                wpmNumber: {
                    fontSize: 32
                },
                wpmSticker: {
                    fontSize: 10
                },
                accuracyContainer: {
                    color: "green",
                    textAlign: "center",
                    padding: 10
                },
                accuracyNumber: {
                    fontSize: 32
                },
                accuracySticker: {
                    fontSize: 10
                },
                danger: {
                    color: "red"
                }
            },
            ta = function(e) {
                var t = Object(v.a)({}, ea.accuracyContainer);
                return null !== e.accuracy && e.accuracy < 25 && (t.color = "red"), l.a.createElement("div", {
                    style: ea.container
                }, l.a.createElement("div", {
                    style: t
                }, l.a.createElement("div", {
                    style: ea.accuracyNumber
                }, e.accuracy, l.a.createElement("span", {
                    style: ea.accuracySticker
                }, "%")), l.a.createElement("div", {
                    style: ea.accuracySticker
                }, "accuracy")), l.a.createElement("div", {
                    style: ea.wpmContainer
                }, l.a.createElement("div", {
                    style: ea.wpmNumber
                }, e.wpm), l.a.createElement("div", {
                    style: ea.wpmSticker
                }, "words per minute")))
            },
            aa = {
                container: {},
                mainContent: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                floatingFacebook: {
                    position: "absolute",
                    bottom: "20px",
                    right: "20px"
                }
            },
            na = function(e) {
                return l.a.createElement("div", {
                    style: aa.container
                }, l.a.createElement(Ct, {
                    onLanguageChange: e.onLanguageChange,
                    onKeyRangeChange: e.onKeyRangeChange
                }), l.a.createElement(ta, {
                    accuracy: e.accuracy,
                    wpm: e.wpm
                }), l.a.createElement("div", {
                    style: aa.mainContent
                }, l.a.createElement($t, {
                    originalString: e.challengeString,
                    typedString: e.userTypedString,
                    keyboardType: e.keyboardType
                }), l.a.createElement(Ut, {
                    activeKey: e.activeKey,
                    keyboardType: e.keyboardType,
                    lastKeyWasMistake: e.lastKeyWasMistake
                }), l.a.createElement(Pt, null),))
            };

        function fa(e, t) {
            if (0 === t.length) return 0;
            for (var a = 0, n = 0; n < t.length; n++) e[n] !== t[n] && (a += 1);
            return a
        }
        var ra = function(e, t) {
            var a = fa(e, t),
                n = e.length;
            return {
                type: "ARCHIVE_CHALLENGE_STRINGS",
                challengeString: e,
                userTypedString: t,
                totalTypedChar: n,
                totalCorrectChar: n - a
            }
        };

        function sa(e) {
            return {
                type: "TIME_SPENT_ON_CLASSIC_TUTOR",
                timeSpent: e
            }
        }

        function oa(e, t) {
            return {
                type: "CHANGE_CHALLENGE_STRINGS",
                newIndex: (e + 1) % t
            }
        }
        var ia = function(e) {
            Object(K.a)(a, e);
            var t = Object(N.a)(a);

            function a(e) {
                var n;
                return Object(D.a)(this, a), (n = t.call(this, e)).state = {
                    currentSetIndex: 0,
                    challengeStringBacklog: "",
                    userTypedStringBacklog: "",
                    totalCharTyped: 1,
                    totalMissedChar: 0,
                    initialTime: Date.now()
                }, n.onLanguageChange = n.onLanguageChange.bind(Object(I.a)(n)), n.onKeyRangeChange = n.onKeyRangeChange.bind(Object(I.a)(n)), n
            }
            return Object(z.a)(a, [{
                key: "componentDidMount",
                value: function() {
                    this.onKeyRangeChange(this.props.SiteState.keyRange)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    if (this.challengeStringComplete(this.props)) {
                        var a = this.props.currentChallengeString,
                            n = this.props.KeyLogger.loggerMemory;
                        this.props.ClassicTutorDispatchers.archiveStrings(a, n), this.props.ClassicTutorDispatchers.addTimeSpentOnClassicTutor(Date.now() - this.state.initialTime), this.props.KeyLoggerDispatchers.resetLoggerMemory(), this.props.ClassicTutorDispatchers.changeChallengeString(this.props.ClassicTutorState.currentSetIndex, this.props.OneLiners[this.props.SiteState.language][this.props.SiteState.keyRange][this.props.SiteState.difficulty].length), this.setState({
                            initialTime: Date.now()
                        })
                    }
                }
            }, {
                key: "onLanguageChange",
                value: function(e) {
                    this.setState({
                        currentSetIndex: 0
                    }), this.props.KeyLoggerDispatchers.resetLoggerMemory()
                }
            }, {
                key: "onKeyRangeChange",
                value: function(e) {
                    this.setState({
                        currentSetIndex: 0
                    }), this.props.KeyLoggerDispatchers.resetLoggerMemory()
                }
            }, {
                key: "render",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = this.props.currentChallengeString,
                        a = e.KeyLogger.loggerMemory,
                        n = t.charCodeAt(a.length),
                        f = this.getAccuracy(t, a),
                        r = this.getWPM(t, a);
                    return l.a.createElement("div", {
                        style: la.container
                    }, l.a.createElement(na, {
                        accuracy: f,
                        wpm: r,
                        challengeString: t,
                        userTypedString: a,
                        activeKey: n,
                        keyboardType: this.props.SiteState.language,
                        onLanguageChange: this.onLanguageChange,
                        onKeyRangeChange: this.onKeyRangeChange,
                        lastKeyWasMistake: this.props.lastKeyWasMistake
                    }))
                }
            }, {
                key: "getWPM",
                value: function(e, t) {
                    var a = fa(e, t),
                        n = t.length - a,
                        f = this.props.ClassicTutorState.totalCorrectChar + n,
                        r = this.props.ClassicTutorState.timeSpent + (Date.now() - this.state.initialTime);
                    return parseInt(f / (5 * r / 6e4)) || 0
                }
            }, {
                key: "getAccuracy",
                value: function(e, t) {
                    var a = fa(e, t),
                        n = t.length - a,
                        f = this.props.ClassicTutorState.totalTypedChar + t.length,
                        r = this.props.ClassicTutorState.totalCorrectChar + n;
                    return 0 === f ? 0 : Math.floor(100 * r / f)
                }
            }, {
                key: "challengeStringComplete",
                value: function(e) {
                    var t = this.props.currentChallengeString;
                    return e.KeyLogger.loggerMemory.length === t.length
                }
            }]), a
        }(l.a.Component);
        ia.defaultProps = {
            setType: "midRow"
        };
        var la = {
                container: {}
            },
            ca = Object(p.b)((function(e) {
                return {
                    KeyLogger: e.KeyLogger,
                    OneLiners: e.OneLiners,
                    SiteState: e.SiteState,
                    ClassicTutorState: e.ClassicTutor,
                    user: Xt(e),
                    currentChallengeString: Yt(e),
                    lastKeyWasMistake: Bt(e)
                }
            }), (function(e) {
                return {
                    KeyLoggerDispatchers: Object(y.b)(n, e),
                    SiteStateDispatchers: Object(y.b)(f, e),
                    ClassicTutorDispatchers: Object(y.b)(r, e)
                }
            }))(ia),
            da = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a() {
                    return Object(D.a)(this, a), t.apply(this, arguments)
                }
                return Object(z.a)(a, [{
                    key: "render",
                    value: function() {
                        return l.a.createElement(l.a.Fragment, null, l.a.createElement(Ct, {
                            onLanguageChange: function() {},
                            onKeyRangeChange: function() {}
                        }), l.a.createElement("div", {
                            style: ha.container
                        }, l.a.createElement("div", {
                            style: ha.logoContainer
                        }, l.a.createElement("svg", {
                            width: "2em",
                            height: "2em",
                            viewBox: "0 0 16 16",
                            className: "bi bi-keyboard-fill",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, l.a.createElement("path", {
                            "fill-rule": "evenodd",
                            d: "M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm13 .25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zM2.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 8.75v-.5A.25.25 0 0 0 2.75 8h-.5zM4 8.25A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zM6.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 7 8.75v-.5A.25.25 0 0 0 6.75 8h-.5zM8 8.25A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zM13.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm-3-2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-1.5zm.75 2.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zM11.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zM9 6.25A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zM7.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 8 6.75v-.5A.25.25 0 0 0 7.75 6h-.5zM5 6.25A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zM2.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 4 6.75v-.5A.25.25 0 0 0 3.75 6h-1.5zM2 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zM4.25 10a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-5.5z"
                        })), l.a.createElement("div", {
                            style: {
                                padding: "20px"
                            }
                        }, "yi - \u0905\u0915\u094d\u0937\u0930")), l.a.createElement("div", {
                            style: ha.description
                        }, "yi - \u0905\u0915\u094d\u0937\u0930", " is a typing tutor inspired by DOS based old typshala. The main aim of this project is to help to learn Nepali and English typing. Start your learning session by entering your name below and click the start button.", l.a.createElement("br", null), l.a.createElement("br", null), "Happy typing :)"), l.a.createElement("br", null), l.a.createElement("div", {
                            style: ha.userForm
                        }, this.props.user ? l.a.createElement("div", null, " Welcome back ", this.props.user, "! Old profile has been loaded ") : l.a.createElement("div", null, "Enter your name: ", l.a.createElement("input", {
                            autoFocus: !0,
                            style: ha.userInput,
                            type: "text",
                            onChange: this.props.onUserInputChange
                        })), l.a.createElement("div", {
                            style: {
                                height: 60,
                                width: 400,
                                margin: 20
                            }
                        }, l.a.createElement(nt, {
                            active: !0,
                            height: 70,
                            width: 400,
                            onClick: this.props.onStartTypingButton
                        }, "Click here to start typing")))))
                    }
                }]), a
            }(l.a.Component);
        da.defaultProps = {};
        var ha = {
                container: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px",
                    padding: "40px",
                    border: "1px solid rgba(0,0,0,0.3)",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px 0px #888888",
                    fontSize: 18,
                    textAlign: "center"
                },
                logoContainer: {
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 26,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px"
                },
                description: {
                    textAlign: "center",
                    padding: "0 50"
                },
                userForm: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                    margin: 20
                },
                userInput: {
                    height: "46px",
                    fontSize: 18,
                    padding: 10
                }
            },
            ga = function(e, t) {
                return {
                    type: "ADD_NEW_USER",
                    userID: e,
                    user: t
                }
            },
            ua = function(e, t) {
                return {
                    type: "UPDATE_USER_DATA",
                    userID: e,
                    data: t
                }
            },
            pa = a(70),
            ya = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e) {
                    var n;
                    return Object(D.a)(this, a), (n = t.call(this, e)).state = {
                        username: ""
                    }, n.onUserInputChange = n.onUserInputChange.bind(Object(I.a)(n)), n.onStartTypingButton = n.onStartTypingButton.bind(Object(I.a)(n)), n
                }
                return Object(z.a)(a, [{
                    key: "onUserInputChange",
                    value: function(e) {
                        this.setState({
                            username: e.target.value
                        })
                    }
                }, {
                    key: "onStartTypingButton",
                    value: function() {
                        var e = Object(pa.a)();
                        this.props.UserActionsDispatchers.addNewUser(e, this.state.username), this.props.SiteActionsDispatchers.setActiveUser(e), this.props.history.push("/classic")
                    }
                }, {
                    key: "render",
                    value: function() {
                        return l.a.createElement(da, {
                            user: this.props.user.name,
                            onUserInputChange: this.onUserInputChange,
                            onStartTypingButton: this.onStartTypingButton
                        })
                    }
                }]), a
            }(i.Component);
        var ma = Object(p.b)((function(e) {
                return {
                    user: Xt(e)
                }
            }), (function(e) {
                return {
                    UserActionsDispatchers: Object(y.b)(s, e),
                    SiteActionsDispatchers: Object(y.b)(f, e)
                }
            }))(ya),
            ka = {
                container: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#222"
                },
                logo: {}
            },
            ba = function(e) {
                return l.a.createElement("div", {
                    style: ka.container
                }, l.a.createElement(qt, {
                    sound: a(66)
                }), l.a.createElement("div", {
                    style: ka.logo,
                    className: "fadeinElement"
                }, l.a.createElement("img", {
                    src: a(31),
                    alt: "logo"
                })))
            },
            va = function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e) {
                    var n;
                    return Object(D.a)(this, a), (n = t.call(this, e)).state = {
                        splashScreen: !0
                    }, n.timeoutRef = void 0, n
                }
                return Object(z.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.timeoutRef = setTimeout((function() {
                            return e.setState({
                                splashScreen: !1
                            })
                        }), 7e3)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.timeoutRef)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = Object(mt.a)() ? M.b : M.a;
                        return this.state.splashScreen ? l.a.createElement(ba, null) : l.a.createElement(e, null, l.a.createElement(R.c, null, l.a.createElement(R.a, {
                            path: "/classic"
                        }, l.a.createElement(ca, null)), l.a.createElement(R.a, {
                            path: "/ramayan"
                        }, l.a.createElement(wt, null)), l.a.createElement(R.a, {
                            path: "/aboutus"
                        }, l.a.createElement(jt, null)), l.a.createElement(R.a, {
                            path: "/credit",
                            component: Et
                        }), l.a.createElement(R.a, {
                            path: "/",
                            component: ma
                        }), l.a.createElement(R.a, null, l.a.createElement("div", null, "404. Page not found."))))
                    }
                }]), a
            }(l.a.Component),
            xa = (a(67), function(e) {
                Object(K.a)(a, e);
                var t = Object(N.a)(a);

                function a(e) {
                    var n;
                    return Object(D.a)(this, a), (n = t.call(this, e)).state = {
                        hasError: !1
                    }, n
                }
                return Object(z.a)(a, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        this.setState({
                            hasError: !0
                        }), this.context.track("Error", {
                            message: t
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.hasError ? l.a.createElement("h1", null, "Something went wrong. Please try restarting the application.") : this.props.children
                    }
                }]), a
            }(l.a.Component));
        xa.contextType = tt;
        var Ca = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({})
            },
            La = !1;

        function Oa() {}

        function wa(e) {
            if (!La) return La = !0, Sa("register_once", e)
        }

        function Sa(e, t) {
            fetch("http://admin.shresthasushil.com.np/events/", Object(v.a)(Object(v.a)({}, Ca), {}, {
                body: JSON.stringify({
                    event: e,
                    details: t
                })
            })).catch((function(e) {
                console.log("err", e)
            }))
        }
        var ja = g.a;
        (ja = o).init("7be2d9e2b6e6434c7aa4316a47954847", {
            opt_out_tracking_by_default: !1
        }), ja.register_once({
            site: document.location.href,
            referrer: document.referrer,
            hostname: document.location.hostname
        });
        var Aa = {
                key: "root",
                storage: b.a,
                whitelist: ["ClassicTutor", "Users"]
            },
            Ea = Object(m.b)(Aa, T),
            Fa = Object(y.e)(Ea, Object(y.d)(Object(y.a)(u.a)));
        Object(m.c)(Fa), d.a.render(l.a.createElement(tt.Provider, {
            value: ja
        }, l.a.createElement(p.a, {
            store: Fa
        }, l.a.createElement(xa, null, l.a.createElement(va, null)))), document.getElementById("app"))
    }],
    [
        [49, 1, 2]
    ]
]);