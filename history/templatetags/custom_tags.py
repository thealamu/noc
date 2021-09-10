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
