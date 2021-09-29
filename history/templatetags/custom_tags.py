from django import template

register = template.Library()


@register.filter(name="initials")
def initials(value):
    splits = value.split(" ")

    if len(splits) > 1:
        firstname, lastname = splits[:2]
        return "".join(firstname[:1]) + "".join(lastname[:1])

    firstname = "".join(splits[:1])
    return "".join(firstname[:1])


@register.filter(name="rmkcolor")
def rmkcolor(value):
    if value.lower() == "success":
        return "blue"
    return "red"


@register.filter(name="get_call_time")
def get_call_time(log):
    if log.remark.lower() != "success":
        return "N/A"
    time_conn = log.time_connected
    time_fin = log.time_finished
    # return the difference between the two times in minutes
    call_time = (time_fin - time_conn).seconds // 60
    minute_str = "minutes"

    if call_time <= 0:
        call_time = 1
        minute_str = "minute"

    return f"{call_time} {minute_str}"
