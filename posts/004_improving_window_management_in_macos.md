---
title: Improving Window Management in macOS
publish_date: 2022-08-01
---

As a Linux-enthusiast and avid Pop Shell user migrating to macOS for the first time, I faced a number of challenges in adjusting to the new environment. The biggest one was adapting to the rather lacking window management system in macOS. Let's take a look at some software that can improve the situation.

This post is not a guide to configure any software, just a few recommendations!

[`yabai`](https://github.com/koekeishiya/yabai) is a tiling window manager for macOS, created and maintained by GitHub user [@koekeishiya](https://github.com/koekeishiya). All interactions with the application are done via simple shell commands, which can be triggered using an application like [skhd](https://github.com/koekeishiya/skhd) (also by @koekeishiya!), a hotkey daemon for macOS.

`yabai` and `skhd` alone do some heavy lifting in terms of usability on macOS. Not having to worry about window positions, and being able to work entirely on the keyboard is a big usability win for me. However, we can push the envelope further!

[`stackline`](https://github.com/AdamWagner/stackline), created by GitHub user [@AdamWagner](https://github.com/AdamWagner), displays a visual indicator for windows that are stacked with `yabai`. It's so good, it should be built in!

[`sketchybar`](https://github.com/FelixKratz/SketchyBar), created by GitHub user [@FelixKratz](https://github.com/FelixKratz), allows us to create a customized status bar for our desktop. I currently use it to simply display the current workspace, although I will likely add more to it in the future.

It's worth noting that `sketchybar` bills itself as a macOS status bar replacement, but it is incapable of displaying the traditional File, Edit, etc. menus. For that reason, I use the application in addition to the standard menu bar, placed at the bottom of the display. GNOME Classic vibes, anyone?

If you are interested in trying out any of this software, I have my configs all available in my [dotfiles repo](https://github.com/jacobranson/dotfiles). I try to keep the configurations intuitive, but feel free to make any changes you like.

Perhaps another day we will revisit this topic as I learn more. I am open to suggestions, as well!
