###############################################################################
# Base Scripts
###############################################################################

( ($) ->
    prettyPrint()

    $('a.text-disabled').click (e) ->
        e.preventDefault()

) jQuery