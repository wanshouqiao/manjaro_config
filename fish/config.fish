if status is-interactive
    # Commands to run in interactive sessions can go here
end
if test -f /home/kevin/.autojump/share/autojump/autojump.fish; . /home/kevin/.autojump/share/autojump/autojump.fish; end
starship init fish | source
alias ra='ranger'
alias quit='exit'
#setxkbmap -option 'ctrl:swapcaps'
