def dms_2_deg(s):
    deg = s[:2]
    min = s[3:5]
    sec = s[6:]
    res = int(deg) + int(min)/60 + int(sec)/3600

    return format(res, '6f')
