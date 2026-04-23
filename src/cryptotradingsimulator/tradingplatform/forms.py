from django import forms
from django.forms import ModelForm
from .models import Position
from .live_coin_price import get_coin_price


class TradeForm(ModelForm):

    class Meta:
        model = Position
        fields = ('cryptocurrency', 'USD_value_of_purchase', 'stop_loss', 'take_profit')
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
            'stop_loss': forms.NumberInput(attrs={
                'class': 'form-control',
                'step': '0.01',
                'min': '0',
                'placeholder': 'e.g. 45000.00 (optional)',
            }),
            'take_profit': forms.NumberInput(attrs={
                'class': 'form-control',
                'step': '0.01',
                'min': '0',
                'placeholder': 'e.g. 55000.00 (optional)',
            }),
        }


class SellForm(ModelForm):

    class Meta:
        model = Position
        fields = ()
