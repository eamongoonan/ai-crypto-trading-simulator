from django import forms
from django.forms import ModelForm
from .models import Position
from .live_coin_price import get_coin_price


class TradeForm(ModelForm):

    class Meta:
        model = Position
        fields = ('cryptocurrency', 'USD_value_of_purchase')
        widgets = {
            'cryptocurrency': forms.Select(attrs={
                'class': 'form-control',
            }),
            'USD_value_of_purchase': forms.NumberInput(attrs={
                'class': 'form-control',
                'step': '0.01',
                'min': '1',
                'placeholder': 'Enter USD amount',
            }),
        }


class SellForm(ModelForm):

    class Meta:
        model = Position
        fields = ()
